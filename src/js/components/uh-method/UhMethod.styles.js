import { css } from 'lit-element'
import { spacing, breakpoints } from '../../utils/values.styles.js'
import { minireset } from 'minireset.css/minireset.css.lit.js'

export const styles = css`
${minireset}

.wrapper {
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: ${spacing.xs};
}

.step {

}

.step .description {
  display: none;
}

@media(min-width: ${breakpoints.m}) {
  .wrapper {
    grid-gap: ${spacing.m};
  }

  .step .description {
    display: inherit;
  }

}
@media(min-width: ${breakpoints.l}) {
  .wrapper {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${spacing.l};
  }
}
`
