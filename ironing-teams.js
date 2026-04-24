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
      }
    `];
  }

  render() {
    return html`
    <div>
      <h1>Competing Teams</h1>
      <div>
        ${this.teams.map(team => html`
          <div>
            <h2>${team.name}</h2>
            <p>${team.description}</p>
          </div>
        `)}
      </div>
    </div>
      `;
  }
}
globalThis.customElements.define(ironingTeams.tag, ironingTeams);