import { LitElement, html, css } from 'lit-element'
import { breakpoints } from '../../utils/values.styles.js'

import '../mm-map/mm-map.js'
import '../mm-address-bar/mm-address-bar.js'
import '../mm-list/mm-list.js'

export class MmApp extends LitElement {
  static get is () {
    return 'mm-app'
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

  render () {
    return html`
      <div class="wrapper">
        <div class="map-wrapper">
          <mm-map>
            <mm-address-bar slot="address-bar"></mm-address-bar>
          </mm-map>
        </div>
        <div class="list-wrapper">
          <mm-list></mm-list>
        </div>
      </div>
    `
  }
}
