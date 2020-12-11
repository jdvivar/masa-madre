import { css } from 'lit-element'
import { spacing, breakpoints } from '../../utils/values.styles.js'
import { minireset } from 'minireset.css/minireset.css.lit.js'

const contentRowStyleMixin = size => {
  switch (size) {
    case 'l':
      return css`
        max-width: calc(${breakpoints.l} - 2 * ${spacing.l});
        margin: ${spacing.l} auto;
        padding: 0 ${spacing.l};
      `
    case 'xl':
      return css`
        max-width: calc(${breakpoints.xl} - 2 * ${spacing.l});
      `
    case 'xxl':
      return css`
        max-width: calc(${breakpoints.xxl} - 2 * ${spacing.l});
      `
    default:
      return css`
        max-width: ${breakpoints.s};
        margin: ${spacing.m} auto;
        padding: 0 ${spacing.m};
        box-sizing: content-box;
      `
  }
}

const styles = css`
  ${minireset}

  .no-wide,
  .wide {
    ${contentRowStyleMixin()}
  }

  .no-margin {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: ${spacing.m};
    padding-bottom: ${spacing.m};
  }

  @media(min-width: ${breakpoints.l}) {
    .no-wide,
    .wide {
      ${contentRowStyleMixin('l')}
    }

    .no-margin {
      margin-top: 0;
      margin-bottom: 0;
      padding-top: ${spacing.l};
      padding-bottom: ${spacing.l};
    }
  }

  @media(min-width: ${breakpoints.xl}) {
    .wide {
      ${contentRowStyleMixin('xl')}
    }

    .fluid {
      max-width: none;
    }

    .no-margin {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  @media(min-width: ${breakpoints.xxl}) {
    .wide {
      ${contentRowStyleMixin('xxl')}
    }
  }  
`

export {
  styles,
  contentRowStyleMixin
}
