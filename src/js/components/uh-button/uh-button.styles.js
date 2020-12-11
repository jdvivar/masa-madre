import { polychrome } from '../../utils/polychrome.js'
import { css, unsafeCSS } from 'lit-element'
import { colors, spacing, animation, radius } from '../../utils/values.styles.js'

const btnColorClassStyle = colorName => css`
  .btn-color-${unsafeCSS(colorName)} .btn {
    background-color: ${colors[colorName]};
    transition: background ${animation.transitionTime};
  }
  :host(:hover) .btn-color-${unsafeCSS(colorName)} .btn {
    background-color: ${polychrome(colors[colorName], 'darken', 10)};
  }
`
const hostStyles = css`
  :host {
    display: inline-block;
  }
`
const btnStyles = css`
  .btn {
    justify-content: center;
    border-radius: ${radius};
    padding: ${spacing.xs} ${spacing.m};
    color: white;
    text-align: center;
    min-height: ${spacing.s};
  }
  .btn-inline-block {
    display: inline-block;
  }
  a {
    text-decoration: none;
  }
  .btn-small .btn {
    padding: ${spacing.xs};
    // min-height: auto;
    // max-height: ${spacing.s};
  }
  .btn-with-icon ::slotted(uh-icon) {
    position: relative;
    top: 3px;
    margin-right: 5px;
  }
`
const btnMenuStyles = css`
  .btn-menu .btn,
  :host(:hover) .btn {
    background: transparent;
  }
  .btn-menu .btn {
    color: black;
    padding: ${spacing.xs};
  }
  .btn-menu slot {
    display: block;
  }
`
export const styles = [
  Object.keys(colors).map(btnColorClassStyle),
  btnStyles,
  hostStyles,
  btnMenuStyles
]
