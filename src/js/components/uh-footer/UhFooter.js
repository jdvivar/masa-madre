import { LitElement, html } from 'lit-element'
import { styles } from './UhFooter.styles.js'

export class UhFooter extends LitElement {
  static get is () {
    return 'uh-footer'
  }

  static get styles () {
    return styles
  }

  render () {
    return html`
      <div class="wrapper">
        <footer>
          <div class="wrapper-left">
            <div class="wrapper-contact">
              <slot name="logo"></slot>
              <address>
                <slot name="address"></slot>
              </address>
            </div>
            <div class="links-list">
              <slot name="links"></slot>
            </div>
          </div>
          <div>
            <div class="social-wrapper">
              <slot name="social"></slot>
            </div>
            <slot name="newsletter"></slot>
          </div>
        </footer>
      </div>
    `
  }
}
