import Model from 'model/Model';
import NumericParameter from 'model/parameter/NumericParameter';
import NumericArrayParameter from 'model/parameter/NumericArrayParameter';
import { extractParameterValues, existsNull, existsNaN } from 'model/parameter/ParameterUtils';

export default new Model(
  'Stocks',
  'Discounted Cash Flow',
  [
    new NumericArrayParameter('CF', 'Cash flows in time period (comma separated)'),
    new NumericParameter('r', 'Discount rate (%)'),
    new NumericParameter('N', 'Discrete time periods')
  ],
  keyedParameters => {
    const { CF, r, N } = extractParameterValues(keyedParameters);
    const numericParameters = CF.concat([r, N]);
    if (existsNull(numericParameters) || existsNaN(numericParameters) || !Number.isInteger(N) || N < 1 || CF.length !== N) {
      return null;
    }

    const rDecimal = r / 100;

    const discountedCashFlowInPeriodT = Array(N).fill().map((_, t) => CF[t] / Math.pow(1 + rDecimal, t + 1));
    const totalDiscountedCashFlows = discountedCashFlowInPeriodT.reduce((a, b) => a + b, 0)

    return totalDiscountedCashFlows;
  }
);