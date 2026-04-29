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
        background-color: light-dark(var(--ddd-theme-default-pughBlue), var(--ddd-theme-default-beaver80));
        font-family: var(--ddd-font-navigation);
        box-shadow: var(--ddd-shadow-lg);
      }
      nav {
        display: flex;
        align-items: center;
        padding: 0 var(--ddd-spacing-4);
        height: 70px;
        width: 100%;
        box-sizing: border-box;
      }
      .logo {
        display: flex;
        align-items: center;
        padding-right: var(--ddd-spacing-4);
        height: 80px;
        flex-shrink: 0;
      }
      .logo:hover {
        cursor: pointer;
        transform: scale(1.05);
        transition: transform 0.3s ease;
      }
      ul {
        display: flex;
        margin: var(--ddd-spacing-0);
        padding: var(--ddd-spacing-0);
        list-style: none;
        flex-direction: row;
        gap: var(--ddd-spacing-13);
        flex: 1;
      
      }
      a {
          color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-shrineMaxLight));
          padding: 0 var(--ddd-spacing-space-6);
          height: 100%;
          display: flex;
          align-items: center;
          font-weight: var(--ddd-font-weight-bold);
          text-transform: uppercase;
          letter-spacing: var(--ddd-ls-72-lg);   
          white-space: nowrap;
        }a
      a:hover {
          color: var(--ddd-theme-default-limestone);
          outline: none;
        }
      .dropdown {
        display: none;
        position: absolute;
        background-color: light-dark(var(--ddd-theme-default-pughBlue), var(--ddd-theme-default-beaver80));
        border-radius: var(--ddd-border-radius);
        box-shadow: var(--ddd-shadow-md);
        padding: var(--ddd-spacing-2) 0;
        z-index: 1000;
      }
      .dropdown ul {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-0);
      }
      .dropdown li a {
        padding: var(--ddd-spacing-1);
        justify-content: flex-start;
      }
      input {
        max-height: 70px;
        width: auto;
      }
      nav li:hover .dropdown {
        display: block;
      }
      @media (max-width: 768px) {
        nav {
          padding: 0 var(--ddd-spacing-2);
          height: auto;
          min-height: 60px;
        }
        .logo {
          padding-right: var(--ddd-spacing-2);
          height: 60px;
        }
        ul {
          gap: var(--ddd-spacing-6);
          flex-wrap: wrap;
        }
        a {
          padding: 0 var(--ddd-spacing-2);
          font-size: 0.85rem;
          letter-spacing: var(--ddd-ls-72-sm);
        }
        input {
          max-width: 45px;
        }
      }
 
      @media (max-width: 480px) {
        nav {
          padding: 0 var(--ddd-spacing-1);
          min-height: 55px;
        }
        .logo {
          padding-right: var(--ddd-spacing-1);
          height: 55px;
        }
        ul {
          gap: var(--ddd-spacing-3);
        }
        a {
          padding: 0 var(--ddd-spacing-1);
          font-size: 0.75rem;
        }
        input {
          max-width: 40px;
        }
      }
    `];
  }

  render() {
    return html`
    <nav> 
      <div class="logo">
        <input type="image" src="https://i.ibb.co/cSqRvjST/boardtobewildlogo.png" alt="Extreme Ironing League Logo" border="0" @click="${(e) => this._handleClick(e, 'home')}">
      </div>
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