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
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .pin {
        height: 2px;
        width: 2px;
        display: flex;
        justify-content: center;
        align-items: center;
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
        <span>🥖</span>
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
