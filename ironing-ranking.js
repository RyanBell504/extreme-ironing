import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class ironingRanking extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-ranking";
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
      <nav> 
        
      </nav>
    </div>
      `;
  }
}
globalThis.customElements.define(ironingRanking.tag, ironingRanking);