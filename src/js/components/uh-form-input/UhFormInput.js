import { css } from 'lit-element'
import { LionInput } from '@lion/input/src/LionInput.js'
import { spacing, radius } from '../../utils/values.styles.js'

const formControlStyles = () => css`
  height: var(--form-input-height, ${spacing.m});
  border-color: var(--form-input-border-color);
  padding: var(--form-input-padding, ${spacing.xs} ${spacing.s});
  border-radius: ${radius};
  width: 100%;
  border-width: 1px;
  border-style: solid;
`

const formFieldGroupTwoStyles = () => css`
  color: var(--form-input-validation-feedback-color);
`

class UhFormInput extends LionInput {
  static get is () {
    return 'uh-form-input'
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

export {
  UhFormInput,
  formControlStyles,
  formFieldGroupTwoStyles
}
