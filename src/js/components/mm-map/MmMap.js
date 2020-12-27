import { LitElement, html, css } from 'lit-element'
import { nothing } from 'lit-html'
import { minireset } from 'minireset.css/minireset.css.lit.js'

import { Map, View } from 'ol'
import { Tile } from 'ol/layer'
import { OSM } from 'ol/source'
import { fromLonLat } from 'ol/proj'

// TODO
// Still lacking support for css-in-js
// More at: https://github.com/evanw/esbuild/issues/20
// For now this will just output a css file together with the bundle
// with name bundle.css
import 'ol/ol.css'
export class MmMap extends LitElement {
  static get is () {
    return 'mm-map'
  }

  static get properties () {
    return {
      position: {
        type: window.GeolocationPosition
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
    `
  }

  setupMap ({ target, position }) {
    const map = new Map({
      layers: [
        new Tile({ source: new OSM() })
      ],
      view: new View({
        center: fromLonLat([position.coords.longitude, position.coords.latitude]),
        zoom: 18
      })
    })
    map.setTarget(target)
  }

  updated (changedProperties) {
    if (changedProperties.has('position')) {
      console.log('updated position')
      const target = this.shadowRoot.querySelector('.map-wrapper')
      if (target) {
        this.setupMap({ target, position: this.position })
      }
    }
  }

  render () {
    if (!this.position) {
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
