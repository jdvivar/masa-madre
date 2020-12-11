import { LitElement, html } from 'lit-element'

import '@lion/dialog/lion-dialog.js'
import '../uh-llamanos-dialog/uh-llamanos-dialog.js'

export class UhLlamanos extends LitElement {
  static get is () {
    return 'uh-llamanos'
  }

  render () {
    const config = {
      hasBackdrop: false,
      hidesOnEscape: true,
      preventsScroll: true,
      elementToFocusAfterHide: document.body
    }

    return html`
      <lion-dialog .config=${config}>
        <slot name="invoker" slot="invoker"></slot>
        <uh-llamanos-dialog slot="content"></uh-llamanos-dialog>
      </lion-dialog>
    `
  }
}
