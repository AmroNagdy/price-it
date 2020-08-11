import Model from 'price-model/common/Model';
import * as Tooltips from 'price-model/common/Tooltips';
import NumericParameter from 'price-model/common/parameter/NumericParameter';
import NumericArrayParameter from 'price-model/common/parameter/NumericArrayParameter';
import { extractParameterValues, existsNull, existsNaN } from 'price-model/common/parameter/ParameterUtils';

export default new Model(
  'Forwards',
  'Deterministic Interest Rate',
  [
    new NumericParameter('S', 'Current spot price of underlying'),
    new NumericArrayParameter('D', 'Dividend in period t'),
    new NumericParameter('r', 'Risk-free rate', Tooltips.PERCENTAGE),
    new NumericParameter('q', 'Convenience yield', Tooltips.PERCENTAGE),
  ],
  keyedParameters => {
    const { S, D, r, q } = extractParameterValues(keyedParameters);
    const numericParameters = D.concat([S, r, q]);
    if (existsNull(numericParameters) || existsNaN(numericParameters) || D.length < 1) {
      return null;
    }

    const [rDecimal, qDecimal] = [r, q].map(x => x / 100);
    const T = D.length;

    const discountedSpotPriceOfUnderlying = S * Math.pow(Math.E, (rDecimal - qDecimal) * T);
    const discountedDividendInPeriodT = Array(T).fill().map((_, t) => D * Math.pow(Math.E, (rDecimal - qDecimal) * (T - t + 1)));
    const totalDiscountedDividends = discountedDividendInPeriodT.reduce((a, b) => a + b, 0)

    return discountedSpotPriceOfUnderlying + totalDiscountedDividends;
  }
);