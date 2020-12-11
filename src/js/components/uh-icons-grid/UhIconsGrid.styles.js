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

  .flex {
    height: 100%;
    display: flex;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${spacing.m};
    grid-auto-rows: 1fr;
    align-items: center;
  }

  @media(min-width: ${breakpoints.s}) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`
