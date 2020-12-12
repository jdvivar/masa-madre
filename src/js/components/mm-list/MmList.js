import { LitElement, html, css } from 'lit-element'
import '../mm-list-item/mm-list-item.js'

export class MmList extends LitElement {
  static get is () {
    return 'mm-list'
  }

  static get styles () {
    return css`
    `
  }

  render () {
    return html`
      <div class="wrapper">
        <mm-list-item>masa madre 1</mm-list-item>
        <mm-list-item>masa madre 2</mm-list-item>
        <mm-list-item>masa madre</mm-list-item>
      </div>
    `
  }
}
