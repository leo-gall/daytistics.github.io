import WebComponent from "../../web-component.js";

const COMPONENT_NAME = "social-icons";

class SocialIcons extends WebComponent {
  constructor() {
    super(COMPONENT_NAME);
  }
}

customElements.define(COMPONENT_NAME, SocialIcons);
