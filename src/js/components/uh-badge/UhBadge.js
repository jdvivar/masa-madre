import { LitElement, html, css, property, unsafeCSS } from 'lit-element'
import { colors, spacing, radius } from '../../utils/values.styles.js'

import '../uh-text/uh-text.js'

const badgeColorStyle = color => css`
  .${unsafeCSS(color)} {
    background: ${colors[color]};
  }
`

export class UhBadge extends LitElement {
  @property({ type: String }) color = 'supernova'

  static get is () {
    return 'uh-badge'
  }

  static get styles () {
    return [
      css`
        div {
          display: inline-block;
          padding: ${spacing.xs} ${spacing.s};
          border-radius: ${radius};
        }
      `,
      Object.keys(colors).map(badgeColorStyle)
    ]
  }

  render () {
    return html`
      <div class="${this.color}">
        <uh-text size="xs" non-responsive color="mineShaft"><slot></slot></uh-text>
      </div>
    `
  }
}
