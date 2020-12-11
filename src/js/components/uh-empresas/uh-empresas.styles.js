import { css } from 'lit-element'
import { spacing, breakpoints } from '../../utils/values.styles.js'

export const styles = css`
  ::slotted(svg),
  ::slotted(img) {
    width: 100%;
    height: 100%;
    max-height: ${spacing.l};
    object-fit: contain;
  }

  div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.m};
    grid-auto-rows: 1fr;
    align-items: center;
  }

  @media(min-width: ${breakpoints.s}) {
    div {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media(min-width: ${breakpoints.m}) {
    div {
      grid-template-columns: repeat(4, 1fr);
      gap: ${spacing.l};
    }
  }

  @media(min-width: ${breakpoints.l}) {
    div {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`
