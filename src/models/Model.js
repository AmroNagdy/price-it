export default class Model {

  constructor(assetClassName, modelName, inputs, priceFunction) {
    this.assetClassName = assetClassName;
    this.modelName = modelName;
    this.inputs = inputs;
    this.priceFunction = priceFunction;
  };

};