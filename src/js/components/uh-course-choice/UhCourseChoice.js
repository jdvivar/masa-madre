import { LitElement, html, property } from 'lit-element'
import { styles } from './UhCourseChoice.styles.js'

export class UhCourseChoice extends LitElement {
  @property({ type: String }) color = 'royalBlue'
  @property({ type: String }) href

  static get is () {
    return 'uh-course-choice'
  }

  static get styles () {
    return styles
  }

  render () {
    return html`
      <a href=${this.href}>
        <div class="wrapper ${this.color}">
          <slot name="image"></slot>
          <div class="badges-wrapper">
            <slot name="badges"></slot>
          </div>
          <div class="text-wrapper">
            <div class="text-item-wrapper title">
              <uh-text size="l" weight="bold">
                <slot name="title"></slot>
              </uh-text>
            </div>
            <div class="text-item-wrapper description">
              <uh-text size="xs" >
                <slot name="description"></slot>
              </uh-text>
            </div>
          </div>
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </a>
    `
  }
}
