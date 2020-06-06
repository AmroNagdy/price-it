export default class Parameter {

  constructor(name, description) {
    if (new.target === Parameter) {
      throw new TypeError('Cannot construct a Parameter class directly. Please use a derived class.')
    }

    this.name = name;
    this.description = description;
    this.value = null;
  };

};