import { Component } from "/src/Components/components.js";

export class CardContentSection extends Component {
  #wrappersCount = 3;
  #categories = ['new', 'featured'];
  #candidatesInfo = {};
  
  constructor(elementName, className, cardContent) {
    super(elementName, className);
    this.cardContent = cardContent;
  }

  renderBulletPoints() {
    const bulletedInfoSpans = Array.from(this.candidateInfoSpans).slice(1);

    for(const bulletedInfoSpan of bulletedInfoSpans) {
      const bulletPoint = document.createElement("span");
      bulletPoint.classList.add("bullet-point");

      this.infoWrapper.insertBefore(bulletPoint,bulletedInfoSpan);
    }
  }

  setCandidatesInfo() {
    const {postedAt, contract, location} = this.cardContent;

    this.#candidatesInfo['postedAt'] = postedAt;
    this.#candidatesInfo['contract'] = contract;
    this.#candidatesInfo['location'] = location
  }

  createWrappers() {
    this.wrappers = [];
    
    for (let index = 0; index < this.#wrappersCount; index++) {
      let wrapper = document.createElement("div");
      wrapper.classList.add('content__wrapper');
      
      this.wrappers.push(wrapper);
    }

    this.createCompanyWrapper();
    this.createPositionWrapper();
    this.createInfoWrapper();
  }

  renderCategories() {
    this.setCandidatesInfo();

    return  this.#categories.filter((category) => Boolean(this.cardContent[category]))
    .map((renderedCategory) => {
      const categorySpan = document.createElement('span');
      categorySpan.classList.add(`${renderedCategory}-span`,'category__span');
      categorySpan.textContent = renderedCategory === "new" ? `${renderedCategory}!` : renderedCategory;

        return categorySpan;
      });
    }

    renderCandidatesInfo() {
      return Object.keys(this.#candidatesInfo).map((infoKey) => {
         const infoSpan = document.createElement("span");
         infoSpan.classList.add('info-span');
         infoSpan.textContent = this.#candidatesInfo[infoKey]; 

         return infoSpan;
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

   createPositionWrapper() {
     this.positionWrapper = this.wrappers[1];
     this.positionWrapper.classList.add("position-wrapper");
     
     this.positionTitle = document.createElement('h2');
     this.positionTitle.classList.add("card__position__title");

     const { position } = this.cardContent;
     this.positionTitle.textContent = position;
     this.positionWrapper.appendChild(this.positionTitle);
   }

   createInfoWrapper() {
      this.infoWrapper = document.createElement('div');
      this.infoWrapper.classList.add("info-wrapper");

      this.candidateInfoSpans = this.renderCandidatesInfo();
      for(const infoSpan of this.candidateInfoSpans) {
          this.infoWrapper.appendChild(infoSpan);
      }

      this.renderBulletPoints();
   }

  createComponent() {
    this.createWrappers();

    this.component.appendChild(this.companyWrapper);
    this.component.appendChild(this.positionWrapper);
    this.component.appendChild(this.infoWrapper);
  }

  getComponent() {
    this.createComponent();
    return this.component;
  }
}

