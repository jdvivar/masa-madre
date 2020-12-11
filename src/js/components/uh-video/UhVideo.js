import { LitElement, html, property, css } from 'lit-element'

export class UhVideo extends LitElement {
  @property({ type: String }) src

  static get is () {
    return 'uh-video'
  }

  static get styles () {
    return css`
      video {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    `
  }

  render () {
    return html`
      <video loop muted autoplay playsinline src=${this.src} type="video/mp4"/>
    `
  }
}
