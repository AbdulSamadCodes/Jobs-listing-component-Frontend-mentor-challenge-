import { Component } from "/src/Components/components.js";

export class CardContentSection extends Component {
  #wrappersCount = 3;
  #categories = ['new', 'featured'];

  constructor(elementName, className, cardContent) {
    super(elementName, className);
    this.cardContent = cardContent;
  }

  createWrappers() {
    this.wrappers = [];

    for (let index = 0; index < this.#wrappersCount; index++) {
      let wrapper = document.createElement("div");
      wrapper.classList.add('content__wrapper');

      this.wrappers.push(wrapper);
    }

    this.createCompanyWrapper();
  }

  renderCategories() {
    return  this.#categories.filter((category) => Boolean(this.cardContent[category]))
    .map((renderedCategory) => {
      const categorySpan = document.createElement('span');
      categorySpan.classList.add(`${renderedCategory}-span`,'category__span');
      categorySpan.textContent = renderedCategory === "new" ? `${renderedCategory}!` : renderedCategory;

        return categorySpan;
      });
    }
    
    createCompanyWrapper() {
      this.companyWrapper = this.wrappers[0];
      this.companyWrapper.classList.add("company-wrapper");

      this.companyName = document.createElement("h2");
      this.companyName.classList.add('company__name');
      const { company } = this.cardContent;
      this.companyName.textContent = company;
      this.companyWrapper.appendChild(this.companyName);
      
      this.categoriesWrapper = document.createElement('div');
      this.categoriesWrapper.classList.add("category__wrapper");
      this.renderedCategories =  this.renderCategories();

      for(const renderedCategory of this.renderedCategories) {
        this.categoriesWrapper.appendChild(renderedCategory);
      }

      this.companyWrapper.appendChild(this.categoriesWrapper);      
   }

  createComponent() {
    this.createWrappers();

    this.component.appendChild(this.companyWrapper);
  }

  getComponent() {
    this.createComponent();

    return this.component;
  }
}

