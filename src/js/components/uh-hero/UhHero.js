import { LitElement, html, property } from 'lit-element'
import { styles } from './uh-hero.styles.js'
import { classMap } from 'lit-html/directives/class-map.js'

import '../uh-text/uh-text.js'
import '../uh-break/uh-break.js'

export class UhHeroHome extends LitElement {
  @property({ type: Boolean }) full
  @property({ type: Boolean, attribute: 'no-gradient' }) withoutGradient
  @property({ type: String }) background = 'transparent'

  static get is () {
    return 'uh-hero'
  }

  static get styles () {
    return styles
  }

  renderBackground () {
    return html`
      <div class="background-wrapper ${this.background}">
        ${this.withoutGradient ? '' : html`<div class="gradient"></div>`}
        <slot name="background"></slot>
      </div>
    `
  }

  renderLogo () {
    return html`
      <div class="logo-wrapper">
        <slot name="logo"></slot>
      </div>
    `
  }

  renderContent () {
    return html`
      <div class="content-wrapper">
        <slot name="content"></slot>
      </div>
    `
  }

  renderProductHero () {
    return html`
      <div class="product-hero-wrapper">
        <slot name="product-hero"></slot>
      </div>
    `
  }

  render () {
    const classes = {
      wrapper: true,
      full: this.full
    }

    return html`
      <div class=${classMap(classes)}>
        ${this.renderBackground()}
        ${this.renderLogo()}
        ${this.renderProductHero()}
        ${this.renderContent()}
      </div>
    `
  }
}
