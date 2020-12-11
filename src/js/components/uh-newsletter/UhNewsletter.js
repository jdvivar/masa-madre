/** @todo remove this component if not in use */

import { LitElement, html } from 'lit-element'
import { Required } from '@lion/form-core'

import '@lion/form/lion-form.js'
import '../uh-form-input-email/uh-form-input-email.js'
import '../uh-button/uh-button.js'
import '../uh-break/uh-break.js'

const submit = ({ target: form }) => {
  if (form.hasFeedbackFor.includes('error')) {
    console.log('Form has errors')
    return
  }
  console.log(form.serializedValue)
}

const getCustomMessage = () => 'Escribe tu correo electrónico'

export class UhNewsletter extends LitElement {
  static get is () {
    return 'uh-newsletter'
  }

  render () {
    return html`
      <lion-form @submit=${submit}>
        <form>
          <uh-form-input-email
              name="email"
              autocomplete="email"
              placeholder="jhon@mail.com"
              .validators=${[new Required({}, { getMessage: getCustomMessage })]}>
            <div slot="label">
              <uh-text size="xs">Suscríbete a nuestra newsletter</uh-text>
              <uh-break size="xs"></uh-break>
            </div>
          </uh-form-input-email>
        </form>
      </lion-form>
    `
  }
}
