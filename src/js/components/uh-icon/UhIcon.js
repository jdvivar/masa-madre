import { LitElement, html, property, css } from 'lit-element'
import { spacing, colors } from '../../utils/values.styles.js'

export class UhIcon extends LitElement {
  @property({ type: String }) name
  @property({ type: Boolean }) list
  @property({ type: Boolean, attribute: 'fill-all' }) fillAll
  @property({ type: String }) color
  @property({ type: String }) width
  @property({ type: String }) height
  @property({ type: Object }) svg

  static get is () {
    return 'uh-icon'
  }

  static get styles () {
    return css`
      :host {
        vertical-align: middle;
      }
      .list {
        margin-right: ${spacing.xs};
      }
    `
  }

  connectedCallback () {
    super.connectedCallback()
    if (!this.svg) {
      const wrapper = document.querySelector(`#icons > #${this.name}`)
      if (wrapper) {
        const { children: [svg] } = wrapper
        if (svg) {
          this.svg = svg.cloneNode(true)
        }
      }
    }
  }

  render () {
    if (this.svg) {
      if (this.list) {
        this.svg.classList.add('list')
      }
      if (this.color) {
        const path = this.svg.querySelector('g') || this.svg.querySelector('path')
        if (path) {
          path.setAttribute('fill', colors[this.color] ? colors[this.color] : this.color)
        }
        if (this.fillAll) {
          const filled = this.svg.querySelectorAll('[fill]:not(.keep-color)')
          if (filled) {
            filled.forEach(el => el.setAttribute('fill', colors[this.color] ? colors[this.color] : this.color))
          }
        }
      }
      if (this.width) {
        this.svg.style.width = this.width
      }
      if (this.height) {
        this.svg.style.height = this.height
      }
    }
    return html`${this.svg}`
  }
}
