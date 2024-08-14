import { Component } from "/src/Components/component.js";

export class CardLogo extends Component {
  constructor(elementName, className, imgSrc) {
    super(elementName,className);  
    this.imgSrc = imgSrc;
  }

  createComponent() {
    this.logoImg = document.createElement("img");
    this.logoImg.src = this.imgSrc;

    this.component.appendChild(this.logoImg);
  }

  getComponent() {
    this.createComponent();

    return this.component;
  }
}

