import Model from '../Model';
import NumericParameter from '../parameter/NumericParameter';
import SelectionParameter from '../parameter/SelectionParameter';
import { extractParameterValues, existsNull } from '../parameter/ParameterUtils';

export default new Model(
  'Options',
  'Binomial',
  [
    new NumericParameter('S', 'Spot price'),
    new NumericParameter('K', 'Strike price'),
    new NumericParameter('T', 'Discrete time to maturity'),
    new NumericParameter('r', 'Risk-free rate (%)'),
    new NumericParameter('u', 'Upside price increase (%)'),
    new NumericParameter('d', 'Downside price decrease (%)'),
    new NumericParameter('p', 'Upside probability (%)'),
    new SelectionParameter('Call or put', 'Option type', ['Call', 'Put'])
  ],
  keyedParameters => {
    const { S, T, K, r, u, d, p, 'Call or put': callOrPut } = extractParameterValues(keyedParameters);
    if (existsNull([S, T, K, r, u, d, p, callOrPut]) || !Number.isInteger(T) || T <= 0 || p > 100 || p < 0) {
      return null;
    }

    const [rDecimal, uDecimal, dDecimal, pDecimal] = [r, u, d, p].map(x => x / 100);

    // Model the underlying's price evolution using a (T * 2) + 1 x T + 1 array.
    const rows = (T * 2) + 1;
    const columns = T + 1;
    const binaryTree = Array.from({ length: rows }, e => Array(columns).fill(null));
    const matrixMidpoint = T;

    // Propagate forward the underlyingPrice at each node by applying 'u' and 'd' multiplications.
    binaryTree[matrixMidpoint][0] = { underlyingPrice: S, optionValue: 0 };

    for (let columnI = 1; columnI < columns; columnI++) {
      const stoppingPoint = matrixMidpoint + columnI;

      for (let rowI = matrixMidpoint - columnI; rowI <= stoppingPoint; rowI += 2) {
        // Use min and max to avoid out-of-bounds exceptions for the nodes in the bottom and top right corners respectively.
        const leftBelowNode = binaryTree[Math.min(rowI + 1, rows - 1)][columnI - 1];
        const leftAboveNode = binaryTree[Math.max(rowI - 1, 0)][columnI - 1];

        if (leftBelowNode !== null) {
          binaryTree[rowI][columnI] = { underlyingPrice: leftBelowNode.underlyingPrice * (1 + uDecimal), optionValue: 0 };
        } else {
          binaryTree[rowI][columnI] = { underlyingPrice: leftAboveNode.underlyingPrice * (1 - dDecimal), optionValue: 0 };
        }
      }
    }

    // Calculate the terminal nodes' option values first as they cannot be time discounted or probability weighted (they are at maturity).
    const optionValueFunction = underlyingPrice => Math.max(callOrPut === 'Call' ? underlyingPrice - K : K - underlyingPrice, 0);

    for (let rowI = 0; rowI < rows - 1; rowI++) {
      const node = binaryTree[rowI][columns - 1];

      if (node !== null) {
        node.optionValue = optionValueFunction(node.underlyingPrice);
      }
    }

    // Propagate backwards the time-discounted & probability weighted value of the option at each node.
    for (let columnI = columns - 2; columnI >= 0; columnI--) {
      const stoppingPoint = matrixMidpoint + columnI;

      for (let rowI = matrixMidpoint - columnI; rowI <= stoppingPoint; rowI += 2) {
        const node = binaryTree[rowI][columnI];
        const rightAboveNode = binaryTree[rowI - 1][columnI + 1];
        const rightBelowNode = binaryTree[rowI + 1][columnI + 1];

        node.optionValue = (pDecimal * rightAboveNode.optionValue + (1 - pDecimal) * rightBelowNode.optionValue) / (1 + rDecimal);
      }
    }

    console.log(binaryTree);

    return binaryTree[matrixMidpoint][0].optionValue;
  }
);