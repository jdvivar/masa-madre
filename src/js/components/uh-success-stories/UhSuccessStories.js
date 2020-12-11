import { LitElement, html, css } from 'lit-element'
import { breakpoints } from '../../utils/values.styles.js'

export class UhSuccessStories extends LitElement {
  static get is () {
    return 'uh-success-stories'
  }

  static get styles () {
    const gridStyle = (bp, i) => css`
      @media(min-width: ${breakpoints[bp]}) {
        ::slotted(uh-success-story) {
          flex-basis: ${100 / (i > 1 ? i : 1)}%;
          flex-grow: 1;
        }
      }
    `
    return [
      css`
        div {
          display: flex;
          flex-wrap: wrap;
        }
      `,
      Object.keys(breakpoints).map(gridStyle)
    ]
  }

  render () {
    return html`
      <div>
        <slot></slot>
      </div>
    `
  }
}
