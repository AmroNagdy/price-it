import Model from 'price-model/common/Model';
import * as Tooltips from 'price-model/common/Tooltips';
import NumericParameter from 'price-model/common/parameter/NumericParameter';
import { extractParameterValues, existsNull, existsNaN } from 'price-model/common/parameter/ParameterUtils';

export default new Model(
  'Equities',
  'Dividend Discount',
  [
    new NumericParameter('D', 'Current dividend value'),
    new NumericParameter('g', 'Dividend growth rate', Tooltips.PERCENTAGE),
    new NumericParameter('r', 'Cost of equity capital', Tooltips.PERCENTAGE),
    new NumericParameter('T', 'Time periods', Tooltips.INTEGERS_GEQ_1)
  ],
  keyedParameters => {
    const { D, g, r, T } = extractParameterValues(keyedParameters);
    const numericParameters = [D, g, r, T];
    if (existsNull(numericParameters) || existsNaN(numericParameters) || !Number.isInteger(T) || T < 1) {
      return null;
    }

    const [gDecimal, rDecimal] = [g, r].map(x => x / 100);

    const discountedDividendInPeriodT = Array(T).fill().map((_, t) => (D * Math.pow(1 + gDecimal, t + 1)) / Math.pow(1 + rDecimal, t + 1));
    const totalDiscountedDividendValue = discountedDividendInPeriodT.reduce((a, b) => a + b, 0)

    return totalDiscountedDividendValue;
  }
);