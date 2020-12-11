import { LitElement, html, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map.js'
import debounce from 'lodash-es/debounce.js'
import { getChildrenWithTag } from '../../utils/getChildrenWithTag.js'
import { styles } from './uh-nav.styles.js'
import { colors } from '../../utils/values.styles.js'
import { isDesktop } from '../../utils/isDesktop.js'

const renderHamburgerMenu = ({ opener, toggleFn }) => html`
  <style>
    .menu-toggle {
      --raya-color: ${colors.mineShaft};
      position: relative;
      display: block;
      width: 35px;
    }
    .menu-toggle raya {
      height: 5px;
      margin-bottom: 5px;
      display: block;
      background: var(--raya-color);
    }
    .menu-toggle raya:last-of-type {
      margin: 0;
    }
    .menu-closer .menu-toggle raya{
      top: 0;
      left: 0;
      width: 100%;
      position: absolute;
      transform: rotate(45deg);
    }
    .menu-closer .menu-toggle raya:last-of-type {
      transform: rotate(-45deg);
    }
  </style>
  <uh-button menu class="menu-${opener ? 'opener' : 'closer'}" @click=${toggleFn}>
    <div class="menu-toggle"><raya></raya><raya></raya></div>
  </uh-button>
`

export class UhNav extends LitElement {
  @property({ type: Boolean }) opened
  @property({ type: Boolean }) top = true

  static get is () {
    return 'uh-nav'
  }

  static get styles () {
    return styles
  }

  renderLogo () {
    const logo = this.querySelector('uh-logo').cloneNode(true)
    if (this.opened || !this.top) {
      logo.color = colors.mineShaft
      logo.big = false
    } else {
      logo.color = colors.white
      logo.big = true
    }
    return html`${logo}`
  }

  renderLinksList () {
    const links = getChildrenWithTag.bind(this)('a')
    if (links) {
      return html`
        <ul class="links-list">
          ${links.map(link => html`
            <li>
              <uh-text size="s" non-responsive>
                ${link.cloneNode(true)}
                ${link.getAttribute('has-submenu') ? html`
                    <uh-icon class="desktop-dropdown" name="dropdown"></uh-icon>
                    <uh-icon class="dropdown" name="dropdown" color=${colors.mineShaft}></uh-icon>
                  ` : ''}
              </uh-text>
            </li>
            ${link.getAttribute('has-submenu') ? this.renderSubmenu(link.getAttribute('has-submenu')) : ''}
          `)}
        </ul>
      `
    }
  }

  renderButtons () {
    // const buttons = getChildrenWithTag.bind(this)('uh-button')
    const buttons = [...this.querySelectorAll('.nav-button')]
    if (buttons) {
      return html`
        <div class="buttons-wrapper" @click=${this.toggleMenu}>
          ${buttons.map(button => button.cloneNode(true))}
        </ul>
      `
    }
  }

  toggleMenu () {
    if (isDesktop()) {
      return
    }
    if (this.opened) {
      this.opened = false
      this.isClosing = true
      window.setTimeout(() => {
        this.isClosing = false
        this.requestUpdate()
      }, 300)
    } else {
      this.opened = true
    }
    this.requestUpdate()
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
    const pixel = document.getElementById('js-uh-nav-anchor')
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

  renderSubmenu (id) {
    const submenu = this.querySelector(`#${id}`).cloneNode(true)
    return html`${submenu}`
  }

  render () {
    const classes = {
      'is-opened': this.opened,
      'is-closing': this.isClosing,
      'is-not-top': !this.top,
      'is-top': this.top
    }

    return html`
      <div id="mobile-bg" class=${classMap(classes)}></div>
      <nav class=${classMap(classes)}>
        ${this.renderLogo()}
        ${renderHamburgerMenu({ opener: true, toggleFn: this.toggleMenu })}
        <div class="backdrop" @click=${this.toggleMenu}></div>
        <div class="menu-wrapper">
          ${renderHamburgerMenu({ opener: false, toggleFn: this.toggleMenu })}
          ${this.renderLinksList()}
          ${this.renderButtons()}
        </div>
      </nav>
    `
  }
}
