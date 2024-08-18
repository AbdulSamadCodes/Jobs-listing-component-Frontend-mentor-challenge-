import { Component } from "/src/Components/components.js";
import { CardLogo } from "/src/Components/Job_Listing_Card/card__logo.js";
import { CardContentSection } from "/src/Components/Job_Listing_Card/card__content__section.js";
import { Tabs } from "/src/Components/Tabs/tabs-component.js";

export class JobListingCard extends Component {
  constructor(elementName, className,jobCardData) {
    super(elementName,className);  
    this.jobCardData = jobCardData;
  }

  createComponent() {
    //card logo
    const logoImgSrc = this.jobCardData.logo;
    this.cardLogo = new CardLogo("div","card__logo",logoImgSrc).getComponent();
    this.component.appendChild(this.cardLogo);

    //card content section
    this.cardContentSection = new CardContentSection('div','card__content__section',{...this.jobCardData}).getComponent();
    this.component.appendChild(this.cardContentSection);

    //tabs
    this.tabsSection = new Tabs('div','tabs__section',{...this.jobCardData}).getComponent();
    this.component.appendChild(this.tabsSection);
  }

  getComponent() {
    this.createComponent();
    return this.component;
  }
}



