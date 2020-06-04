import * as jstat from 'jstat';

export default {
  assetClass: 'Options',
  name: 'Black-scholes',
  parameters: {
    S: { description: 'Spot Price', value: 0 },
    T: { description: 'Maturity', value: 0 },
    K: { description: 'Strike price', value: 0 },
    r: { description: 'Risk-free rate', value: 0 },
    sigma: { description: 'Volatility of underlying', value: 0 }
  },
  priceFunction: parameters => {
    const { S, T, K, r, sigma } = parameters;

    const d1 = (Math.log(S / K) + (r + 0.5 * Math.pow(sigma, 2)) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - (sigma * Math.sqrt(T));

    return K * Math.pow(Math.E, -r * T) * jstat.normal.cdf(-d2, 0, 1) - S * jstat.normal.cdf(-d1, 0, 1);
  }
}