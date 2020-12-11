import { LitElement, html, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
import { styles } from './UhFaqQuestion.styles.js'

export class UhFaqQuestion extends LitElement {
  @property({ type: Boolean }) isOpen = false
  @property({ type: String }) color

  static get is () {
    return 'uh-faq-question'
  }

  static get styles () {
    return styles
  }

  toggleQuestion () {
    this.isOpen = !this.isOpen
    this.requestUpdate()
  }

  render () {
    return html`
      <div class=${classMap({ open: this.isOpen, question: true })} @click=${this.toggleQuestion}>
        <div class="question-title">
          <uh-text size="m" weight="bold" color=${this.color}>
            <slot name="question-title"></slot>
          </uh-text>
          <uh-text class="marker" size="m" weight="bold" color=${this.color}>
            +
          </uh-text>
        </div>
        <div class="question-answer">
          <slot name="question-answer"></slot>
        </div>
      </div>
    `
  }
}
