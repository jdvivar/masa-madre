import { css } from 'lit-element'
import { LionSelect } from '@lion/select/src/LionSelect.js'
import { formControlStyles } from '../uh-form-input/UhFormInput.js'

export class UhFormSelect extends LionSelect {
  static get is () {
    return 'uh-form-select'
  }

  static get styles () {
    return [
      super.styles,
      css`
        ::slotted(.form-control) {
          ${formControlStyles()}
        }
      `
    ]
  }
}
