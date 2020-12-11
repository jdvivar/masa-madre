import { css } from 'lit-element'
import { colors, spacing, radius, animation } from '../../utils/values.styles.js'

export const styles = css`
  a {
    color: inherit;
    text-decoration: inherit;
  }

  div {
    background: ${colors.whisper};
    border-radius: ${radius};
    padding: ${spacing.xs} ${spacing.s};
    box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.1);
    height: 100%;
    box-sizing: border-box;
    transition: box-shadow ${animation.transitionTime};
  }

  div:hover {
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.3);
  }

  .modalidades {
    height: auto;
    padding: ${spacing.s};
  }

  .cursos {
    display: flex;
    align-items: center;
  }

  ::slotted(uh-icon) {
    flex-basis: 25%;
    text-align: right;
  }
  
  ::slotted([slot="title"]) {
    flex-basis: 75%;
    margin-right: ${spacing.s};
  }
`
