export default class WebComponent extends HTMLElement {
  constructor(name) {
    super();
    this.name = name;
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    try {
      const htmlResponse = await fetch(
        `components/${this.name}/${this.name}.html`
      );
      if (!htmlResponse.ok) {
        throw new Error(`HTML file not found for component ${this.name}`);
      }
      const html = await htmlResponse.text();
      debugger;
      this.shadowRoot.innerHTML = html;

      this.setupGlobalCSS();
    } catch (error) {
      this.throwError(error.message);
    }
  }

  setupGlobalCSS() {
    if (!document.querySelector('style[data-id="global"]')) {
      const style = document.createElement("style");
      style.setAttribute("data-id", "global");
      style.textContent = `
        @import url("./assets/css/styles.css");
      `;
      document.head.appendChild(style);
    }
  }

  throwError(message, error = null) {
    document.title = "Component Rendering Error";
    document.body.innerHTML = `
      <style>
      p {
        display: block;
        padding: 1rem;
        border: 1px solid red;
        background-color: #f8d7da;
        color: #721c24;
      }
      </style>
      <p>
        <strong>An error was encountered while rendering the ${this.name} component:</strong>
        <br />
        ${message}
        
      </p>
    `;

    if (error) {
      console.error(
        `[${this.name}] An error was encountered while rendering the component:`,
        error
      );
    }

    console.warn(
      `[${this.name}] It is possible that you see other errors in the console. Please solve at first the error with the prefix [${this.name}]. Probably the other errors are a consequence of this one.`
    );
  }
}
