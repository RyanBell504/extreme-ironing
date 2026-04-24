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
    <div>
        <h1>Player Stats</h1>
          <div class="player-container">
          ${this.teams.map(team => {
          return team.players.map(player => html`
            <div class="player-card">
              <h1>${player.name}</h1>
              <p>Clothes Ironed: ${player["clothes ironed"]}</p>
              <p>Water Used: ${player["water used"]}</p>
            </div>
          `);
        })}
      </div>
    </div>
      `;
  }
}
globalThis.customElements.define(ironingStats.tag, ironingStats);