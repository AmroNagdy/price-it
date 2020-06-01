import Model from "../Model";

const OptionsBlackScholes = new Model(
  'Options',
  'Black-Scholes',
  ['S', 'T', 'K', 'r', 'sigma', 'callOrPut'],
  {
    S: 'spot price',
    T: 'maturity',
    K: 'strike price',
    r: 'risk-free rate',
    sigma: 'volatility of underlying',
    callOrPut: 'type of option'
  },
  [],
  (S, T, K, r, sigma, callOrPut) => {
    return 0;
  }
);

export default OptionsBlackScholes;