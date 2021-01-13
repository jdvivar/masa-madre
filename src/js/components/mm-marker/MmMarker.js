import { LitElement, html, css } from 'lit-element'
import { nothing } from 'lit-html'
import { unsafeSVG } from 'lit-html/directives/unsafe-svg'

import { colors } from '../../utils/values.styles.js'
import { polychrome } from '../../utils/polychrome.js'
import pin from '../../../images/pin.svg'

export class MmMarker extends LitElement {
  static get is () {
    return 'mm-marker'
  }

  static get properties () {
    return {
      type: { type: String }
    }
  }

  static get styles () {
    return css`
      @keyframes pulse {
        0% {
          box-shadow: 0 0 0 0 ${polychrome(colors.markerBlue, 'setAlpha', 40)};
        }
        100% {
          box-shadow: 0 0 0 10px ${polychrome(colors.markerBlue, 'setAlpha', 0)};
        }
      }
      
      .me {
        height: 10px;
        width: 10px;
        background: ${colors.markerBlue};
        border-radius: 100%;
        animation: pulse 2s infinite;
        border: 2px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .pin {
        width: 20px;
        position: relative;
        right: 4px;
        bottom: 13px;
      }
    `
  }

  renderMe () {
    return html`
      <div class=me></div>
    `
  }

  renderPin () {
    return html`
      <div class=pin>
        ${unsafeSVG(pin)}
      </div>
    `
  }

  render () {
    if (this.type) {
      return this.type === 'me'
        ? this.renderMe()
        : this.renderPin()
    }

    return nothing
  }
}
