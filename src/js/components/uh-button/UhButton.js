import { html, property } from 'lit-element'
import { LionButton } from '@lion/button'
import { styles } from './uh-button.styles.js'

export class UhButton extends LionButton {
  @property({ type: String }) color
  @property({ type: Boolean }) block
  @property({ type: Boolean }) menu
  @property({ type: String }) href
  @property({ type: Boolean }) small
  @property({ type: Boolean, attribute: 'with-icon' }) withIcon

  static get is () {
    return 'uh-button'
  }

  static get styles () {
    return [
      super.styles,
      styles
    ]
  }

  renderButton () {
    const blockClass = this.block ? '' : 'btn-inline-block'
    const smallClass = this.small ? 'btn-small' : ''
    const withIcon = this.withIcon ? 'btn-with-icon' : ''

    if (this.color) {
      return html`
        <div class="btn-color-${this.color} ${blockClass} ${smallClass} ${withIcon}">
          ${super.render()}
        </div>
      `
    }
    if (this.menu) {
      return html`
        <div class="btn-menu ${blockClass} ${smallClass} ${withIcon}">
          ${super.render()}
        </div>
      `
    }

    return html`
      <div class="${blockClass} ${smallClass} ${withIcon}">
        ${super.render()}
      </div>
    `
  }

  render () {
    if (this.href) {
      return html`
        <a href=${this.href}>
          ${this.renderButton()}
        </a>
      `
    }
    return this.renderButton()
  }
}
