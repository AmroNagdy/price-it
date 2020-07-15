import Parameter from 'price-model/common/parameter/Parameter';

export default class NumericArrayParameter extends Parameter {

  constructor(name, description) {
    super(name, description, 'Comma separated values');
    this.value = [];
  }

};