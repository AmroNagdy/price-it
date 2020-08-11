import Model from 'price-model/common/Model';
import * as Tooltips from 'price-model/common/Tooltips';
import NumericParameter from 'price-model/common/parameter/NumericParameter';
import { extractParameterValues, existsNull, existsNaN } from 'price-model/common/parameter/ParameterUtils';

export default new Model(
  'Futures',
  'Cost of Carry',
  [
    new NumericParameter('S', 'Current spot price of underlying'),
    new NumericParameter('r', 'Risk-free rate', Tooltips.PERCENTAGE),
    new NumericParameter('s', 'Storage cost', Tooltips.PERCENTAGE + ' of spot price'),
    new NumericParameter('q', 'Convenience yield', Tooltips.PERCENTAGE),
    new NumericParameter('t', 'Time to maturity in days'),
  ],
  keyedParameters => {
    const { S, r, s, q, t } = extractParameterValues(keyedParameters);
    const numericParameters = [S, r, s, q, t];
    if (existsNull(numericParameters) || existsNaN(numericParameters)) {
      return null;
    }

    const costOfCarry = r + s - q;
    const fractionOfYear = t / 365;

    return S * Math.pow(Math.E, costOfCarry * fractionOfYear);
  }
);