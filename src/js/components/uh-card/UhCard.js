import { LitElement, html, property } from 'lit-element'
import { styles } from './UhCard.styles.js'

export class UhCard extends LitElement {
  @property({ type: String }) href

  static get is () {
    return 'uh-card'
  }

  static get styles () {
    return styles
  }

  renderCard () {
    return html`
      <div class=${this.slot}>
        <slot name="title"></slot>
        <slot></slot>
      </div>
    `
  }

  render () {
    if (this.href) {
      return html`
        <a href=${this.href}>
          ${this.renderCard()}
        </a>
      `
    }
    return this.renderCard()
  }
}
