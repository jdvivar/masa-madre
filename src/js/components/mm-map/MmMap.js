import { LitElement, html, css } from 'lit-element'

export class MmMap extends LitElement {
  static get is () {
    return 'mm-map'
  }

  static get styles () {
    return css`
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

  render () {
    return html`
      <div class="address-bar-wrapper">
        <slot name="address-bar"></slot>
      </div>
      <div class="map-wrapper">
        <img src="https://placekitten.com/600/600">
      </div>
    `
  }
}
