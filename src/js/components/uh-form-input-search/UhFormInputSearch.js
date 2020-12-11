import { LitElement, html, css } from 'lit-element'

import '../uh-form-input/uh-form-input.js'
import { minireset } from 'minireset.css/minireset.css.lit.js'

export class UhFormInputSearch extends LitElement {
  static get is () {
    return 'uh-form-input-search'
  }

  static get styles () {
    return css`
      ${minireset}
    `
  }

  inputHandle (e) {
    this.dispatchEvent(new window.CustomEvent('input-search', {
      bubbles: true,
      detail: {
        value: e.target.value
      }
    }))
  }

  render () {
    return html`
      <uh-form-input type="search" placeholder="Buscar" @input=${this.inputHandle}></uh-form-input>
    `
  }
}
