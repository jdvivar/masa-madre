import { breakpoints } from './values.styles.js'

export function isDesktop () {
  return window.innerWidth >= parseInt(breakpoints.l)
}
