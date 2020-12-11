import { LitElement, html, property } from 'lit-element'

import { Required } from '@lion/form-core'
import '@lion/form/lion-form.js'
import '../uh-text/uh-text.js'
import '../uh-icon/uh-icon.js'
import '../uh-break/uh-break.js'

import { styles } from './UhLlamanosDialog.styles.js'

const getCustomMessage = () => {
  return 'Este campo es obligatorio'
}

export class UhLlamanosDialog extends LitElement {
  @property({ type: Boolean }) submitted

  static get is () {
    return 'uh-llamanos-dialog'
  }

  static get styles () {
    return styles
  }

  submit ({ target: form }) {
    if (form.hasFeedbackFor.includes('error')) {
      return
    }

    console.log(form.serializedValue)
    this.submitted = true
    this.requestUpdate()
  }

  renderForm () {
    if (this.submitted) {
      return html`
        <uh-text>Apuntado!</uh-text>
      `
    }
    return html`
      <lion-form @submit="${this.submit}">
        <form>
          <uh-form-input
              name="name"
              autocomplete="given-name"
              .validators=${[new Required({}, { getMessage: getCustomMessage })]}>
            <div slot="label">
              <uh-text size="xs">Nombre*</uh-text>
              <uh-break size="xs"></uh-break>
            </div>
          </uh-form-input>
          <uh-break size="xs"></uh-break>
          <uh-form-input
              name="tel"
              autocomplete="tel"
              .validators=${[new Required({}, { getMessage: getCustomMessage })]}>
            <div slot="label">
              <uh-text size="xs">Teléfono*</uh-text>
              <uh-break size="xs"></uh-break>
            </div>
          </uh-form-input>
          <uh-break></uh-break>
          <uh-button
              type="submit"
              color="royalBlue">
            Llamadme
          </uh-button>
        </form>
      </lion-form>
    `
  }

  render () {
    const handleClick = () => this.dispatchEvent(new window.Event('close-overlay', { bubbles: true }))

    return html`
    <div slot="content" class="dialog">
      <uh-icon name="close" @click=${handleClick}></uh-icon>
      <div class="dialog-form-wrapper">
        <uh-text size="s" weight="bold">
          Escribe tu nombre y número, y te llamaremos lo antes posible
        </uh-text>
        <uh-break size="s"></uh-break>
        ${this.renderForm()}
      </div>
      <div class="dialog-links-wrapper">
        <uh-text size="xs">
          Si lo prefieres, envíanos un WhatsApp o llámanos
        </uh-text>
        <uh-break size="xs"></uh-break>
        <uh-icon name="v-hand" style="margin-left: 90px"></uh-icon>
        <div style="display: inline-block; vertical-align: middle;">
          <uh-text color="mineShaft" size="m" weight="bold">
            <a href="tel:+34674108474">
              674 108 474
            </a>
          </uh-text><br>
          <uh-text color="mineShaft" size="m" weight="bold">
            <a href="tel:+34910549195">
              91 054 91 95
            </a>
          </uh-text>
        </div>
      </div>
    </div>
    `
  }
}
