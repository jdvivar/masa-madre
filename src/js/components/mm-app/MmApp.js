import { LitElement, html, css } from 'lit-element'
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
      }

      .list-wrapper {
        overflow-y: scroll;
      }
    `
  }

  render () {
    return html`
      <div class="wrapper">
        <div class="map-wrapper" style="height: ${window.innerWidth}px">
          <mm-map></mm-map>
        </div>
        <mm-address-bar></mm-address-bar>
        <div class="list-wrapper" style="height: ${window.innerHeight - window.innerWidth}px">
          <mm-list></mm-list>
        </div>
      </div>
    `
  }
}
