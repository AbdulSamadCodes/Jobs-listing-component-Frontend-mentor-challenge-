import { Component } from "/src/Components/components.js";
import { CardLogo } from "/src/Components/Job_Listing_Card/card__logo.js";
import { CardContentSection } from "/src/Components/Job_Listing_Card/card__content__section.js";

class JobListingCard extends Component {
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
    this.cardContentSection = new CardContentSection('div','card__content__section',this.jobCardData).getComponent();
    this.component.appendChild(this.cardContentSection);
  }

  getComponent() {
    this.createComponent();

    return this.component;
  }
}

const jobCard = new JobListingCard("li","job__listing__card", {
  "id": 1,
  "company": "Photosnap",
  "logo": "./images/photosnap.svg",
  "new": true,
  "featured": true,
  "position": "Senior Frontend Developer",
  "role": "Frontend",
  "level": "Senior",
  "postedAt": "1d ago",
  "contract": "Full Time",
  "location": "USA Only",
  "languages": ["HTML", "CSS", "JavaScript"],
  "tools": []
}).getComponent();


document.querySelector(".jobs-cards-list").appendChild(jobCard);

