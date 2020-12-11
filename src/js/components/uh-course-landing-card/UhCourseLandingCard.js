import { LitElement, html, css } from 'lit-element'
import { spacing, radius } from '../../utils/values.styles.js'
import { withBackground } from '../../utils/withBackground.mixin.js'

import '../uh-break/uh-break.js'

export class UhCourseLandingCard extends withBackground(LitElement) {
  static get is () {
    return 'uh-course-landing-card'
  }

  static get styles () {
    return css`
      .wrapper {
        padding: ${spacing.s};
      }

      .badge-wrapper {
        min-height: ${spacing.l};
        text-align: right;
      }

      .options-wrapper {
        border-left: 1px solid rgba(255,255,255,.33);
        padding-left: ${spacing.xs};
      }

      ::slotted([slot="option"]) {
        display: block;
      }

      .button-wrapper,
      .date-wrapper {
        text-align: center;
      }
    `
  }

  constructor () {
    super()
    this.radius = radius
  }

  renderCard () {
    return html`
      <div class="wrapper">
        <div class="badge-wrapper">
          <slot name="badge"></slot>
          <uh-break></uh-break>
        </div>
        <slot></slot>
        <div class="options-wrapper">
          <slot name="option"></slot>
        </div>
        <uh-break></uh-break>
        <div class="date-wrapper">
          <slot name="date"></slot>
        </div>
        <uh-break></uh-break>
        <div class="button-wrapper">
          <slot name="button"></slot>
        </div>
      </div>
    `
  }

  render () {
    return this.renderBackground(this.renderCard())
  }
}
