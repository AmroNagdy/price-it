import Model from 'model/Model';
import NumericParameter from 'model/parameter/NumericParameter';
import SelectionParameter from 'model/parameter/SelectionParameter';
import { extractParameterValues, existsNull, existsNaN } from 'model/parameter/ParameterUtils';

export default new Model(
  'Options',
  'Binomial Tree',
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
    const numericParameters = [S, T, K, r, u, d, p];
    if (existsNull(numericParameters.concat([callOrPut])) || existsNaN(numericParameters) || !Number.isInteger(T) || T <= 0 || p > 100 || p < 0) {
      return null;
    }

    const [rDecimal, uDecimal, dDecimal, pDecimal] = [r, u, d, p].map(x => x / 100);

    // Model the underlying's price evolution using a (T * 2) + 1 x T + 1 array.
    const rows = (T * 2) + 1;
    const columns = T + 1;
    const binaryTree = Array.from({ length: rows }, e => Array(columns).fill(null));
    const middleRow = T;

    // Propagate forward the underlyingPrice at each node by applying 'u' and 'd' multiplications.
    binaryTree[middleRow][0] = { underlyingPrice: S, optionValue: 0 };

    for (let column = 1; column < columns; column++) {
      const stoppingPoint = middleRow + column;

      for (let row = middleRow - column; row <= stoppingPoint; row += 2) {
        // Use min and max to avoid out-of-bounds exceptions for the nodes in the bottom and top right corners respectively.
        const leftBelowNode = binaryTree[Math.min(row + 1, rows - 1)][column - 1];
        const leftAboveNode = binaryTree[Math.max(row - 1, 0)][column - 1];

        if (leftBelowNode !== null) {
          binaryTree[row][column] = { underlyingPrice: leftBelowNode.underlyingPrice * (1 + uDecimal), optionValue: 0 };
        } else {
          binaryTree[row][column] = { underlyingPrice: leftAboveNode.underlyingPrice * (1 - dDecimal), optionValue: 0 };
        }
      }
    }

    // Calculate the terminal nodes' option values first as they cannot be time discounted or probability weighted (they are at maturity).
    const optionValueFunction = underlyingPrice => Math.max(callOrPut === 'Call' ? underlyingPrice - K : K - underlyingPrice, 0);

    for (let row = 0; row < rows - 1; row++) {
      const node = binaryTree[row][columns - 1];

      if (node !== null) {
        node.optionValue = optionValueFunction(node.underlyingPrice);
      }
    }

    // Propagate backwards the time-discounted & probability weighted value of the option at each node.
    for (let column = columns - 2; column >= 0; column--) {
      const stoppingPoint = middleRow + column;

      for (let row = middleRow - column; row <= stoppingPoint; row += 2) {
        const node = binaryTree[row][column];
        const rightAboveNode = binaryTree[row - 1][column + 1];
        const rightBelowNode = binaryTree[row + 1][column + 1];

        node.optionValue = (pDecimal * rightAboveNode.optionValue + (1 - pDecimal) * rightBelowNode.optionValue) / (1 + rDecimal);
      }
    }

    return binaryTree[middleRow][0].optionValue;
  }
);