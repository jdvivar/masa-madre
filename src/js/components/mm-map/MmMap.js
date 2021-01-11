import { LitElement, html } from 'lit-element'
import { nothing } from 'lit-html'
import knn from 'sphere-knn'
import GEOJSON_DATA from '../../../_data/geo.json'
import { styles } from './MmMap.styles.js'

import { map, tileLayer, Map, marker, divIcon, featureGroup, LatLngBounds } from 'leaflet/dist/leaflet-src.esm.js'
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
      },
      center: {
        type: Object
      }
    }
  }

  static get styles () {
    return styles
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
      .on('moveend', this.updateList.bind(this))
  }

  addMarkers () {
    GEOJSON_DATA.features.forEach(feature => {
      marker(feature.geometry.coordinates, {
        icon: divIcon({ html: '<mm-marker type=pin></mm-marker>' })
      })
        .bindTooltip(`${feature.properties.id}`)
        .addTo(this.map)
    })

    this.fitBounds()
  }

  fitBounds (n = 2) {
    const closestFeatures = knn(GEOJSON_DATA.features)(this.center.lng, this.center.lat, n)
      .map(feature => marker(feature.geometry.coordinates))

    const newBounds = featureGroup(closestFeatures).getBounds()
    this.map.fitBounds(newBounds)
    this.updateList(newBounds)
  }

  updateList (bounds) {
    if (!(bounds instanceof LatLngBounds)) {
      bounds = this.map.getBounds()
    }

    const featuresWithinBounds = GEOJSON_DATA.features.filter(feature => bounds.contains(feature.geometry.coordinates))
    this.dispatchEvent(new window.CustomEvent('update-list', {
      detail: featuresWithinBounds
    }))
  }

  handleLocationEvent (e) {
    if (e.type === 'locationfound') {
      this.center = e.latlng
      marker(this.center, {
        icon: divIcon({ html: '<mm-marker type=me></mm-marker>' })
      })
        // .bindTooltip('I ❤ Masa Madre', {
        //   direction: 'top',
        //   offset: [0, -20]
        // })
        .addTo(this.map)
        // .openTooltip()

      this.addMarkers()
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
