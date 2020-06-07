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
    new NumericParameter('T', 'Time to maturity'),
    new NumericParameter('r', 'Risk-free rate'),
    new NumericParameter('u', 'Upside % price increase'),
    new NumericParameter('d', 'Downside % price decrease'),
    new NumericParameter('p', 'Upside probability'),
    new SelectionParameter('Call or put', 'Option type', ['Call', 'Put'])
  ],
  keyedParameters => {
    const { S, T, K, r, u, d, p, 'Call or put': callOrPut } = extractParameterValues(keyedParameters);
    if (existsNull([S, T, K, r, u, d, p, callOrPut])) {
      return null;
    }

    const valueFunction = underlyingPrice => callOrPut === 'Call' ? underlyingPrice - K : K - underlyingPrice;

    return 0;
  }
);