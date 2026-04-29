import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class ironingPlayerInfo extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-player-info";
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
        max-width: 1000px;
        font-family: var(--ddd-font-navigation);     
        margin: 0 auto;
      }
      .player-container
      {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--ddd-spacing-4);
        width: 100%;
      }
       h1{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: var(--ddd-ls-72-lg);
        margin-bottom: var(--ddd-spacing-6);
      }
      .player-card
      {
        border: var(--ddd-border-xs);
        border-color: light-dark(black, white);
        border-radius: var(--ddd-radius-sm);
        box-shadow: var(--ddd-shadow-sm);
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-5);
        background-color: var(--ddd-theme-default-potential0);
        width: 100%; 
        max-width: 800px; 
        padding: var(--ddd-spacing-4); 
        box-sizing: border-box;
      }
       .player-card:hover {
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
      .player-card h2, .player-card p {
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
      <h1>League Players</h1>
      <div class="player-container">
        ${this.teams?.map(team => {
          return team.players.map(player => html`
            <div class="player-card">
              <div>
                <img  class="team-logo" src="${player.picture}" alt="${team.name} logo">
              </div>
              <h2>${player.name}</h2>
              <p>${team.name}</p>
              <p>Position: ${player.position}</p>
            </div>
          `);
        })}
      </div>
    `;
  }
}
globalThis.customElements.define(ironingPlayerInfo.tag, ironingPlayerInfo);