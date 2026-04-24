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
        margin: var(--ddd-spacing-large);   
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
    <div>
        ${upcomingEvents.length > 0 
          ? upcomingEvents.map(event => html`
            <div>
              <strong>${event.title}</strong> - ${event.date}
            </div>
          `)
          : html`<p>No upcoming events.</p>`
        }
    </div>
    `;
  }
}
globalThis.customElements.define(ironingSchedule.tag, ironingSchedule);