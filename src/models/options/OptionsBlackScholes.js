import Model from "../Model";
import Input from "../Input";
import * as jstat from 'jstat';

const OptionsBlackScholes = new Model(
  'Options',
  'Black-Scholes',
  [
    new Input('S', 'Spot price'),
    new Input('T', 'Maturity'),
    new Input('K', 'Strike price'),
    new Input('r', 'Risk-free rate'),
    new Input('sigma', 'Volatility of underlying')
  ],
  (S, T, K, r, sigma) => {
    const d1 = (Math.log(S / K) + (r + 0.5 * Math.pow(sigma, 2)) * T) / (sigma * Math.sqrt(T));
    const d2 = d1 - (sigma * Math.sqrt(T));

    return K * Math.pow(Math.E, -r * T) * jstat.normal.cdf(-d2, 0, 1) - S * jstat.normal.cdf(-d1, 0, 1);
  }
);

export default OptionsBlackScholes;