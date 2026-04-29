import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class ironingStats extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-stats";
  }
  
  constructor() {
    super();
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
        border-radius: var(--ddd-radius-sm);
        border-color: light-dark(black, white);
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
    const allPlayers = this.teams.map(team => team.players).flat();    
    const sortedPlayers = [...allPlayers].sort((a, b) => {
    return parseFloat(b.score.toString().replace(/,/g, '')) - 
           parseFloat(a.score.toString().replace(/,/g, ''));
    });

    return html`
    <div>
        <h1>Player Stats</h1>
        <div class="player-container">
          ${sortedPlayers.map(player => html`
            <div class="player-card">
              <img class="team-logo" src="${player.picture}" alt="${player.name}">
              <h2>${player.name}</h2>
              <p>Points Scored: ${player.score}</p>
              <p>Clothes Ironed: ${player["clothes ironed"]}</p>
            </div>
          `)}
        </div>
    </div>
    `;
  }
}
globalThis.customElements.define(ironingStats.tag, ironingStats);