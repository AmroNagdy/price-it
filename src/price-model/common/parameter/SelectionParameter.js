import Parameter from 'price-model/common/parameter/Parameter';

export default class SelectionParameter extends Parameter {

  constructor(name, description, selections) {
    if (selections.length === 0) {
      throw new Error('Cannot instantiate a SelectionParameter with no selection options.');
    }

    super(name, description);
    this.value = selections[0];
    this.selections = selections;
  }

};