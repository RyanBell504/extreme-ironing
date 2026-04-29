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
        max-width: 90%;
        margin: var(--ddd-spacing-8) auto;
        padding: 0 var(--ddd-spacing-4);
        font-family: var(--ddd-font-navigation);     
       }
       h1{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: var(--ddd-ls-72-lg);
        font-size: var(--ddd-font-size-xl);
        margin-bottom: var(--ddd-spacing-10);
      }
  
      .teams-list
      {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-4);
      }
      .team-item
      {
       display: grid;
        grid-template-columns: 80px 100px 1fr 1fr;
        align-items: center;
        padding: var(--ddd-spacing-4) var(--ddd-spacing-6);
        border-bottom: 1px solid light-dark(black, white);
        transition: background-color 0.2s ease;
      }
      .rank {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
      }
      .rank-1 { 
          color: var(--ddd-theme-default-roarGolden);
         font-size: var(--ddd-font-size-xl); 
        }
      .rank-2 { 
        color: var(--ddd-theme-default-limestoneMaxLight);
      }
      .rank-3 { color: var(--ddd-theme-default-shrineTan);
      }
      .team-item:hover {
        transform: translateY(-3px);
        background-color: light-dark(var(--ddd-theme-default-pughBlue), var(--ddd-theme-default-beaver70));
        box-shadow: var(--ddd-shadow-md);
      }
      .team-name {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-medium);
      }
      .team-logo
      {
        width: 80px;
        height: 80px;
        min-width: 80px;
        object-fit: cover;
        border-radius: var(--ddd-radius-sm);
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
    const sortedTeams = [...this.teams].sort((a, b) => a.rank - b.rank);
    return html`
    <div>
      <nav> 
        <h1>Rankings</h1> 
        
        <div class="team-list">
          ${sortedTeams.map(team => html`
            <div class="team-item">
              <div class="rank rank-${team.rank}">#${team.rank}</div>
              <img class="team-logo" src="${team.logo}" alt="">
              <div class="team-name">${team.name}</div>
            </div>
          `)}
        </div>
      </nav>
    </div>
      `;
  }
}
globalThis.customElements.define(ironingRanking.tag, ironingRanking);