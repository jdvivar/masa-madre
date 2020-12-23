import { LitElement, html, css } from 'lit-element'
import { nothing } from 'lit-html'

export class MmGeolocation extends LitElement {
  static get is () {
    return 'mm-geolocation'
  }

  static get properties () {
    return {
      position: Object,
      loading: {
        type: Boolean
      },
      failure: {
        type: Boolean
      }
    }
  }

  static get styles () {
    return css`
      .background {
        position: absolute;
        background: rgba(0,0,0,0.5);
        z-index: 1;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .dialog {
        background: white;
        padding: 20px;
        max-width: 300px;
      }
    `
  }

  handleGeolocationSuccess (position) {
    console.log(position)
    this.position = position
  }

  handleGeolocationFailure () {
    this.loading = false
    this.failure = true
  }

  handleStartGeolocation () {
    if (!navigator.geolocation) {
      this.unsupported = true
    } else {
      this.loading = true
      navigator.geolocation.getCurrentPosition(
        this.handleGeolocationSuccess.bind(this),
        this.handleGeolocationFailure.bind(this)
      )
    }
  }

  render () {
    if (this.position) {
      return nothing
    }

    if (this.unsupported) {
      return html`
      <div class="background">
        <div class="dialog">
          Tu dispositivo o navegador no soporta la geolocalización. Lo siento, no puedes usar esta app.
        </div>
      </div>
    `
    }

    if (this.loading) {
      return html`
      <div class="background">
        <div class="dialog">
          Loading ...
        </div>
      </div>
    `
    }

    if (this.failure) {
      return html`
      <div class="background">
        <div class="dialog">
          Por favor, asegúrate que la página tiene permiso para geolocalizarte y recarga la página.
          <button @click=${() => window.location.reload()}>
            Recargar
          </button>
        </div>
      </div>
    `
    }

    return html`
      <div class="background">
        <div class="dialog">
          Masa Madre Cerca necesita conocer tu posición para mostrarte los sitios cercanos. A continuación el navegador te pedirá permiso.
          <button @click=${this.handleStartGeolocation}>
            Vale
          </button>
        </div>
      </div>
    `
  }
}
