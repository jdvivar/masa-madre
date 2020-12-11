import { LitElement, html, property } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map.js'
import { spacing } from '../../utils/values.styles.js'

export class UhBreak extends LitElement {
  @property({ type: String }) size = 'm'

  static get is () {
    return 'uh-break'
  }

  render () {
    const styles = {
      height: `${spacing[this.size]}`
    }
    return html`<div style="${styleMap(styles)}"></div>`
  }
}
