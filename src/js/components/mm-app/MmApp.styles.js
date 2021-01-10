import { css } from 'lit-element'
import { breakpoints } from '../../utils/values.styles.js'

export const styles = css`
  .wrapper {
    background: #fafafa;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .map-wrapper {
    flex-grow: 1;
  }

  .list-wrapper {
    flex-grow: 0;
    overflow-y: scroll;
    height: calc(100vh - 100vw);
  }

  @media(min-width: ${breakpoints.s}) {
    .list-wrapper {
      height: auto;
      flex-basis: 200px;
    }
  }

  @media(min-width: ${breakpoints.m}) {
    .wrapper {
      flex-direction: row-reverse;
    }

    .map-wrapper {
      flex-grow: 1;
    }

    .list-wrapper {
      flex-basis: 400px;
      max-height: none;
    }
  }
`
