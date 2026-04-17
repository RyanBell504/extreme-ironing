import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class ironingSlideShow extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-slide-show";
  }
  
  constructor() {
    super();
    this.images = [];
    this.index = 0;
  }
  static get properties() {
    return {
      images: { type: Array },
      index: { type: Number },
      ...super.properties,
    };
  }
  
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .slide-container {
        position: relative;
      }
      img {
        width: 20%;
        max-height: 400px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
        padding: var(--ddd-spacing-3);
        box-sizing: border-box;
      }
      .controls {
        display: block;
      }
      button {
        margin: 0 10px;
        padding: 10px 20px;
      }
    `];
  }

  render() {
    const current = this.images && this.images.length > 0 ? this.images[this.index] : null;
    return html`
    <h1>Recent Pictures from Extreme Ironing Events</h1>
    <div class="slide-container">
        <img src="${current.url}">
    </div>
    <div class="controls">
        <button @click="${() => this._changeSlide('prev')}">Previous</button>
        <button @click="${() => this._changeSlide('next')}">Next</button>
    </div>
      `;
  }

  _changeSlide(direction) {
    if (direction === 'next') {
      this.index = (this.index + 1) % this.images.length;
    } else {
      this.index = (this.index - 1 + this.images.length) % this.images.length;
    } 
  }
}
globalThis.customElements.define(ironingSlideShow.tag, ironingSlideShow);