import { html, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
import { styles } from './UhContentText.styles.js'
import { UhText } from '../uh-text/UhText.js'

export class UhContentText extends UhText {
  @property({ type: Boolean, reflect: true }) first
  @property({ type: Boolean, reflect: true }) last
  @property({ type: Boolean }) center
  @property({ type: Boolean, attribute: 'reduced-spacing' }) reducedSpacing

  static get is () {
    return 'uh-content-text'
  }

  static get styles () {
    return [
      styles,
      super.styles
    ]
  }

  attributeChangedCallback (name, oldval, newval) {
    super.attributeChangedCallback(name, oldval, newval)
    this.requestUpdate()
  }

  render () {
    const classes = {
      first: this.first,
      last: this.last,
      center: this.center,
      'reduced-spacing': this.reducedSpacing
    }

    return html`
      <p class=${classMap(classes)}>
        ${super.render()}
      </p>
    `
  }
}
