import Model from 'model/Model';
import NumericParameter from 'model/parameter/NumericParameter';
import { extractParameterValues, existsNull, existsNaN } from 'model/parameter/ParameterUtils';

export default new Model(
  'Stocks',
  'Dividend Discount',
  [
    new NumericParameter('D', 'Current dividend payment value'),
    new NumericParameter('g', 'Dividend growth rate (%)'),
    new NumericParameter('r', 'Cost of equity capital (%)'),
    new NumericParameter('N', 'Discrete time periods')
  ],
  keyedParameters => {
    const { D, g, r, N } = extractParameterValues(keyedParameters);
    const numericParameters = [D, g, r, N];
    if (existsNull(numericParameters) || existsNaN(numericParameters) || !Number.isInteger(N) || N < 1) {
      return null;
    }

    const [gDecimal, rDecimal] = [g, r].map(x => x / 100);

    const discountedDividendInPeriodT = Array(N).fill().map((_, t) => (D * Math.pow(1 + gDecimal, t + 1)) / Math.pow(1 + rDecimal, t + 1));
    const totalDiscountedDividendValue = discountedDividendInPeriodT.reduce((a, b) => a + b, 0)

    return totalDiscountedDividendValue;
  }
);