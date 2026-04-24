import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class ironingRanking extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-ranking";
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
    const sortedTeams = [...this.teams].sort((a, b) => a.rank - b.rank);
    return html`
    <div>
      <nav> 
        <h1>Rankings</h1> 
        <div>
          ${sortedTeams.map(team => html`
            <div>
              <h1>Rank: ${team.rank}</h1>
              <h2>${team.name}</h2>
              <p>${team.description}</p>
            </div>
          `)}
        </div>
      </nav>
    </div>
      `;
  }
}
globalThis.customElements.define(ironingRanking.tag, ironingRanking);