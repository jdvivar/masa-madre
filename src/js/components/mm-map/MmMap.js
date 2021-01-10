import { LitElement, html, css } from 'lit-element'
import { nothing } from 'lit-html'
import { minireset } from 'minireset.css/minireset.css.lit.js'

import { map, tileLayer, Map, marker, divIcon } from 'leaflet/dist/leaflet-src.esm.js'
import '../mm-marker/mm-marker.js'

// TODO
// Still lacking support for css-in-js
// More at: https://github.com/evanw/esbuild/issues/20
// For now this will just output a css file together with the bundle
// with name bundle.css
import 'leaflet/dist/leaflet.css'
export class MmMap extends LitElement {
  static get is () {
    return 'mm-map'
  }

  static get properties () {
    return {
      geolocationAvailable: {
        type: Boolean
      },
      map: {
        type: Map
      }
    }
  }

  static get styles () {
    return css`
      ${minireset}

      :host {
        position: relative;
        display: block;
        height: 100%;
      }

      .address-bar-wrapper {
        position: absolute;
        top: 0;
        width: 100%;
      }

      .map-wrapper {
        height: 100%;
        width: 100%;
        background: lightgrey;
      }

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      .leaflet-div-icon {
        background: none;
        border: none;
      }
    `
  }

  setupMap (target) {
    const baseLayer = tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19
    })
    this.map = map(target, { layers: [baseLayer] })

    this.map.locate({ setView: true })
      .on('locationfound', this.handleLocationEvent.bind(this))
      .on('locationerror', this.handleLocationEvent.bind(this))
  }

  handleLocationEvent (e) {
    if (e.type === 'locationfound') {
      marker(e.latlng, {
        icon: divIcon({ html: '<mm-marker me></mm-marker>' })
      })
        .bindTooltip('I ❤ Masa Madre', {
          direction: 'top',
          offset: [0, -20]
        })
        .addTo(this.map)
        .openTooltip()
    }
    this.dispatchEvent(new window.CustomEvent(e.type))
  }

  updated (changedProperties) {
    if (changedProperties.has('geolocationAvailable')) {
      const target = this.shadowRoot.querySelector('.map-wrapper')
      if (target) {
        this.setupMap(target)
      }
    }
  }

  render () {
    if (!this.geolocationAvailable) {
      return nothing
    }

    return html`
      <link rel="stylesheet" href="/bundle.css">
      <div class="address-bar-wrapper">
        <slot name="address-bar"></slot>
      </div>
      <div class="map-wrapper"></div>
    `
  }
}
