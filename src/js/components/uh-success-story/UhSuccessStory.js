import { LitElement, html, property } from 'lit-element'
import { styles } from './uh-success-story.styles.js'

import '../uh-text/uh-text.js'
import { getChildrenWithTag } from '../../utils/getChildrenWithTag.js'

export class UhSuccessStory extends LitElement {
  @property({ type: Boolean }) showVideo
  @property({ type: String, attribute: 'youtube-video' }) youtubeVideo

  static get is () {
    return 'uh-success-story'
  }

  static get styles () {
    return styles
  }

  renderButton () {
    const [button] = getChildrenWithTag.bind(this)('uh-button')
    if (button) {
      return html`
        <div class="wrapper-button" @click=${this.enableVideo}>
          ${button.cloneNode(true)}
        </div>`
    }
  }

  enableVideo () {
    this.showVideo = true
    this.requestUpdate()
  }

  render () {
    if (this.showVideo) {
      return html`
        <div class="embed-container">
          <iframe src="https://www.youtube.com/embed/${this.youtubeVideo}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      `
    }

    return html`
      <div class="wrapper">
        <slot name="image"></slot>
        ${this.renderButton()}
        <div class="wrapper-text">
          <uh-text weight="bold" size="s" non-responsive><slot name=name></slot></uh-text>
          <uh-text size="xs" non-responsive><slot name=job-title></slot></uh-text>
        </div>
      </div>
    `
  }
}
