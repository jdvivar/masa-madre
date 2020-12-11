import { LitElement, html, css, property } from 'lit-element'
import debounce from 'lodash-es/debounce.js'
import { spacing, breakpoints } from '../../utils/values.styles.js'
import { classMap } from 'lit-html/directives/class-map.js'

export class UhContactButtons extends LitElement {
  @property({ type: Boolean }) top = true

  static get is () {
    return 'uh-contact-buttons'
  }

  static get styles () {
    return css`
      .wrapper {
        display: flex;
        padding: ${spacing.xs};
        transform: translateY(-100%);
        position: absolute;
        width: 100%;
        align-items: center;
        box-sizing: border-box;
        z-index: 1;
      }

      .wrapper.is-not-top {
        position: fixed;
        top: 100vh;
      }

      ::slotted(uh-button) {
        flex-basis: 50%;
      }

      ::slotted(uh-button:first-of-type) {
        margin-right: ${spacing.xs};
      }

      @media(min-width: ${breakpoints.s}) {
        .wrapper {
          display: none;
        }
      }

      @media(min-width: ${breakpoints.xl}) {
        .wrapper {
          display: none;
        }
      }
    `
  }

  firstUpdated () {
    this.tabIndex = -1
    this.addEventListener('keydown', ({ keyCode }) => {
      if (keyCode === 27 && this.opened) {
        this.toggleMenu()
      }
    })
    window.addEventListener('scroll', this.handleScroll())
  }

  handleScroll () {
    const pixel = document.getElementById('js-uh-contact-buttons-anchor')
    const scrollY = pixel ? pixel.offsetTop : 0
    return debounce(() => {
      this.top = window.scrollY <= scrollY
      this.requestUpdate()
    }, 50, { maxWait: 500 })
  }

  disconnectedCallback () {
    window.removeEventListener('scroll', this.handleScroll())
    super.disconnectedCallback()
  }

  render () {
    const classes = {
      wrapper: true,
      'is-not-top': !this.top
    }

    return html`
      <div class=${classMap(classes)}>
        <slot></slot>
      </div>
    `
  }
}
