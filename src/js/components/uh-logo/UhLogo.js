import { LitElement, html, property, css } from 'lit-element'

import '../uh-icon/uh-icon.js'
import { animation, breakpoints } from '../../utils/values.styles.js'

export class UhLogo extends LitElement {
  @property({ type: String }) href
  @property({ type: String }) color
  @property({ type: Object }) icon
  @property({ type: Boolean }) big

  static get is () {
    return 'uh-logo'
  }

  static get styles () {
    return css`
      div {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all ${animation.transitionTime};
      }

      @media(min-width: ${breakpoints.l}) {
        div.big {
          transform: scale(1.2);
          transform-origin: top left;
        }
      }

    `
  }

  render () {
    return html`
      <div class="${this.big ? 'big' : ''}">
        <a href=${this.href}>
          <uh-icon name="upgrade-hub-logo" .color=${this.color} fill-all></uh-icon>
        </a>
      </div>
    `
  }
}
