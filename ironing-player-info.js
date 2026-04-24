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
      }
    `];
  }

render() {
    return html`
      <h1>League Players</h1>
      <div class="player-container">
        ${this.teams.map(team => {
          return team.players.map(player => html`
            <div class="player-card">
              <h1>${player.name}</h1>
              <div class="team-name">${team.name}</div>
              <p>Position: ${player.position}</p>
              <p>Team Rank: ${player.rank}</p>
            </div>
          `);
        })}
      </div>
    `;
  }
}
globalThis.customElements.define(ironingPlayerInfo.tag, ironingPlayerInfo);