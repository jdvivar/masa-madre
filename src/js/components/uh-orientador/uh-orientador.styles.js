import { css } from 'lit-element'
import { polychrome } from '../../utils/polychrome.js'
import { colors, spacing, breakpoints, animation } from '../../utils/values.styles.js'

const dotSize = css`15px`
const width = css`250px`

export const styles = css`
  @keyframes pulse {
    from  { box-shadow: 0 0 0 0 ${polychrome(colors.supernova, 'setAlpha', 40)} }
    70%   { box-shadow: 0 0 0 8px ${polychrome(colors.supernova, 'setAlpha', 0)} }
    to    { box-shadow: 0 0 0 0 ${polychrome(colors.supernova, 'setAlpha', 0)} }
  }

  .yellow-dot {
    background-color: ${colors.supernova};
    height: ${dotSize};
    width: ${dotSize};
    position: absolute;
    transform: translate(-${dotSize}, -${dotSize});
    border-radius: 100%;
    animation: pulse 1.5s infinite;
  }

  .wrapper {
    background: ${colors.royalBlue};
    color: white;
    padding: ${spacing.m};
    max-width: ${breakpoints.s};
  }

  @media(min-width: 576px) {
    .wrapper {
      margin: 0 0 ${spacing.m} ${spacing.m};
      max-width: ${width};
    }
    
    .sticky {
      display: block;
      position: sticky;
      bottom: 0;
      z-index: 1;
      left: 100%;
      opacity: 1;
      transition: all ${animation.transitionTime};
    }

    .sticky:not(.below-pixel) {
      opacity: 0;
    }
    
    .hero {
      position: absolute;
      right: 0;
      transform: translateY(-100%);
    }
  }
`
