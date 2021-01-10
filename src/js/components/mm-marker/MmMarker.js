import { LitElement, html, css } from 'lit-element'
import { nothing } from 'lit-html'

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
      .me {
        height: 10px;
        width: 10px;
        background: #F00;
        border-radius: 100%;
        box-shadow: 0 0 0 5px rgba(255,0,0,0.1);
        border: 1px solid white;
      }

      .pin {
        height: 10px;
        width: 10px;
        background: #00F;
        border-radius: 100%;
        border: 1px solid white;
      }
    `
  }

  render () {
    if (this.type) {
      return html`
        <div class=${this.type}></div>
      `
    }

    return nothing
  }
}
