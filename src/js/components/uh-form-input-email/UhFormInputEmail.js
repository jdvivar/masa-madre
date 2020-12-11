import { css } from 'lit-element'
import { LionInputEmail } from '@lion/input-email/src/LionInputEmail.js'
import { formControlStyles, formFieldGroupTwoStyles } from '../uh-form-input/UhFormInput.js'

export class UhFormInputEmail extends LionInputEmail {
  static get is () {
    return 'uh-form-input-email'
  }

  static get styles () {
    return [
      super.styles,
      css`
        ::slotted(.form-control) {
          ${formControlStyles()}
        }
        .form-field__group-two {
          ${formFieldGroupTwoStyles()}
        }
      `
    ]
  }
}
