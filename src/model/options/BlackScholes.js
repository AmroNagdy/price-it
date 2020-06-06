import * as jstat from 'jstat';
import Model from '../Model';
import NumericParameter from '../parameter/NumericParameter';
import SelectionParameter from '../parameter/SelectionParameter';
import { extractParameterValues } from '../parameter/ParameterMappers';

export default new Model(
  'Options',
  'Black-scholes',
  [
    new NumericParameter('S', 'Spot price'),
    new NumericParameter('K', 'Strike price'),
    new NumericParameter('T', 'Maturity'),
    new NumericParameter('r', 'Risk-free rate'),
    new NumericParameter('σ', 'Volatility of underlying'),
    new SelectionParameter('Call or put', 'Option type', ['Call', 'Put'])
  ],
  keyedParameters => {
    const { S, T, K, r, σ, 'Call or put': callOrPut } = extractParameterValues(keyedParameters);
    if ([S, T, K, r, σ, callOrPut].some(parameter => parameter === null)) {
      return null;
    }

    const d1 = (Math.log(S / K) + (r + 0.5 * Math.pow(σ, 2)) * T) / (σ * Math.sqrt(T));
    const d2 = d1 - σ * Math.sqrt(T);

    if (callOrPut === 'Call') {
      return S * jstat.normal.cdf(d1, 0, 1) - K * Math.pow(Math.E, -r * T) * jstat.normal.cdf(d2, 0, 1);
    } else {
      return K * Math.pow(Math.E, -r * T) * jstat.normal.cdf(-d2, 0, 1) - S * jstat.normal.cdf(-d1, 0, 1);
    }
  }
);