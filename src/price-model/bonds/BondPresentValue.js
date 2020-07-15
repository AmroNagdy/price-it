import Model from 'price-model/common/Model';
import * as Tooltips from 'price-model/common/Tooltips';
import NumericParameter from 'price-model/common/parameter/NumericParameter';
import { extractParameterValues, existsNull, existsNaN } from 'price-model/common/parameter/ParameterUtils';

export default new Model(
  'Bonds',
  'Present Value',
  [
    new NumericParameter('C', 'Coupon value'),
    new NumericParameter('i', 'Interest rate', Tooltips.PERCENTAGE),
    new NumericParameter('M', 'Bond value at maturity'),
    new NumericParameter('N', 'Number of coupon payments', Tooltips.INTEGERS_GEQ_1)
  ],
  keyedParameters => {
    const { C, i, M, N } = extractParameterValues(keyedParameters);
    const numericParameters = [C, i, M, N];
    if (existsNull(numericParameters) || existsNaN(numericParameters) || !Number.isInteger(N) || N < 1) {
      return null;
    }

    const iDecimal = i / 100;

    const discountedCouponPaymentInPeriodT = Array(N).fill().map((_, t) => C / Math.pow(1 + iDecimal, t + 1));
    const totalDiscountedCouponPayments = discountedCouponPaymentInPeriodT.reduce((a, b) => a + b, 0);
    const discountedValueAtMaturity = M / Math.pow(1 + iDecimal, N);

    return totalDiscountedCouponPayments + discountedValueAtMaturity;
  }
);