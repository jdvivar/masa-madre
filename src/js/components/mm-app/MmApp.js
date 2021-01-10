import { LitElement, html, css } from 'lit-element'
import { breakpoints } from '../../utils/values.styles.js'

import '../mm-map/mm-map.js'
import '../mm-address-bar/mm-address-bar.js'
import '../mm-list/mm-list.js'
import '../mm-geolocation/mm-geolocation.js'

export class MmApp extends LitElement {
  static get is () {
    return 'mm-app'
  }

  static get properties () {
    return {
      geolocationAvailable: { type: Boolean },
      loading: { type: Boolean },
      failure: { type: Boolean },
      features: { type: Array }
    }
  }

  static get styles () {
    return css`
      .wrapper {
        background: #fafafa;
        height: 100%;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
      }

      .map-wrapper {
        flex-grow: 1;
      }

      .list-wrapper {
        flex-grow: 0;
        overflow-y: scroll;
        max-height: calc(100vh - 100vw);
      }

      @media(min-width: ${breakpoints.s}) {
        .list-wrapper {
          max-height: none;
          flex-basis: 200px;
        }
      }
    
      @media(min-width: ${breakpoints.m}) {
        .wrapper {
          flex-direction: row-reverse;
        }

        .map-wrapper {
          flex-grow: 1;
        }

        .list-wrapper {
          flex-basis: 400px;
          max-height: none;
        }
      }
    `
  }

  handleGeolocationAvailable () {
    this.geolocationAvailable = true
  }

  handleLocationFound () {
    this.loading = false
  }

  handleLocationError () {
    this.failure = true
  }

  handleUpdateList ({ detail }) {
    this.features = detail
  }

  render () {
    return html`
      <mm-geolocation
          @geolocation-available=${this.handleGeolocationAvailable}
          .loading=${this.loading}
          .failure=${this.failure}
        ></mm-geolocation>
      <div class="wrapper">
        <div class="map-wrapper">
          <mm-map
              .geolocationAvailable=${this.geolocationAvailable}
              @locationfound=${this.handleLocationFound}
              @locationerror=${this.handleLocationError}
              @update-list=${this.handleUpdateList}
              >
            <mm-address-bar slot="address-bar"></mm-address-bar>
          </mm-map>
        </div>
        <div class="list-wrapper">
          <mm-list .features=${this.features}></mm-list>
        </div>
      </div>
    `
  }
}
