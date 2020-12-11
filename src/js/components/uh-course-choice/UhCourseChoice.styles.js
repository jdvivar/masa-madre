import { css, unsafeCSS } from 'lit-element'
import { spacing, breakpoints, colors, animation } from '../../utils/values.styles.js'

const colorStyle = color => css`
  @media(min-width: ${breakpoints.l}) {
    .wrapper.${unsafeCSS(color)} {
      background: none;
    }
    .wrapper.${unsafeCSS(color)}:hover {
      background: ${colors[color]};
    }
  }
`

export const styles = [
  css`
    a {
      text-decoration: none;
    }

    .wrapper {
      position: relative;
      height: 100%;
      color: white;
      transition: all ${animation.transitionTime};
    }

    ::slotted(img) {
      position: absolute;
      width: 100% !important;
      height: 100% !important;
      object-fit: cover;
      z-index: -1;
    }

    .text-wrapper {
      --spacing: ${spacing.s};
      padding: var(--spacing);
      padding-top: calc(3 * var(--spacing));
      height: calc(100% - 4 * var(--spacing));
    }

    .text-item-wrapper {
      margin-bottom: ${spacing.m};
    }

    .text-item-wrapper.description {
      opacity: 0;
      transition: all ${animation.transitionTime};
    }

    .badges-wrapper {
      float: right;
      margin-top: ${spacing.xs};
      margin-right: ${spacing.xs};
    }

    @media(min-width: ${breakpoints.m}) {
      .text-wrapper {
        --spacing: ${spacing.m};
        padding-top: calc(2 * var(--spacing));
        height: calc(100% - 3 * var(--spacing));
      }

      .wrapper:hover .text-item-wrapper.description {
        opacity: 1;
      }

      .text-item-wrapper.title::after {
        content: ' ';
        display: block;
        position: relative;
        top: 10px;
        height: 1px;
        width: 0;
        background: white;
        transition: all ${animation.transitionTime};
      }

      .wrapper:hover .text-item-wrapper.title::after {
        width: 100%;
      }

      .badges-wrapper {
        float: right;
        margin-top: ${spacing.s};
        margin-right: ${spacing.s};
      }
    }

    @media(min-width: ${breakpoints.xl}) {
      .text-wrapper {
        padding: var(--spacing);
        padding-top: calc(2 * var(--spacing));
        height: calc(100% - 3 * var(--spacing));
      }
    }

    ::slotted(p) {
      margin-bottom: ${spacing.m};
    }

    .arrow {
      position: absolute;
      bottom: ${spacing.m};
      right: ${spacing.m};
      height: ${spacing.s};
    }

    .arrow span {
      --border-width: 1px;
      --width: ${spacing.s};
      position: absolute;
      display: block;
      width: var(--width);
      height: 0;
      border: var(--border-width) solid white;
      border-radius: 10px;
      transform-origin: calc(var(--width) + var(--border-width)) center;
      background: white;
      right: 0;
      top: 0;
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

    @media(min-width: ${breakpoints.m}) {
      .arrow span {
        --width: ${spacing.m};
        --border-width: 2px;
      }
    }
  `,
  Object.keys(colors).map(colorStyle)
]
