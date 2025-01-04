import WebComponent from "../../web-component.js";

const COMPONENT_NAME = "newsletter-signup-form";

class NewsletterForm extends WebComponent {
  constructor() {
    super(COMPONENT_NAME);
  }

  async connectedCallback() {
    await super.connectedCallback();

    const submitButton = document.querySelector(
      '.main-form > input[type="submit"]'
    );
    if (submitButton) {
      submitButton.addEventListener("click", () => {
        sessionStorage.setItem("newsletter", "true");
        console.log("Newsletter signed up");
      });
    }
  }
}

customElements.define(COMPONENT_NAME, NewsletterForm);
