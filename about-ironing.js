import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class aboutIroning extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "about-ironing";
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
        .photo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
      }
    `];
  }

  render() {
    return html`
    <div>
        <h1>What is Extreme Ironing?</h1>
        <p>Extreme ironing is a sport that combines the thrill of extreme sports with the mundane task of ironing clothes. Participants take their ironing boards to remote and often dangerous locations, such as mountain peaks, underwater, or even while skydiving, to iron their clothes.</p>
        <p>The sport was invented in 1997 by Phil Shaw, who was looking for a way to make ironing more exciting. Since then, it has gained a cult following around the world, with participants competing in various extreme ironing competitions and events.</p>
        <p>Extreme ironing is more than just the thrill of ironing in extreme locations.</p>
        <div class=photo>
        <img src="https://miro.medium.com/v2/resize:fit:1000/0*sO9bHiMSh64Jf2Z8.jpg">
        </div>
    </div>
      `;
  }
}
globalThis.customElements.define(aboutIroning.tag, aboutIroning);