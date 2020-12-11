import { css } from 'lit-element'
import { formControlStyles, formFieldGroupTwoStyles } from '../uh-form-input/UhFormInput.js'
import { LionTextarea } from '@lion/textarea'

export class UhFormTextarea extends LionTextarea {
  static get is () {
    return 'uh-form-textarea'
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
