import { LitElement, html, css } from 'lit-element'
import { spacing, breakpoints } from '../../utils/values.styles.js'

export class UhSkills extends LitElement {
  static get is () {
    return 'uh-skills'
  }

  static get styles () {
    return css`
      div {
        display: grid;
        grid-gap: ${spacing.s};
        grid-template-columns: 1fr 1fr;
      }

      :host .description {
        display: none;
      }

      @media(min-width: ${breakpoints.m}) {
        div {
          grid-gap: ${spacing.s};
          grid-template-columns: 1fr 1fr 1fr;
        }
      }
    `
  }

  render () {
    return html`
      <div>
        <slot></slot>
      </div>
    `
  }
}
