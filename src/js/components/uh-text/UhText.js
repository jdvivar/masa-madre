import { LitElement, html, property, unsafeCSS, css } from 'lit-element'
import { styleMap } from 'lit-html/directives/style-map.js'
import { colors, fontSizes, fontSizeRatios, breakpoints } from '../../utils/values.styles.js'
import { polychrome } from '../../utils/polychrome.js'

const emColorStyle = color => css`
  ::slotted(em.${unsafeCSS(color)}) {
    font-style: inherit;
    background: ${polychrome(colors[color], 'lighten', 80)}
  }
`

const aColorStyle = color => css`
  ::slotted(a.${unsafeCSS(color)}) {
    color: ${colors[color] ? colors[color] : color};
  }
`

const responsiveStyleMediaQuery = size => breakpoint => css`
  @media(min-width: ${breakpoints[breakpoint]}) {
    .responsive-${unsafeCSS(size)} {
      font-Size: calc(${unsafeCSS(fontSizes[size])} * ${unsafeCSS(fontSizeRatios[breakpoint])});
    }
  }
`

const responsiveStyle = size => [
  Object.keys(breakpoints).map(responsiveStyleMediaQuery(size))
]

export class UhText extends LitElement {
  @property({ type: String }) weight = 'normal'
  @property({ type: String }) size = 's'
  @property({ type: String }) color
  // @property({ type: Boolean }) geometric
  @property({ type: Boolean, attribute: 'non-responsive' }) nonResponsive = false

  static get is () {
    return 'uh-text'
  }

  static get styles () {
    return [
      Object.keys(fontSizes).map(responsiveStyle),
      Object.keys(colors).map(emColorStyle),
      Object.keys(colors).map(aColorStyle)
    ]
  }

  render () {
    let fontSize

    if (this.nonResponsive) {
      fontSize = `${fontSizes[this.size] ? fontSizes[this.size] : this.size + 'px'}`
    }

    const styles = {
      fontSize,
      fontWeight: this.weight,
      color: `${colors[this.color] ? colors[this.color] : this.color}`,
      // fontFamily: this.geometric ? fontFamilies.geometric : 'inherit',
      'word-break': 'break-word'
    }

    return html`
      <span
          class=${this.nonResponsive ? '' : `responsive-${this.size}`}
          style="${styleMap(styles)}"
      >
        <slot></slot>
      </span>
    `
  }
}
