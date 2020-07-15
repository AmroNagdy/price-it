export default class Parameter {

  constructor(name, description, tooltip) {
    if (new.target === Parameter) {
      throw new TypeError('Cannot construct a Parameter class directly. Please use a derived class.')
    }

    this.name = name;
    this.description = description;
    this.tooltip = tooltip;
    this.value = null;
  };

};