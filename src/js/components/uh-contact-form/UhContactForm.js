import { LitElement, html, css, property } from 'lit-element'
import { Required, MaxLength } from '@lion/form-core'

import '@lion/form/lion-form.js'
import '../uh-form-textarea/uh-form-textarea.js'
import '../uh-form-input-email/uh-form-input-email.js'
import '../uh-form-input/uh-form-input.js'
import '../uh-form-select/uh-form-select.js'
import '../uh-button/uh-button.js'
import '../uh-break/uh-break.js'
import '../uh-text/uh-text.js'
import { animation } from '../../utils/values.styles.js'

import { submitForm } from './UhContactForm.service.js'

const getCustomMessage = () => {
  return 'Este campo es obligatorio'
}

export class UhContactForm extends LitElement {
  @property({ type: String, attribute: 'href-legal' }) hrefLegal
  @property({ type: String, attribute: 'href-privacidad' }) hrefPrivacidad
  @property({ type: Array }) options
  @property({ type: Object }) prefilled
  @property({ type: String }) bootcampSelect
  @property({ type: Boolean }) submitted
  @property({ type: Boolean }) error
  @property({ type: Boolean, attribute: 'business-input' }) businessInput
  @property({ type: Boolean, attribute: 'message-input' }) messageInput
  @property({ type: Number, attribute: 'max-length' }) maxLength = 500

  static get is () {
    return 'uh-contact-form'
  }

  static get styles () {
    return css`
      ${animation.headShake}

      :host {
        --form-input-border-color: transparent;
        --form-input-validation-feedback-color: white;
      }

      div {
        color: white;
      }
      #submit {
        ${animation.animated}
        animation-duration: 1s;
      }

      #submit.error {
        animation-name: headShake;
      }
    `
  }

  async submit ({ target: form }) {
    if (form.hasFeedbackFor.includes('error')) {
      this.error = true
      this.requestUpdate()
      return
    }
    submitForm(form.serializedValue)
    this.submitted = true
    await this.requestUpdate()
    this.shadowRoot.querySelector('#success').scrollIntoView({
      block: 'center',
      behavior: 'smooth'
    })
  }

  handleBootcampSelect (e) {
    this.bootcampSelect = e.target.value
    this.requestUpdate()
  }

  renderBootcampSelect () {
    if (this.messageInput) return
    if (this.prefilled && this.prefilled.bootcamp) {
      this.bootcampSelect = this.prefilled.bootcamp
    }
    return html`
      <uh-form-select
          id="bootcamp"
          name="bootcamp"
          @change=${this.handleBootcampSelect}
          .modelValue=${this.prefilled && this.prefilled.bootcamp ? this.prefilled.bootcamp : 'no seleccionado'}
          ?hidden=${this.prefilled}>
        <select slot="input">
          <option selected hidden value>Selecciona...</option>
          ${this.options.map(({ title }) => html`<option>${title}</option>`)}
          <option>No estoy segur@, ¡ayudadme!</option>
        </select>
        <div slot="label">
          <uh-text slot="label" size="xs" color="white">Bootcamp</uh-text>
          <uh-break size="xs"></uh-break>
        </div>
      </uh-form-select>
      <uh-break size="s"></uh-break>
    `
  }

  renderBootcampOptionsSelect () {
    if (this.messageInput) return
    for (let index = 0; index < this.options.length; index++) {
      if (this.options[index].title === this.bootcampSelect) {
        return html`
          <uh-form-select id="option" name="option" .modelValue=${'no seleccionado'}>
            <select slot="input">
              <option selected hidden value>Selecciona...</option>
              ${this.options[index].options.map(({ date, title }) => html`<option>${date} - ${title}</option>`)}
            </select>
            <div slot="label">
              <uh-text slot="label" size="xs" color="white">Formato de interés</uh-text>
              <uh-break size="xs"></uh-break>
            </div>
          </uh-form-select>
        `
      }
    }
  }

  renderError () {
    if (this.querySelector('[slot=error]')) {
      return html`
        <slot name="error"></slot>
      `
    }
    return html`
      <uh-break size="s"></uh-break>
      <uh-text color="white" size="xs">Rellena los campos obligatorios por favor</uh-text>
    `
  }

  removeError () {
    this.error = false
    this.requestUpdate()
  }

  renderLegalCheckbox () {
    return html`
      <uh-break size="m"></uh-break>
      <input type="checkbox" id="legal" name="legal" required>
      <label for="legal"><uh-text size="xs" non-responsive color="white">Acepto las condiciones de la formación y la política de privacidad de UPGRADE HUB S.L. Tus datos serán tratados para gestionar la solicitud realizada, la mejora de los servicios prestados y recibir anuncios publicitarios de UPGRADE HUB S.L. Puedes obtener más información y conocer cómo ejercer tus derechos en <a class="white" href="${this.hrefPrivacidad}" target=_blank>nuestra política de privacidad</a> y puedes ponerte en contacto en cualquier momento con nosotros para revocarlo.</uh-text></label>
      <uh-break size="m"></uh-break>
    `
  }

  handleTextareaInput (e) {
    this.length = e.target.value.length
    this.requestUpdate()
  }

  renderTextarea () {
    if (!this.messageInput) return
    return html`
      <uh-form-textarea
          @click="${this.removeError}"
          @input="${this.handleTextareaInput}"
          max-rows="6"
          name="message"
          .validators=${[new Required({}, { getMessage: getCustomMessage }), new MaxLength(this.maxLength)]}>
        <div slot="label">
          <uh-text slot="label" size="xs" color="white">Tu mensaje*</uh-text>
          <uh-break size="xs"></uh-break>
        </div>
        <div slot="help-text">
          ${this.length ? this.length : 0}/${this.maxLength}
        </div>
      </uh-form-textarea>
    `
  }

  renderBusinessInput () {
    if (!this.businessInput) return
    return html`
      <uh-form-input
          name="organization"
          autocomplete="organization">
        <div slot="label">
          <uh-text slot="label" size="xs" color="white">Nombre de la empresa</uh-text>
          <uh-break size="xs"></uh-break>
        </div>
      </uh-form-input>
      <uh-break size="s"></uh-break>
      <uh-form-input
          @click="${this.removeError}"
          name="role"
          .validators=${[new Required({}, { getMessage: getCustomMessage })]}>
        <div slot="label">
          <uh-text slot="label" size="xs" color="white">Cargo*</uh-text>
          <uh-break size="xs"></uh-break>
        </div>
      </uh-form-input>
      <uh-break size="s"></uh-break>
    `
  }

  render () {
    if (!this.hrefLegal || !this.hrefPrivacidad) {
      console.error('ERROR: Please include href-legal and href-privacidad URLs for this form to be rendered')
      return html``
    }

    if (this.submitted) {
      if (this.querySelector('[slot=success]')) {
        return html`
          <div id="success">
            <slot name="success"></slot>
          </div>
        `
      }
      return html`
        <div id="success">
          <uh-text size="xl" color="white" weight="bold">Gracias!</uh-text>
          <uh-break></uh-break>
          <uh-text color="white">Nos pondremos en contacto contigo próximamente</uh-text>
        </div>
      `
    }

    return html`
      <lion-form @submit="${this.submit}">
        <form>
          <uh-form-input
              @click="${this.removeError}"
              name="name"
              autocomplete="given-name"
              .validators=${[new Required({}, { getMessage: getCustomMessage })]}>
            <div slot="label">
              <uh-text size="xs" color="white">Nombre*</uh-text>
              <uh-break size="xs"></uh-break>
            </div>
          </uh-form-input>
          <uh-break size="s"></uh-break>
          <uh-form-input
              @click="${this.removeError}"
              name="lname"
              autocomplete="family-name"
              .validators=${[new Required({}, { getMessage: getCustomMessage })]}>
            <div slot="label">
              <uh-text size="xs" color="white">Apellidos*</uh-text>
              <uh-break size="xs"></uh-break>
            </div>
          </uh-form-input>
          <uh-break size="s"></uh-break>
          <uh-form-input-email
              @click="${this.removeError}"
              name="email"
              autocomplete="email"
              .validators=${[new Required({}, { getMessage: getCustomMessage })]}>
            <div slot="label">
              <uh-text slot="label" size="xs" color="white">Correo electrónico*</uh-text>
              <uh-break size="xs"></uh-break>
            </div>
          </uh-form-input-email>
          <uh-break size="s"></uh-break>
          <uh-form-input
              @click="${this.removeError}"
              name="tel"
              autocomplete="tel"
              .validators=${[new Required({}, { getMessage: getCustomMessage })]}>
            <div slot="label">
              <uh-text slot="label" size="xs" color="white">Teléfono*</uh-text>
              <uh-break size="xs"></uh-break>
            </div>
          </uh-form-input>
          <uh-break size="s"></uh-break>
          ${this.renderBusinessInput()}
          ${this.renderBootcampSelect()}
          ${this.renderBootcampOptionsSelect()}
          ${this.renderTextarea()}
          ${this.renderLegalCheckbox()}
          <uh-button
              class="${this.error ? 'error' : ''}"
              type="submit"
              color="translucent"
              id="submit">
            Solicita información
          </uh-button>
          ${this.error ? this.renderError() : ''}
        </form>
      </lion-form>
    `
  }
}
