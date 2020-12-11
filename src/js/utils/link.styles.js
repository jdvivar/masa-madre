import { css } from 'lit-element'
import { animation, colors } from './values.styles.js'

export const linkStyles = () => {
  return css`
    a {
      --color: ${colors.mineShaft};
      text-decoration: none;
      position: relative;
      color: var(--color);
    }

    a:hover {
      color: var(--color);
    }

    a::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: -5px;
      left: 0;
      background-color: var(--color);
      visibility: hidden;
      transform: scaleX(0);
      transition: all ${animation.transitionTime} ease-in-out 0s;
    }

    a:hover::before {
      visibility: visible;
      transform: scaleX(1);
    }
  `
}
