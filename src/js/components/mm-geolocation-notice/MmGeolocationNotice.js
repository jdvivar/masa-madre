import { LitElement, html, css } from 'lit-element'
import { nothing } from 'lit-html'
import '@lion/dialog/lion-dialog.js'
window.customElements.define('mm-geolocation-notice-content', class extends LitElement {
  static get styles () {
    return css`
      .wrapper {
        background: white;
        padding: 20px;
      }
    `
  }

  handleClick () {
    this.dispatchEvent(new window.Event('close-overlay', { bubbles: true }))
  }

  render () {
    return html`
      <div class="wrapper">
        Masa Madre Cerca necesita conocer tu posición para mostrarte los sitios cercanos. A continuación el navegador te pedirá permiso.
        <button
          class="close-button"
          @click=${this.handleClick}
        >
          Vale
        </button>
      </div>
    `
  }
})
export class MmGeolocationNotice extends LitElement {
  static get is () {
    return 'mm-geolocation-notice'
  }

  static get properties () {
    return {
      position: Object
    }
  }

  handleGeolocationSuccess (position) {
    console.log(position)
  }

  handleGeolocationFailure () {
    window.setTimeout(() => this.shadowRoot.querySelector('lion-dialog').__toggle(), 1000)
  }

  handleCloseOverlay () {
    window.navigator.geolocation.getCurrentPosition(
      this.handleGeolocationSuccess.bind(this),
      this.handleGeolocationFailure.bind(this)
    )
  }

  render () {
    const config = {
      hidesOnOutsideClick: false,
      hidesOnEsc: false
    }

    if (this.position) {
      return nothing
    }

    return html`
      <lion-dialog .opened="${true}" .config=${config}>
        <mm-geolocation-notice-content slot="content" @close-overlay=${this.handleCloseOverlay}></mm-geolocation-notice-content>
      </lion-dialog>
    `
  }
}
