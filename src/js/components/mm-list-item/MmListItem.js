import { LitElement, html, css } from 'lit-element'

export class MmListItem extends LitElement {
  static get is () {
    return 'mm-list-item'
  }

  static get styles () {
    return css`
      .wrapper {
        height: 150px;
        border-bottom: 1px solid lightgrey;
      }
    `
  }

  render () {
    return html`
      <div class="wrapper">
        <slot>content</slot>
      </div>
    `
  }
}
