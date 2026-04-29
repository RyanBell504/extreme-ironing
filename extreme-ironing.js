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
import "./ironing-calendar.js";
import "./ironing-teams.js";
import "./ironing-player-info.js";
import "./ironing-ranking.js";
import "./ironing-schedule.js";
import "./contact-us.js";
import "./past-events.js";
import "./ironing-social-links.js";
import "./ironing-stats.js";
import "./ironing-footer.js";


export class ExtremeIroning extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "extreme-ironing";
  }

  constructor() {
    super();
    this.menu = [];
    this.images = [];
    this.eventList = [];
    this.activePage = 'home';
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      menu: { type: Array },
      activePage: { type: String },
      eventList: { type: Array },
      images: { type: Array },
      teams: {type: Array}
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: light-dark(var(--ddd-theme-default-slateLight), var(--ddd-theme-default-nittanyNavy));
        font-family: var(--ddd-font-navigation);
      }
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        padding-left: var(--ddd-spacing-4);
      }
       .photo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
      }
      h1{
        display: flex;
        justify-content: center;
      }
      h2{
        display: flex;
        justify-content: center;
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
      <ironing-footer></ironing-footer>
       `;
  }
  
  renderActivePage() {
    switch (this.activePage) {
      case "home":
        return html`
        <div class=logo>   
            <img src="https://i.ibb.co/cSqRvjST/boardtobewildlogo.png" alt="Extreme Ironing League Logo">
        </div>
        <h1>Welcome to Board to Be Wild</h1>
        <h2>Extreme Ironing League</h2>
      <div class="slide-show-container">
      <ironing-slide-show .images="${this.images}"></ironing-slide-show>
      </div>
      <ironing-schedule .events="${this.eventList}" limit="5"></ironing-schedule>`;
      case "about":
        return html`<h1>About Board to Be Wild</h1>
        <div class=photo>
        <img src="https://i0.wp.com/www.paigeandjosh.com/wp-content/uploads/2010/01/2003ExtremeIroning.jpg?ssl=1" alt="Extreme Ironing Image" border="0">
        </div>
        <p>This is an Extreme Ironing league that hosts Extreme Ironing competitions around the world. Extreme ironing is a sport where participants take ironing boards to remote locations and iron items of clothing. If you are interested in learning more about extreme ironing, check out the "What is Extreme Ironing?" page for more information.</p>
        </p>`;
      case "what-is-extreme-ironing":
        return html`<about-ironing></about-ironing>`;
      case "mission-statement":
          return html`<h1>Mission Statement</h1>
          <p>Our mission at Board To Be Wild is to promote the sport of extreme ironing and provide a platform for extreme ironing enthusiasts to connect, compete, and share their passion for this unique and thrilling activity. We strive to create a welcoming and inclusive community where individuals of all skill levels can come together to celebrate the art of extreme ironing and push the boundaries of what is possible with an ironing board.</p>`;
      case "contact":
        return html`<contact-us></contact-us>
        <ironing-social-links></ironing-social-links>`;
      case "schedule":
        return html`<ironing-calendar .events="${this.eventList}"></ironing-calendar>`;
      case "team":
        return html`<ironing-teams .teams="${this.teams}"></ironing-teams>`;
      case "players":
        return html`<ironing-player-info .teams="${this.teams}"></ironing-player-info>`;
      case "rankings":
        return html`<ironing-ranking .teams="${this.teams}"></ironing-ranking>`;
      case "upcoming-events":
        return html`<ironing-schedule .events="${this.eventList}"></ironing-schedule>`;
      case "past-events":
        return html`<past-events .events="${this.eventList}"></past-events>`;
      case "stats":
        return html`<ironing-stats .teams="${this.teams}"></ironing-stats>`;
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
      fetch("/api/menu.js") //     /api/menu.js for vercel , ./data.json for npm
      .then(r => r.json())
      .then(data => {
        this.menu = data.menu || [];
        this.images = data.images || [];
        this.teams = data.teams || [];
        this._updateRote();
      })
       fetch("/api/schedule.js") //     /api/schedule.js for vercel , ./scheduledata.json for npm
      .then(r => r.json())
      .then(scheduledata => {
        this.eventList = scheduledata.events || [];
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