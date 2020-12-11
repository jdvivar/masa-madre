import { LitElement, html, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
import { withBackground } from '../../utils/withBackground.mixin.js'
import { styles } from './UhContentRow.style.js'

export class UhContentRow extends withBackground(LitElement) {
  @property({ type: Boolean }) wide
  @property({ type: Boolean }) fluid
  @property({ type: Boolean, attribute: 'no-margin' }) noMargin

  static get is () {
    return 'uh-content-row'
  }

  static get styles () {
    return styles
  }

  // renderChildren () {
  //   const children = [...this.children]
  //   return html`
  //     ${children.map((child, i) => {
  //       if (i === 0) child.first = true
  //       if (i === children.length - 1) child.last = true
  //       if (child.requestUpdate) child.requestUpdate()
  //       return child
  //     })}
  //   `
  // }

  firstUpdated () {
    this.assignEnds()
  }

  assignEnds () {
    if (this.children.length) {
      const length = this.children.length
      this.children[0].toggleAttribute('first')
      this.children[length - 1].toggleAttribute('last')
    }
  }

  renderWrapper () {
    const classes = {
      wide: this.wide,
      fluid: this.fluid,
      'no-wide': !this.wide,
      'no-margin': this.noMargin
    }

    return html`
      <div class=${classMap(classes)}>
        <slot></slot>
      </div>
    `
  }

  render () {
    return this.renderBackground(this.renderWrapper())
  }
}
