import { LitElement, html, css } from 'lit-element'
import { breakpoints, spacing } from '../../utils/values.styles.js'

export class UhCourseCards extends LitElement {
  static get is () {
    return 'uh-course-cards'
  }

  static get styles () {
    return css`
      .wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
        gap: ${spacing.xs};
      }

      ::slotted([slot="modalidades"]) {
        margin: ${spacing.s} 0;
      }

      .courses-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: 1fr;
        gap: ${spacing.xs};
      }

      @media(min-width: ${breakpoints.m}) {
        .wrapper {
          grid-template-columns: 1fr 1fr;
        }
        ::slotted([slot="modalidades"]) {
          margin: ${spacing.s};
        }
      }

      @media(min-width: ${breakpoints.l}) {
        .wrapper {
          grid-template-columns: 2fr 1fr;
        }
      }

      @media(min-width: ${breakpoints.xl}) {
        .courses-wrapper {
          grid-template-columns: 1fr 1fr;
        }
      }
    `
  }

  render () {
    return html`
      <div class="wrapper">
        <div class="courses-wrapper"><slot name="cursos"></slot></div>
        <div class="options-wrapper"><slot name="modalidades"></slot></div>
      </div>
    `
  }
}
