import { LitElement, html } from 'lit-element'
import { styles } from './UhMethod.styles.js'
import { getSlotsWithName } from '../../utils/getSlotsWithName.js'

export class UhMethod extends LitElement {
  static get is () {
    return 'uh-method'
  }

  static get styles () {
    return styles
  }

  renderSteps () {
    const steps = getSlotsWithName.bind(this)('step')
    return html`${steps}`
  }

  render () {
    return html`
      <div class="wrapper">
        ${this.renderSteps()}
      </div>
    `
  }
}
