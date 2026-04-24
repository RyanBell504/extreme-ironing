import { LitElement, html, css, render } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";


export class ironingCalendar extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ironing-calendar";
  }
  
  constructor() {
    super();
    this.events = [];
    this.viewDate = new Date();
  }
  static get properties() {
    return {
      events: { type: Array },
      viewDate: { type: Object },
      ...super.properties,
    };
  }
  
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        padding-top: 50px;
      }
      .grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
      }
      .cell {
        border: 1px solid #ccc;
        padding: 10px;
        text-align: center;
        min-height: 60px;
      }
      .today {
        background-color: blue;
      }
      .event {
        background-color: var(--ddd-theme-primary);
      }
      .controls {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
      }
    `];
  }

  render() {
    const year = this.viewDate.getFullYear();
    const month = this.viewDate.getMonth();
    const monthName = this.viewDate.toLocaleString('default', { month: 'long' });
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();

    const calendarCells = [];

    for (let i = 0; i < firstDay; i++) {
      calendarCells.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      calendarCells.push(day);
    }
    
    return html`
      <div class="controls">
        <button @click="${() => this._changeMonth(-1)}">&lt;</button>
        <span>${monthName} ${year}</span>
        <button @click="${() => this._changeMonth(1)}">&gt;</button>
      </div>
      <div class="grid">
        ${['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => html`<div class="cell"><strong>${day}</strong></div>`)}
        ${calendarCells.map((day) => {
          if (day === null) {
            return html`<div class="cell"></div>`;
          }
          const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
          const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
          const dayEvents = this.events.filter(event => event.date === dateStr);
  
          return html`
            <div class="cell ${isToday ? 'today' : ''} ${dayEvents.length > 0 ? 'event' : ''}">
              ${day}
              ${dayEvents.map(event => html`<div class="event">${event.title}</div>`)}
            </div>
          `;
        })}
      </div>
      `;
  }

  _changeMonth(offset) {
    const newDate = new Date(this.viewDate);
    newDate.setMonth(newDate.getMonth() + offset);
    this.viewDate = newDate;
    this.requestUpdate();
  }

}
globalThis.customElements.define(ironingCalendar.tag, ironingCalendar);