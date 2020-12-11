import { LitElement, html, css } from 'lit-element'
import { spacing, breakpoints } from '../../utils/values.styles.js'
import '../uh-flex/uh-flex.js'

export class UhProfile extends LitElement {
  static get is () {
    return 'uh-profile'
  }

  static get styles () {
    return css`
      ::slotted(img) {
        height: 200px !important;
        width: 100%;
        min-width: 200px;
        object-fit: cover;
      }

      @media(min-width: ${breakpoints.s}) {
        ::slotted(img) {
          height: 100px !important;
        }
      }
      
      @media(min-width: ${breakpoints.l}) {
        ::slotted(img) {
          height: 300px !important;
        }
        .wrapper {
          display: flex;
        }

        .quote {
          padding: 0 ${spacing.s};
        }
      }
    `
  }

  render () {
    return html`
      <div class="wrapper">
        <div>
          <slot></slot>
        </div>
        <div class="quote">
          <slot name="quote"></slot>
        </div>
      </div>
    `
  }
}
