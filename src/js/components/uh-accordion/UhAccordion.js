import { LitElement, html, property } from 'lit-element'
import { styles } from './UhAccordion.styles.js'
import '../uh-flex/uh-flex.js'

export class UhAccordion extends LitElement {
  @property({ type: Boolean }) active
  @property({ type: Number, attribute: false }) accordionsTop

  static get is () {
    return 'uh-accordion'
  }

  static get styles () {
    return styles
  }

  connectedCallback () {
    super.connectedCallback()
    if (this.active) {
      const lightTargets = this.querySelectorAll('.active-this')
      if (lightTargets) {
        lightTargets.forEach(target => target.classList.add('active'))
      }
    }
    const offsetTopElement = document.getElementById('accordion-top')
    if (offsetTopElement) {
      this.accordionsTop = offsetTopElement.offsetTop
    }
  }

  firstUpdated () {
    super.firstUpdated()
    if (this.active) {
      const shadowTargets = this.shadowRoot.querySelectorAll('.active-this')
      if (shadowTargets) {
        shadowTargets.forEach(target => target.classList.add('active'))
      }
    }
  }

  handleClick (e) {
    const lightTargets = this.querySelectorAll('.active-this')
    const shadowTargets = this.shadowRoot.querySelectorAll('.active-this')
    const otherAccordions = document.querySelectorAll('uh-accordion')
    if (this.active && (lightTargets || shadowTargets)) {
      lightTargets.forEach(target => target.classList.remove('active'))
      shadowTargets.forEach(target => target.classList.remove('active'))
    } else {
      lightTargets.forEach(target => target.classList.add('active'))
      shadowTargets.forEach(target => target.classList.add('active'))
      if (otherAccordions) {
        otherAccordions.forEach(accordion => {
          if (accordion.active) accordion.handleClick()
        })
      }
    }
    this.active = !this.active
  }

  render () {
    const description = this.querySelector('.description')
    if (description) {
      description.style.top = `${this.accordionsTop}px`
    }

    return html`
      <div class="wrapper" @click=${this.handleClick}>
        <slot></slot>
        <div class="arrow active-this">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    `
  }
}
