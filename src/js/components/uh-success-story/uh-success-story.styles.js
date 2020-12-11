import { css } from 'lit-element'
import { animation, breakpoints, spacing } from '../../utils/values.styles.js'

export const styles = css`
  :host {
    position: relative;
    height: 300px;
  }

  ::slotted(img) {
    height: 100% !important;
    width: 100% !important;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    transition: all ${animation.transitionTime};
  }
  
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    transition: all ${animation.transitionTime};
    background: linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8));
  }

  .wrapper:hover {
    background: linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.9));
  }
  
  .wrapper-text {
    color: white;
    text-align: left;
    margin: ${spacing.s};
    transition: all ${animation.transitionTime};
  }

  .wrapper-button {
    height: 100%;
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity ${animation.transitionTime};
  }

  .embed-container {
    position: relative;
    height: 100%;
    overflow: hidden;
    max-width: 100%;
  }
  
  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  @media(min-width: ${breakpoints.l}) {
    .wrapper-text {
      margin: ${spacing.s} ${spacing.m};
    }

    :hover .wrapper-text {
      margin-bottom: ${spacing.m};
    }

    .wrapper-button {
      opacity: 0;
    }

    .wrapper-button:hover {
      opacity: 1;
    }
  }
`
