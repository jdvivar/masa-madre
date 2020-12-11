import { LitElement, html, css } from 'lit-element'
import { spacing, breakpoints } from '../../utils/values.styles.js'

export class UhProfilesGrid extends LitElement {
  static get is () {
    return 'uh-profiles-grid'
  }

  static get styles () {
    return css`
      .wrapper {
        display: grid;
        grid-gap: ${spacing.s};
        grid-auto-rows: auto;
      }

      @media(min-width: ${breakpoints.s}) {
        .wrapper {
          grid-template-columns: repeat(2, 1fr);
        }
      }
      @media(min-width: ${breakpoints.m}) {
        .wrapper {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      @media(min-width: ${breakpoints.l}) {
        .wrapper {
          grid-template-columns: repeat(4, 1fr);
        }
      }
    `
  }

  render () {
    return html`
      <div class="wrapper">
        <slot></slot>
      </div>
    `
  }
}
