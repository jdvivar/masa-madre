import { LitElement, html, css, property, unsafeCSS } from 'lit-element'
import { withBackground } from '../../utils/withBackground.mixin.js'
import { breakpoints } from '../../utils/values.styles.js'

const flexBreakpointStyle = size => css`
    @media(min-width: ${breakpoints[size]}) {
      div.from-${unsafeCSS(size)} {
        display: flex;
      }
    }
  `

export class UhFlex extends withBackground(LitElement) {
  @property({ type: String }) from = 'l'
  @property({ type: Boolean, attribute: 'align-center' }) alignCenter

  static get is () {
    return 'uh-flex'
  }

  static get styles () {
    return [
      Object.keys(breakpoints).map(flexBreakpointStyle),
      css`
        ::slotted(*) {
          flex-basis: 0;
          flex-grow: 1;
        }

        ::slotted(img) {
          object-fit: cover;
        }

        .align-center {
          align-items: center;
          height: 100%;
        }
      `
    ]
  }

  renderFlex () {
    return html`
      <div class="from-${this.from} ${this.alignCenter ? 'align-center' : ''}">
        <slot></slot>
      </div>
    `
  }

  render () {
    return this.renderBackground(this.renderFlex())
  }
}
