import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class contactUs extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "contact-us";
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
        <h1>Contact Us</h1>
        <p>If you have any questions or would like to get in touch with us, please email us at email@boardtobewild.com</p>
        <p>Our address is 123 Ironing Lane, Extreme City, EC 12345</p>
        <p>We look forward to hearing from you!</p>
     </div>
    </div>
      `;
  }
}
globalThis.customElements.define(contactUs.tag, contactUs);