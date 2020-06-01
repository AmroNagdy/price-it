export default class Model {

  constructor(assetClassName, modelName, variables, variableDescriptions, assumptions, priceFunction) {
    this.assetClassName = assetClassName;
    this.modelName = modelName;
    this.variables = variables;
    this.variableDescriptions = variableDescriptions;
    this.assumptions = assumptions;
    this.priceFunction = priceFunction;
  };

};