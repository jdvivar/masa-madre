import { LitElement, html, css } from 'lit-element'

export class MmAddressBar extends LitElement {
  static get is () {
    return 'mm-address-bar'
  }

  static get styles () {
    return css`
      .wrapper {
        padding: 20px;
        display: flex;
        justify-content: flex-end;
      }

      input {
        border-radius: 100px;
        border: 3px solid transparent;
        height: 50px;
        padding: 10px;
        font-size: 18px;
        outline: none;
        transition: all 0.3s ease;
        flex-grow: 1;
      }

      input:focus,
      input:hover {
        border: 3px solid lightgrey;
      }
    `
  }

  // render () {
  //   return html`
  //     <div class="wrapper">
  //       <input type="search" id="site-search" name="q" aria-label="Search through site content" autocomplete="off">
  //       <button>Hola</button>
  //     </div>
  //   `
  // }

  render () {
    return html`
      <div class="wrapper">
        <button>Localízame</button>
      </div>
    `
  }
}
