import { LitElement, html } from 'lit-element'
import { withBackground } from '../../utils/withBackground.mixin.js'
import { radius } from '../../utils/values.styles.js'
import { styles } from './UhCourseOptions.styles.js'

import '../uh-break/uh-break.js'

export class UhCourseOption extends withBackground(LitElement) {
  static get is () {
    return 'uh-course-option'
  }

  static get styles () {
    return styles
  }

  constructor () {
    super()
    this.radius = radius
    this.overflow = false
  }

  renderCourseOption () {
    return html`
      <div class="wrapper">
        <div class="badges-wrapper">
          <slot name="badge"></slot>
        </div>
        <slot name="date-desktop"></slot>
        <slot name="title"></slot>
        <br>
        <slot name="date-mobile"></slot>
        <uh-break size="s"></uh-break>
        <div class="features-button-wrapper">
          <div class="features-wrapper">
            <div class="feature-wrapper">
              <slot name="feature-1"></slot>
              <uh-break size="xs"></uh-break>
            </div>
            <div class="feature-wrapper">
              <slot name="feature-2"></slot>
              <uh-break size="xs"></uh-break>
            </div>
            <div class="feature-wrapper">
              <slot name="feature-3"></slot>
            </div>
          </div>
          <div style="text-align: right">
            <uh-break size="s"></uh-break>
            <slot name="price"></slot>
            <uh-break size="s"></uh-break>
            <slot name="button"></slot>
          </div>
        </div>
        <uh-break size="xs"></uh-break>
      </div>
    `
  }

  render () {
    return this.renderBackground(this.renderCourseOption())
  }
}
