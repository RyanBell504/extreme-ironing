import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class ironingTeams extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-teams";
  }
  
  constructor() {
    super();
    this.teams = [];
  }
  static get properties() {
    return {
      ...super.properties,
      teams: { type: Array }
    };
  }
  
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        max-width: 800px;
        margin: var(--ddd-spacing-8) auto;
        padding: 0 var(--ddd-spacing-4);
        font-family: var(--ddd-font-navigation);
      }
        h1{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: var(--ddd-ls-72-lg);
        margin-bottom: var(--ddd-spacing-6);
      }
      .teams-list
      {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-4);
      }
      .team-item
      {
        padding: var(--ddd-spacing-4);
        border: var(--ddd-border-xs);
        border-radius: var(--ddd-radius-sm);
        border-color: light-dark(black, white);
        box-shadow: var(--ddd-shadow-sm);
        transition: all 0.3s ease;
        display: grid;
        grid-template-columns: 80px 200px 1fr;
        align-items: center;
        gap: var(--ddd-spacing-5);
        margin-top: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-potential0);
      }
      .team-item:hover {
        transform: translateY(-3px);
        background-color: light-dark(var(--ddd-theme-default-pughBlue), var(--ddd-theme-default-beaver70));
        box-shadow: var(--ddd-shadow-md);
      }
      .team-logo
      {
        width: 80px;
        height: 80px;
        min-width: 80px;
        object-fit: cover;
        border-radius: var(--ddd-radius-sm);
      }
       .teams-item h2, .teams-item p{
          margin: var(--ddd-spacing-0);
          flex: 1; 
          text-align: left;
        }
      @media (max-width: 500px) {
        .team-item {
          flex-direction: column;
          text-align: center;
        }
      }
    `];
  }

  render() {
    return html`
      <h1>Competing Teams</h1>
      <div class=team-list>
        ${this.teams.map(team => html`
          <div class="team-item">
            <img  class="team-logo" src="${team.logo}" alt="${team.name} logo">
            <h2>${team.name}</h2>
            <p>${team.description}</p>
          </div>
        `)}
      </div>
      `;
  }
}
globalThis.customElements.define(ironingTeams.tag, ironingTeams);