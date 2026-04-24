import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class ironingSocialLinks extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-social-links";
  }
  
  constructor() {
    super();
  }
  static get properties() {
    return {
      ...super.properties,
    };
  }
  
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
    `];
  }

  render() {
    return html`
    <div>
        <h1>Connect with us!</h1>
        <input type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/3840px-Instagram_logo_2016.svg.png" alt="Instagram" width="50" height="50" @click="${() => window.open('https://hax.psu.edu/', '_blank')}">
        <input type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/1280px-X_logo.jpg" alt="Twitter" width="50" height="50" @click="${() => window.open('https://hax.psu.edu/', '_blank')}">
        <input type="image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/500px-Facebook_Logo_%282019%29.png" alt="Facebook" width="50" height="50" @click="${() => window.open('https://hax.psu.edu/', '_blank')}">
    </div>
      `;
  }
}
globalThis.customElements.define(ironingSocialLinks.tag, ironingSocialLinks);