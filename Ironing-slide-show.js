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
       margin: var(--ddd-spacing-4) auto;
       text-align: center;
       max-width: 800px;
      }
      h2{
        font-family: var(--ddd-font-navigation);
        color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-shrineMaxLight));
      }
      .slide-container {
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        border-radius: var(--ddd-radius-md);
        box-shadow: var(--ddd-shadow-md);
        margin-bottom: var(--ddd-spacing-4);
        aspect-ratio: 16 / 9;
      }
  
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .controls {
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-4);
      }
      button {
        cursor: pointer;
        background-color: light-dark(var(--ddd-theme-default-slateLight), var(--ddd-theme-default-nittanyNavy));
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        width: 100px;
        font-weight: var(--ddd-font-weight-bold);
        }
       .line {
        width: 100%;
        height: 2px;
        background-color: var(--ddd-theme-default-skyBlue);
        margin: var(--ddd-spacing-3);  
        justify-content: center;
        display: flex;
      }
      button:hover{
        background-color: light-dark(var(--ddd-theme-default-pughBlue), var(--ddd-theme-default-beaver70));
      }
      @media (max-width: 600px) {
        .slide-container {
          aspect-ratio: 4 / 3;
        }
        button {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-4xs);
        }
      }
    `];
  }

  render() {
    const current = this.images && this.images.length > 0 ? this.images[this.index] : null;
    return html`
    <div class=line></div>
    <h2>Recent Pictures from Events</h2>
    <div class="slide-container">
      ${current ? html`<img src="${current.url}" alt="${current.alt}">` : html`<p>No images available.</p>`}
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