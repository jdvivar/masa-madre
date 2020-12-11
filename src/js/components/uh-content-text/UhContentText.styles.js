import { css } from 'lit-element'
import { minireset } from 'minireset.css/minireset.css.lit.js'
import { breakpoints, spacing, colors } from '../../utils/values.styles.js'

export const styles = css`
  ${minireset}

  p {
    --spacing: ${spacing.m};
    margin-top: var(--spacing);
    margin-bottom: var(--spacing);
    color: ${colors.mineShaft};
  }

  p.first {
    margin-top: 0;
  }

  p.last {
    margin-bottom: 0;
  }

  p.center {
    text-align: center;
  }

  p.reduced-spacing {
    --spacing: ${spacing.s};
  }

  @media(min-width: ${breakpoints.l}) {
    p {
      --spacing: ${spacing.l};
    }
    p.reduced-spacing {
      --spacing: ${spacing.m};
    }
  }

  @media(min-width: ${breakpoints.xl}) {
    p:not(.center) {
      margin-right: 20%;
    }
  }  
`
