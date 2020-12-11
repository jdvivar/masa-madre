import { LitElement, html, css } from 'lit-element'
import { breakpoints, spacing } from '../../utils/values.styles.js'

export class UhCourseChooser extends LitElement {
  static get is () {
    return 'uh-course-chooser'
  }

  static get styles () {
    return css`
      div {
        display: flex;
        flex-wrap: wrap;
        margin-left: -${spacing.m};
        margin-right: -${spacing.m};
      }

      ::slotted(*) {
        flex-basis: 100%;
        height: calc(${breakpoints.s} / 2);
        position: relative;
      }

      @media(min-width: ${breakpoints.m}) {
        div {
          margin-left: 0;
          margin-right: 0;
        }
        ::slotted(*) {
          height: ${breakpoints.s};
        }
      }

      @media(min-width: ${breakpoints.l}) {
        ::slotted(*) {
          flex-basis: 50%;
          height: calc((${breakpoints.l} - 2 * ${spacing.l})/ 2);
        }
      }

      @media(min-width: ${breakpoints.xl}) {
        ::slotted(*) {
          height: calc((${breakpoints.xl} - 2 * ${spacing.l})/ 2);
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
