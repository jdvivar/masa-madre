import { css } from 'lit-element'
import { colors, spacing, animation, breakpoints } from '../../utils/values.styles.js'

export const styles = css`
  :host {
    position: relative;
    display: block;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .wrapper {
    border-bottom: 1px solid ${colors.mineShaft};
    margin-bottom: ${spacing.m};
    display: block;
  }

  ::slotted([name=chevron]) {
    transform: rotate(270deg);
    position: absolute;
    right: 0;
    top: 0;
    transition: all ${animation.transitionTime};
  }

  ::slotted([name=chevron].active) {
    transform: rotate(90deg);
  }

  ::slotted(.description) {
    height: 0;
    opacity: 0;
    transition: all calc(${animation.transitionTime} * 2) ease-in-out;
  }

  ::slotted(.description.active) {
    height: 100%;
    opacity: 1;
  }

  @media (min-width: ${breakpoints.l}) {
    :host {
      position: static;
    }
    .wrapper {
      border: none;
    }

    ::slotted(.description) {
      position: absolute;
      top: 0;
      right: -100%;
      width: 50%;
      padding-left: ${spacing.l};
      box-sizing: border-box !important;
      opacity: 0;
      height: 0;
    }

    ::slotted(.description.active) {
      right: 0;
    }

    [name=chevron] {
      display: none;
    }
    ::slotted(.title) {
      width: 50%;
      display: inline-block;
      border-bottom: 1px solid ${colors.mineShaft};
    }

    /* ARROW */

    .arrow {
      position: absolute;
      left: 50%;
      transform: translateY(calc(-${spacing.l} - 35px));
    }

    .arrow span {
      --border-width: 2px;
      --width: ${spacing.m};
      position: absolute;
      display: block;
      width: var(--width);
      height: 0;
      border: var(--border-width) solid ${colors.scarletGum};
      background: ${colors.scarletGum};
      border-radius: 10px;
      transform-origin: calc(var(--width) + var(--border-width)) center;
      right: 0;
      top: 0;
      opacity: 0.2;
      transition: all ${animation.transitionTime} ease;
    }

    .arrow.active span {
      opacity: 1;
    }
    .arrow span:nth-child(1) {
      transform: rotate(45deg);
    }
    .arrow span:nth-child(2) {
      transform: rotate(-45deg);
    }
    .arrow span:nth-child(3) {
      width: 0;
      transition: width ${animation.transitionTime};
    }
    .wrapper:hover .arrow span:nth-child(3) {
      width: calc(2 * var(--width));
    }
    .wrapper:hover .arrow span {
      opacity: 1;
    }
    
  }
  
`
