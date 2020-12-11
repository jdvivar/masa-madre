import { LitElement, html } from 'lit-element'
import { styles } from './UhIconsGrid.styles.js'

export class UhIconsGrid extends LitElement {
  static get is () {
    return 'uh-icons-grid'
  }

  static get styles () {
    return styles
  }

  render () {
    return html`
      <div class="flex">
        <div class="grid">
          <slot></slot>
        </div>
      </div>
    `
  }
}
