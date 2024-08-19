import { Component } from "/src/Components/components.js";

export class Tabs extends Component {
  #searchTabs = [];
  constructor(elementName,className,cardContent) {
    super(elementName,className);
    this.cardContent = cardContent;
  }  

  generateTabsArray() {
    const {role, level, languages, tools} = this.cardContent;
    this.#searchTabs = JSON.parse(JSON.stringify([role,level,languages,tools]));
  }

  createComponent() {
     this.generateTabsArray();
     this.tabsWrapper = document.createElement("div");
     this.tabsWrapper.classList.add('tabs__wrapper');
     this.renderTabs();

     this.component.appendChild(this.tabsWrapper);
  }

  renderTabs() {
    this.#searchTabs.flat().forEach((tabName) => {
      const searchTab = document.createElement("button");
      searchTab.classList.add("search__tab");
      searchTab.textContent = tabName;
      searchTab.addEventListener('click',(eventObj) => filterJobCards(eventObj));

      this.tabsWrapper.appendChild(searchTab);
    });
  }

  getComponent() {
    this.createComponent();
    return this.component;
  }
}
