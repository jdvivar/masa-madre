import { LitElement, html, css } from 'lit-element'
import { nothing } from 'lit-html'

export class MmGeolocation extends LitElement {
  static get is () {
    return 'mm-geolocation'
  }

  static get properties () {
    return {
      loading: {
        type: Boolean
      },
      failure: {
        type: Boolean
      },
      unsupported: {
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

  handleGeolocationAvailable () {
    this.failure = false
    this.dispatchEvent(new window.CustomEvent('geolocation-available'))
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
      this.handleGeolocationAvailable()
    }
  }

  renderUnsupported () {
    return html`
      <div class="background">
        <div class="dialog">
          Tu dispositivo o navegador no soporta la geolocalización. Lo siento, no puedes usar esta app.
        </div>
      </div>
    `
  }

  renderLoading () {
    return html`
      <div class="background">
        <div class="dialog">
          Loading ...
        </div>
      </div>
    `
  }

  renderFailure () {
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

  render () {
    if (this.failure === false & this.loading === false) {
      return nothing
    }

    if (this.unsupported) {
      this.renderUnsupported()
    }

    if (this.loading) {
      this.renderLoading()
    }

    if (this.failure) {
      this.renderFailure()
    }

    return html`
      <div class="background">
        <div class="dialog">
          Masa Madre Cerca necesita conocer tu posición para mostrarte los sitios cercanos. A continuación el navegador te pedirá permiso.
          <button @click=${this.handleStartGeolocation}>
            Vale
          </button>
          <hr>
          Esto está no en beta... sino en alpha! <a href="/sobre-el-proyecto">Sobre el proyecto</a>
        </div>
      </div>
    `
  }
}
