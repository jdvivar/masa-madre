import { LitElement, html, css } from 'lit-element'
import { nothing } from 'lit-html'
import '../mm-list-item/mm-list-item.js'

export class MmList extends LitElement {
  static get is () {
    return 'mm-list'
  }

  static get properties () {
    return {
      features: { type: Array }
    }
  }

  static get styles () {
    return css`
    `
  }

  render () {
    if (!this.features) {
      return nothing
    }

    return html`
      <div class="wrapper">
        ${this.features.map(feature => html`<mm-list-item>${feature.properties.id}</mm-list-item>`)}
      </div>
    `
  }
}
