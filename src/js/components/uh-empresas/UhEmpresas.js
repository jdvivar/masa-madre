import { LitElement, html } from 'lit-element'
import { styles } from './uh-empresas.styles.js'

export class UhEmpresas extends LitElement {
  static get is () {
    return 'uh-empresas'
  }

  static get styles () {
    return styles
  }

  render () {
    return html`
      <div>
        <slot></slot>
      </div>
    `
  }
}
