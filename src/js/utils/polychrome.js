import polychrome from 'polychrome'
import { css, unsafeCSS } from 'lit-element'

const pc = ({ cssText }) => polychrome(cssText)

const polychromeApply = (color, fn, args) => css`${unsafeCSS(pc(color)[fn](args).rgb())}`

export {
  // pc as polychrome,
  polychromeApply as polychrome
}
