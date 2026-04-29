import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import { ref } from "lit/directives/ref.js";
import "./ironing-social-links";

export class ironingFooter extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-footer";
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
         margin-top: auto;
      }
      footer
      {
        background-color: light-dark(var(--ddd-theme-default-pughBlue), var(--ddd-theme-default-beaver80));
        font-family: var(--ddd-font-navigation);
        box-shadow: var(--ddd-shadow-lg);
        width: 100%;
      }
      nav {
        display: flex;
        align-items: center;
        padding: 0 var(--ddd-spacing-4);
        height: 80px;
      }
      .logo {
        display: flex;
        align-items: center;
        height: 80px;
      }
      p {
          color: light-dark(var(--ddd-theme-default-coalyGray), var(--ddd-theme-default-shrineMaxLight));
          padding: 0 var(--ddd-spacing-space-6);
          height: 100%;
          display: flex;
          align-items: center;
          font-weight: var(--ddd-font-weight-bold);
          text-transform: uppercase;
          letter-spacing: var(--ddd-ls-72-lg);   
        }
      img {
        max-height: 70px;
        width: auto;
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
    <footer>
        <nav> 
         <div class="logo">
        <img src="https://i.ibb.co/cSqRvjST/boardtobewildlogo.png" alt="Extreme Ironing League Logo">
      </div>
      <p>© 2026 Board to Be Wild</p>
    </nav>
    </footer>
    
      `;
  }
}
globalThis.customElements.define(ironingFooter.tag, ironingFooter);