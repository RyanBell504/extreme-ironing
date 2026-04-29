import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class ironingSchedule extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-schedule";
  }
  
  constructor() {
    super();
    this.events = [];
  }
  static get properties() {
    return {
      ...super.properties,
      events: { type: Array },
      limit: { type: Number }
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
      .schedule-list
      {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-3);
      }
      .event-item
      {
        padding: var(--ddd-spacing-4);
        border: var(--ddd-border-xs);
        border-color: light-dark(black, white);
        border-radius: var(--ddd-radius-sm);
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-5);
        box-shadow: var(--ddd-shadow-sm);
        transition: all 0.3s ease; 
        cursor: default;
        background-color: var(--ddd-theme-default-potential0);
        width: 100%;
        box-sizing: border-box;
      }
      .event-item:hover
      {
        transform: translateY(-3px);
        background-color: light-dark(var(--ddd-theme-default-pughBlue), var(--ddd-theme-default-beaver70));
      }
      .event-picture
      {
        width: 70px;
        height: 40px;
        object-fit: cover;
        border-radius: var(--ddd-radius-sm);
      }
      .event-item strong, .event-item span {
        margin: var(--ddd-spacing-0);
        flex: 1;
        text-align: left;
      }
    `];
  }

  render() {
    const today = new Date().toISOString().split('T')[0];
    let upcomingEvents = this.events.filter(event => event.date >= today);

    if (this.limit) {
      upcomingEvents = upcomingEvents.slice(0, this.limit);
    }
    return html`
    <h1>Upcoming Events</h1>
    <div class="schedule-list">
        ${upcomingEvents.length > 0 
          ? upcomingEvents.map(event => html`
            <div class="event-item">
              <strong>${event.title}</strong>  <span>${event.date}</span> 
              <img class="event-picture" src="${event.picture}" alt="${event.title} logo">
            </div>
          `)
          : html`<p>No upcoming events.</p>`
        }
    </div>
    `;
  }
}
globalThis.customElements.define(ironingSchedule.tag, ironingSchedule);