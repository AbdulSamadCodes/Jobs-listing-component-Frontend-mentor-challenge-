export class Component {
  constructor(elementName, className) {
    this.component = document.createElement(elementName);
    this.component.classList.add(className);
  }

  createComponent() {
    throw new Error(`Child class has not implemented this ${this.createComponent.name}`);
  }

  getComponent() {
    throw new Error(`Child class has not implemented this ${this.getComponent.name}`);
  }
}



