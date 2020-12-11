import { css } from 'lit-element'
import { colors, spacing, animation } from '../../utils/values.styles.js'

export const styles = css`
  .question {
    margin: ${spacing.s} 0;
  }

  .question:focus {
    outline: none;
  }
  .question-title {
    border-bottom: 2px solid ${colors.seaShell};
    padding-bottom: ${spacing.xs};
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .question-answer {
    padding-top: ${spacing.m};
    display: none;
  }

  .question.open .question-answer {
    display: block;
  }

  .marker {
    transform-origin: 50% 45%;
    transform: rotate(0);
    transition: all ${animation.transitionTime};
  }

  .question.open .marker {
    transform: rotate(-45deg);
  }
`
