import * as jstat from 'jstat';
import Model from '../Model';
import { NUMBER } from '../ParameterTypes';
import Parameter from '../Parameter';

export default new Model(
  'Options',
  'Black-scholes',
  [
    new Parameter('S', 'Spot price', NUMBER, 0),
    new Parameter('T', 'Maturity', NUMBER, 0),
    new Parameter('K', 'Strike price', NUMBER, 0),
    new Parameter('r', 'Risk-free rate', NUMBER, 0),
    new Parameter('sigma', 'Volatility of underlying', NUMBER, 0)
  ],
  parameters => {
    console.log(parameters);
    return 0;
    // const { S, T, K, r, sigma } = this.extractParameterValues();

    // const d1 = (Math.log(S / K) + (r + 0.5 * Math.pow(sigma, 2)) * T) / (sigma * Math.sqrt(T));
    // const d2 = d1 - (sigma * Math.sqrt(T));

    // return K * Math.pow(Math.E, -r * T) * jstat.normal.cdf(-d2, 0, 1) - S * jstat.normal.cdf(-d1, 0, 1);
  }
);