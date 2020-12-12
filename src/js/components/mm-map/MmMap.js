import { LitElement, html, css } from 'lit-element'

export class MmMap extends LitElement {
  static get is () {
    return 'mm-map'
  }

  static get styles () {
    return css`
      div {
        width: 100%;
        height: 100%;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    `
  }

  render () {
    return html`
      <div>
        <img src="https://placekitten.com/300/300">
      </div>
    `
  }
}
