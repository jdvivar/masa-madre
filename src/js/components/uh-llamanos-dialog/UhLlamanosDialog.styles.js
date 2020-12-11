import { css } from 'lit-element'
import { radius, colors, spacing, breakpoints } from '../../utils/values.styles.js'

export const styles = css`
  a {
    color: inherit;
  }

  :host {
    top: 90px;
    position: fixed;
    right: 300px;
    display: none;
    --form-input-border-color: ${colors.mineShaft};
  }

  @media(min-width: ${breakpoints.xl}) {
    :host {
      display: block;
    }
  }

  .dialog {
    border-radius: ${radius};
    overflow: hidden;
    max-width: 450px;
  }

  [name=close] {
    float: right;
  }

  .dialog-form-wrapper {
    background: white;
    padding: ${spacing.m};
  }

  .dialog-links-wrapper {
    background: ${colors.seaShell};
    padding: ${spacing.m};
  }
`
