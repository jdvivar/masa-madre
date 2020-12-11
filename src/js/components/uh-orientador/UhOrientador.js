import { LitElement, html, property } from 'lit-element'
import debounce from 'lodash-es/debounce.js'
import { styles } from './uh-orientador.styles.js'
import { getSlotsWithName } from '../../utils/getSlotsWithName.js'
import { getChildrenWithTag } from '../../utils/getChildrenWithTag.js'
import { classMap } from 'lit-html/directives/class-map.js'

import '../uh-text/uh-text.js'
import '../uh-break/uh-break.js'

export class UhOrientador extends LitElement {
  @property({ type: Boolean }) sticky
  @property({ type: Boolean }) hero
  @property({ type: Boolean }) belowPixel

  static get is () {
    return 'uh-orientador'
  }

  static get styles () {
    return styles
  }

  renderTitle () {
    const hasTitleSlots = !!getSlotsWithName.bind(this)('title').length
    if (hasTitleSlots) {
      return html`
        <uh-text weight="light" size="s" non-responsive>
          <slot name="title"></slot>
        </uh-text>
        <uh-break size="s"></uh-break>
      `
    }
  }

  renderDescription () {
    const hasDescriptionsSlots = !!getSlotsWithName.bind(this)('description').length
    if (hasDescriptionsSlots) {
      return html`
        <uh-text weight="500" size="m" non-responsive>
          <slot name="description"></slot>
        </uh-text>
        <uh-break size="s"></uh-break>
      `
    }
  }

  renderButton () {
    const [button] = getChildrenWithTag.bind(this)('uh-button')
    if (button) {
      const thisButton = button.cloneNode(true)
      return html`
        ${thisButton}
      `
    }
  }

  firstUpdated () {
    window.addEventListener('scroll', this.handleScroll())
  }

  handleScroll () {
    // const pixel = document.getElementById('js-uh-orientador-anchor')
    // const scrollY = pixel ? pixel.offsetTop : 0
    return debounce(() => {
      this.belowPixel = window.scrollY >= 800
      this.requestUpdate()
    }, 50, { maxWait: 500 })
  }

  render () {
    const classes = {
      wrapper: true,
      sticky: this.sticky,
      hero: this.hero,
      'below-pixel': this.belowPixel
    }

    return html`
      <div class=${classMap(classes)}>
        <span class="yellow-dot"></span>
        ${this.renderTitle()}
        ${this.renderDescription()}
        ${this.renderButton()}
      </div>
    `
  }
}
