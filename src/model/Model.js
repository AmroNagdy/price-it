export default class Model {

  constructor(assetClass, name, parameters, priceFunction) {
    this.assetClass = assetClass;
    this.name = name;
    this.parameters = parameters;
    this.priceFunction = priceFunction;
  };

};