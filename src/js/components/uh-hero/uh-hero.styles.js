import { css, unsafeCSS } from 'lit-element'
import { spacing, breakpoints, colors } from '../../utils/values.styles.js'

const backgroundWrapperColorStyle = color => css`
  .background-wrapper.${unsafeCSS(color)} {
    background: ${colors[color]};
  }
`

// Inverse of Golden number 👌
// That way we make sure to always to show content
const height = css`61.8vh`

export const styles = [
  Object.keys(colors).map(backgroundWrapperColorStyle),
  css`
    .wrapper {
      --height: 400px;
      --min-height: 600px;
      position: relative;
    }

    .wrapper.full {
      --height: 100vh;
    }

    // Specific min for iPhone 5/SE
    @media (min-width: 321px) {
      .wrapper {
        --height: ${height};
      }
    }

    .background-wrapper {
      min-height: var(--height);
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }

    .background-wrapper .gradient {
      height: 100%;
      width: 100%;
      position: absolute;
      background-image: linear-gradient(
        to bottom,
        rgba(0,0,0,0.5),
        rgba(0,0,0,0) ${spacing.l}
      );
    }

    .background-wrapper ::slotted(*) {
      object-fit: cover;
      height: 100% !important;
      width: 100%;
    }

    .background-wrapper ::slotted(.product) {
      filter: brightness(50%);
      display: none;
    }

    .logo-wrapper {
      display: none;
      position: absolute;
      top: ${spacing.m};
      left: ${spacing.m};
    }

    .content-wrapper {
      min-height: var(--height);
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
    }

    .product-hero-wrapper {
      display: none;
    }

    @media(min-width: ${breakpoints.s}) {
      .background-wrapper ::slotted(.product) {
        width: 30%;
        right: 0;
        position: absolute;
        display: block;
      }
    }

    @media(min-width: ${breakpoints.l}) {
      .logo-wrapper {
        display: block;
      }

      .background-wrapper {
        min-height: var(--min-height);
      }

      .content-wrapper {
        min-height: var(--min-height);
      }
    }

    @media(min-width: ${breakpoints.xl}) {
      :host(.product) .content-wrapper {
        width: 50%;
      }
      .product-hero-wrapper {
        display: block;
        position: absolute;
        right: 10%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        z-index: -1;
      }
    }
  `
]
