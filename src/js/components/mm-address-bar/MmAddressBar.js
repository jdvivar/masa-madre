import { LitElement, html, css } from 'lit-element'

export class MmAddressBar extends LitElement {
  static get is () {
    return 'mm-address-bar'
  }

  static get styles () {
    return css`
      .wrapper {
        position: absolute;
        top: 0;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
      }

      input {
        width: 100%;
        border-radius: 5px;
        border: 0px solid lightgrey;
        height: 50px;
        padding: 10px;
        font-size: 18px;
      }
    `
  }

  render () {
    return html`
      <div class="wrapper">
        <input type="search" id="site-search" name="q" aria-label="Search through site content" autocomplete="off">
      </div>
    `
  }
}
