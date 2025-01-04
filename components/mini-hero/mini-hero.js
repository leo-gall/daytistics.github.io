import WebComponent from "../../web-component.js";

const COMPONENT_NAME = "mini-hero";

class MiniHero extends WebComponent {
  constructor() {
    super(COMPONENT_NAME);
  }

  async connectedCallback() {
    await super.connectedCallback();

    const title = this.getAttribute("data-heading");

    const titleElement = this.shadowRoot.querySelector(`.heading`);
    titleElement.innerHTML = title ? title : "Daytistics";

    const text = this.getAttribute("data-text");
    if (!text) {
      this.throwError("Missing data-text attribute");
    }

    const textElement = this.shadowRoot.querySelector(`.text`);
    textElement.innerHTML = text;
  }
}

customElements.define(COMPONENT_NAME, MiniHero);
