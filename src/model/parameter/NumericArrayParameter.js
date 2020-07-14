import Parameter from './Parameter';

export default class NumericArrayParameter extends Parameter {

  constructor(name, description) {
    super(name, description);
    this.value = [];
  }

};