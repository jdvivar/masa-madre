import { css } from 'lit-element'
import { spacing, radius, breakpoints, animation } from '../../utils/values.styles.js'

export const styles = css`
  .wrapper {
    position: relative;
    padding: ${spacing.s};
    padding-top: ${spacing.l};
    border-radius: ${radius};
    margin-bottom: ${spacing.s};
    transition: box-shadow ${animation.transitionTime};
  }

  .wrapper:hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }

  .feature-wrapper {
    border-left: 1px solid rgba(255,255,255,0.5);
    padding: 0 ${spacing.xs};
  }

  slot[name=date-desktop] {
    display: none;
  }

  .badges-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    margin: ${spacing.s};
  }

  @media(min-width: ${breakpoints.l}) {
    slot[name=date-mobile] {
      display: none;
    }

    slot[name=date-desktop] {
      display: block;
    }

    .wrapper {
      padding: ${spacing.m} ${spacing.l};
    }

    .features-button-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .features-wrapper {
      display: flex;
      flex-basis: 60%;
    }

    .feature-wrapper:first-child {
      border: none;
      padding-left: 0;
    }

    .feature-wrapper {
      flex-basis: calc(100% / 3);
    }
  }
`
