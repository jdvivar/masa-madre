import { css } from 'lit-element'
import { minireset } from 'minireset.css/minireset.css.lit.js'

import { breakpoints } from '../../utils/values.styles.js'

export const styles = css`
  ${minireset}

  :host {
    position: relative;
    display: block;
    height: 100%;
  }

  .address-bar-wrapper {
    position: absolute;
    top: 0;
    width: 100%;
  }

  .map-wrapper {
    height: 100%;
    width: 100%;
    background: lightgrey;
  }

  /* iOS hack */
  .map-wrapper:not(*:root) {
    height: calc(100vh - calc(100vh - 100vw));
  }

  @media(min-width: ${breakpoints.m}) {
    .map-wrapper:not(*:root) {
      height: 100%;
    }
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .leaflet-div-icon {
    background: none;
    border: none;
  }
`
