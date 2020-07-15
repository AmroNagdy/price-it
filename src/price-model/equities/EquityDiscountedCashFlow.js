import Model from 'price-model/common/Model';
import * as Tooltips from 'price-model/common/Tooltips';
import NumericParameter from 'price-model/common/parameter/NumericParameter';
import NumericArrayParameter from 'price-model/common/parameter/NumericArrayParameter';
import { extractParameterValues, existsNull, existsNaN } from 'price-model/common/parameter/ParameterUtils';

export default new Model(
  'Equities',
  'Discounted Cash Flow',
  [
    new NumericArrayParameter('CF', 'Cash flow in period t'),
    new NumericParameter('r', 'Discount rate', Tooltips.PERCENTAGE)
  ],
  keyedParameters => {
    const { CF, r } = extractParameterValues(keyedParameters);
    const numericParameters = CF.concat([r]);
    if (existsNull(numericParameters) || existsNaN(numericParameters) || CF.length < 1) {
      return null;
    }

    const rDecimal = r / 100;
    const T = CF.length;

    const discountedCashFlowInPeriodT = Array(T).fill().map((_, t) => CF[t] / Math.pow(1 + rDecimal, t + 1));
    const totalDiscountedCashFlows = discountedCashFlowInPeriodT.reduce((a, b) => a + b, 0)

    return totalDiscountedCashFlows;
  }
);