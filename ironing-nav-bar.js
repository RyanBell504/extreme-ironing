import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { ref } from "lit/directives/ref.js";


export class ironingNavBar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-nav-bar";
  }
  
  constructor() {
    super();
    this.menu = [];
  }
  static get properties() {
    return {
        menu : { type: Array},
      ...super.properties,
    };
  }
  
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-primary);
        color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      nav {
        background-color: var(--ddd-theme-primary);
        color: var(--ddd-theme-accent);
        display: flex;
        align-items: center;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
        flex-direction: row;
        gap: 50px;
      }
      .dropdown {
        display: none;
        position: absolute;
        background-color: var(--ddd-theme-primary);
        min-width: 160px;
      }
      .dropdown ul {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
      nav li:hover .dropdown {
        display: block;
      }
    `];
  }

  render() {
    return html`
    <nav> 
      <ul>  
        ${this.menu.map(link => html`
          <li>
            <a href="${link.slug}" @click="${(e) => this._handleClick(e, link.slug)}">${link.title}</a>
            ${link.children && link.children.length > 0 ? html`
              <div class="dropdown">
                <ul>
                  ${link.children.map(child => html`
                    <li><a href="${child.slug}" @click="${(e) => this._handleClick(e, child.slug)}">${child.title}</a></li>
                  `)}
                </ul>
              </div>
            ` : ''}
          </li>`)}
      </ul>
    </nav>
      `;
  }
  _handleClick(e, slug) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('route-changed', {
      detail: { slug },
      bubbles: true,
      composed: true
    }));
  }
}
globalThis.customElements.define(ironingNavBar.tag, ironingNavBar);