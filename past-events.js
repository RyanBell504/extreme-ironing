import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class pastEvents extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "past-events";
  }
  
  constructor() {
    super();
    this.events = [];
  }
  static get properties() {
    return {
      ...super.properties,
      events: { type: Array }
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
    const upcomingEvents = this.events.filter(event => event.date <= today);
    return html`
    <h1>Past Events</h1>
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
globalThis.customElements.define(pastEvents.tag, pastEvents);