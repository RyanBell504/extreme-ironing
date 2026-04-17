/**
 * Copyright 2026 RyanBell504
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "./ironing-nav-bar.js";
import "./Ironing-slide-show.js"
import "./about-ironing.js";

export class ExtremeIroning extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "extreme-ironing";
  }

  constructor() {
    super();
    this.menu = [];
    this.images = [];
    this.activePage = 'home';
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      menu: { type: Array },
      activePage: { type: String },
      images: { type: Array }
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
    `];
  }

  // Lit render the HTML
  render() {
    return html`
      <ironing-nav-bar .menu="${this.menu}"
      @route-changed="${this._handleRouteChange}"
      ></ironing-nav-bar>
      ${this.renderActivePage()}
       `;
  }
  
  renderActivePage() {
    switch (this.activePage) {
      case "home":
        return html`<h1>Board To Be Wild</h1>
      <ironing-slide-show .images="${this.images}"></ironing-slide-show>`;
      case "about":
        return html`<h1>About Page</h1>
        <p>This is the about page for our extreme ironing leage Board to be wild.</p>`;
        case "what-is-extreme-ironing":
        return html`<about-ironing></about-ironing>`;
      case "contact":
        return html`<h1>Contact Page</h1>`;
      default:
        return html`<h1>Page Not Found</h1>`;
    }
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
firstUpdated() {
      const urlParms = new URLSearchParams(window.location.search);
      this.activePage = urlParms.get('page') || this.activePage;
      fetch("/api/data.js") //     /api/data.js for vercel , ./data.json for npm
      .then(r => r.json())
      .then(data => {
        this.menu = data.menu || [];
        this.images = data.images || [];
        this._updateRote();
      })
  }
  _handleRouteChange(e) {
    this.activePage = e.detail.slug;
    this._updateRote();
  }
  _updateRote() {
  const currentURL = new URL(window.location.href);
    currentURL.searchParams.set('page', this.activePage);
    window.history.pushState(null, '', currentURL.toString());
    this.requestUpdate();
}
}

globalThis.customElements.define(ExtremeIroning.tag, ExtremeIroning);