import { css } from 'lit-element'
import { spacing, animation, breakpoints, goldenNumber, colors, radius } from '../../utils/values.styles.js'
import { linkStyles } from '../../utils/link.styles.js'
import { minireset } from 'minireset.css/minireset.css.lit.js'

const nonMobileWidth = breakpoints.s

export const styles = css`
  ${minireset}
  ${animation.fadeInRight}
  ${animation.fadeOutRight}
  ${animation.opacityIn}
  ${animation.opacityOut}
  ${linkStyles()}

  nav.is-opened,
  nav.is-closing {
    height: 100%;
    width: 100%;
  }

  nav {
    position: fixed;
    top:0;
    z-index: 1;
    transition: all ${animation.transitionTime};
  }

  uh-logo {
    position: fixed;
    top: ${spacing.s};
    left: ${spacing.s};
  }

  .is-opened uh-logo {
    z-index: 1;
    color: black;
  }
  
  .is-opened .backdrop,
  .is-closing .menu-wrapper,
  .is-closing .backdrop {
    display: block;
  }

  .is-opened .menu-wrapper {
    display: flex;
    flex-direction: column;
    padding-top: ${spacing.l};
  }

  .is-opened .menu-wrapper {
    animation-name: fadeInRight;
  }
  .is-opened .backdrop{
    animation-name: opacityIn;
  }
  .is-closing .menu-wrapper {
    animation-name: fadeOutRight;
  }
  .is-closing .backdrop{
    animation-name: opacityOut;
  }

  .backdrop,
  .menu-wrapper {
    display: none;
    ${animation.animated}
  }

  .backdrop {
    background: rgba(0,0,0,0.5);
    height: 100%;
    width: 100%;
    position: absolute;
  }

  .menu-wrapper {
    background: white;
    width: 100%;
    height: 100%;
    right: 0;
    position: absolute;
    text-align: left;
    padding: 0 ${spacing.s};
  }

  .menu-opener {
    position: fixed;
    top: ${spacing.xs};
    right: ${spacing.xs};
  }

  .menu-closer {
    color: black;
    position: fixed;
    top: ${spacing.xs};
    right: ${spacing.xs};
  }

  #mobile-bg {
    position: fixed;
    top: 0;
    height: 69px;
    width: 100%;
    background: white;
    opacity: 0;
    transition: opacity ${animation.transitionTime};
    z-index: 1;
  }

  #mobile-bg.is-not-top {
    opacity: 1;
    box-shadow: 0 0 10px 0px rgba(0,0,0,0.1);
  }

  #mobile-bg.is-opened,
  #mobile-bg.is-not-top.is-opened {
    opacity: 0;
  }

  .is-top:not(.is-opened) .menu-toggle {
    --raya-color: white;
  }

  a[has-submenu] {
    margin-right: ${spacing.xs};
  }

  .desktop-dropdown {
    display: none;
  }

  uh-nav-submenu a {
    width: 100%;
    display: block;
    height: ${spacing.m};
    padding: 0 0 ${spacing.xs} 0;
    display: flex;
    line-height: 1;
  }

  uh-nav-submenu a:last-of-type {
    padding: 0;
  }

  uh-nav-submenu a::before {
    content: none;
  }

  uh-nav-submenu a img {
    width: calc(${spacing.m} * ${goldenNumber});
    height: 100%;
    object-fit: cover;
    margin-right: ${spacing.s};
  }

  .links-list li {
    margin: ${spacing.xs} 0;
  }

  .buttons-wrapper uh-button {
    margin-bottom: ${spacing.xs};
    display: block;
  }

  .shown-menu-desktop {
    display: none;
  }

  .dropdown {
    transform: rotate(90deg);
    display: inline-block;
    top: -1px;
    position: relative;
  }

  @media(min-width: ${breakpoints.s}) {
    .menu-wrapper {
      width: ${nonMobileWidth};
      padding: 0 ${spacing.m};
    }
    .is-opened uh-logo {
      left: calc(100vw - ${nonMobileWidth} + ${spacing.m});
    }
    nav {
      background: none;
    }
    uh-nav-submenu a {
      height: ${spacing.l};
    }
    uh-nav-submenu a img {
      width: calc(${spacing.l} * ${goldenNumber});
    }
    .links-list li {
      margin: ${spacing.s} 0;
    }
    .buttons-wrapper uh-button {
      margin-bottom: ${spacing.s};
    }
    uh-button.shown-menu-mobile {
      display: none;
    }
  }

  @media(min-width: ${breakpoints.xl}) {
    #mobile-bg {
      display: none;
    }

    nav {
      position: fixed;
      top: 0;
      display: flex;
      justify-content: space-between;
      background: transparent;
      width: 100%;
    }

    nav.is-not-top {
      background: white;
      box-shadow: 0 0 10px 0px rgba(0,0,0,0.1);
    }

    nav.is-opened,
    nav.is-closing {
      height: auto;
      width: 100%;
    }

    .is-top a {
      --color: white;
    }

    uh-logo,
    .is-opened uh-logo {
      display: block;
      position: static;
      color: black;
      margin-left: ${spacing.m};
    }

    .menu-opener,
    .menu-closer,
    .backdrop,
    .is-opened .menu-opener,
    .is-opened .menu-closer,
    .is-opened .backdrop {
      display: none;
    }

    .is-opened .menu-wrapper,
    .menu-wrapper {
      display: flex;
      position: static;
      background: none;
      height: auto;
      width: auto;
      justify-content: flex-end;
      flex-direction: row;
      padding: 0;
    }

    .links-list,
    .buttons-wrapper {
      display: flex;
      height: ${spacing.l};
      align-items: center;
    }

    .links-list li,
    .buttons-wrapper uh-button {
      margin-right: ${spacing.m};
    }

    .links-list li {
      height: 100%;
      display: flex;
      align-items: center;
    }

    .links-list li uh-text {
      position: relative;
    }

    a[has-submenu] {
      margin-right: ${spacing.m};
    }

    a[has-submenu]:hover + .desktop-dropdown {
      transform: rotate(90deg);
    }

    .desktop-dropdown {
      display: inline-block;
      transition: all ${animation.transitionTime};
      transform: rotate(180deg);
      position: absolute;
      top: -4px;
      right: 0;
    }

    .dropdown {
      display: none;
    }

    uh-nav-submenu {
      ${animation.animated};
      animation-name: opacityIn;
      position: absolute;
      top: ${spacing.l};
      background: white;
      border-radius: ${radius};
      padding: ${spacing.m};
      width: 400px;
      display: none;
    }
    
    .is-not-top uh-nav-submenu {
      box-shadow: 0 0 10px 0px rgba(0,0,0,0.1);
    }

    uh-nav-submenu a {
      content: '';
      color: ${colors.mineShaft};
    }

    uh-nav-submenu a:hover {
      color: ${colors.blueRibbon};
    }

    .links-list li:hover + uh-nav-submenu {
      display: block;
    }

    uh-nav-submenu:hover {
      display: block;
    }

    .menu-wrapper {
      padding: 0;
    }

    .buttons-wrapper uh-button {
      margin-bottom: 0;
    }

    .shown-menu-desktop {
      display: block;
    }
  }
`
