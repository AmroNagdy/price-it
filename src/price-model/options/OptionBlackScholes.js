import * as jstat from 'jstat';
import Model from 'price-model/common/Model';
import * as Tooltips from 'price-model/common/Tooltips';
import NumericParameter from 'price-model/common/parameter/NumericParameter';
import SelectionParameter from 'price-model/common/parameter/SelectionParameter';
import { extractParameterValues, existsNull, existsNaN } from 'price-model/common/parameter/ParameterUtils';

export default new Model(
  'Options',
  'Black-Scholes',
  [
    new NumericParameter('S', 'Spot price'),
    new NumericParameter('K', 'Strike price'),
    new NumericParameter('T', 'Time to maturity'),
    new NumericParameter('r', 'Risk-free rate', Tooltips.PERCENTAGE),
    new NumericParameter('σ', 'Volatility of underlying', Tooltips.PERCENTAGE),
    new SelectionParameter('Call or put', 'Option type', ['Call', 'Put'])
  ],
  keyedParameters => {
    const { S, K, T, r, σ, 'Call or put': callOrPut } = extractParameterValues(keyedParameters);
    const numericParameters = [S, T, K, r, σ, callOrPut];
    if (existsNull(numericParameters) || existsNaN(numericParameters) || σ < 0) {
      return null;
    }

    const [rDecimal, σDecimal] = [r, σ].map(x => x / 100);

    const d1 = (Math.log(S / K) + (rDecimal + 0.5 * Math.pow(σDecimal, 2)) * T) / (σDecimal * Math.sqrt(T));
    const d2 = d1 - σ * Math.sqrt(T);

    if (callOrPut === 'Call') {
      return S * jstat.normal.cdf(d1, 0, 1) - K * Math.pow(Math.E, -rDecimal * T) * jstat.normal.cdf(d2, 0, 1);
    } else {
      return K * Math.pow(Math.E, -rDecimal * T) * jstat.normal.cdf(-d2, 0, 1) - S * jstat.normal.cdf(-d1, 0, 1);
    }
  }
);