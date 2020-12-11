import { html, property } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map.js'
import { colors } from './values.styles.js'

export const withBackground = superclass => class extends superclass {
  @property({ type: String }) background
  @property({ type: String }) radius = '0px'
  @property({ type: Boolean }) overflow = true

  renderBackground (content) {
    if (this.background) {
      const style = {
        backgroundColor: colors[this.background] ? colors[this.background] : this.background,
        overflow: this.overflow ? 'hidden' : 'visible',
        borderRadius: this.radius,
        height: '100%'
      }

      return html`
        <div style=${styleMap(style)}>
          ${content}
        </div>
      `
    }
    return html`${content}`
  }
}
