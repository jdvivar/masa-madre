import { css } from 'lit-element'

const goldenNumber = 1.618

const fontSizes = {
  xs: css`14px`,
  s: css`18px`,
  m: css`24px`,
  l: css`32px`,
  xl: css`42px`
}

const spacing = {
  xs: css`10px`,
  s: css`20px`,
  m: css`40px`,
  l: css`80px`,
  xl: css`160px`,
  xxl: css`320px`
}

const radius = css`5px`

const breakpoints = {
  xs: css`0px`,
  s: css`576px`,
  m: css`768px`,
  l: css`992px`,
  xl: css`1200px`,
  xxl: css`1400px`
}

const fontSizeRatios = {
  xs: css`1`,
  s: css`1.1`,
  m: css`1.2`,
  l: css`1.3`,
  xl: css`1.4`,
  xxl: css`1.5`
}

// Color names from "Name that color"
// http://chir.ag/projects/name-that-color/
const colors = {
  blueRibbon: css`#0167FB`,
  brightTurquoise: css`#01FAD7`,
  codGray: css`#111111`,
  hawkesBlue: css`#DBDAFB`,
  mineShaft: css`#333333`,
  mountainMeadow: css`#1CAF9A`,
  persianRose: css`#FE2DA0`,
  royalBlue: css`#4A40EC`,
  scarletGum: css`#2F1356`,
  seaShell: css`#F1F1F1`,
  sunsetOrange: css`#FF4C45`,
  supernova: css`#FDC701`,
  translucent: css`rgba(255,255,255, 0.5)`,
  whisper: css`#FBFBFD`,
  white: css`#FFFFFF`
}

const animation = {
  transitionTime: css`0.3s`,
  animated: css`
    animation-duration: 0.3s;
    animation-fill-mode: both;
  `,
  fadeInRight: css`
    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
      to {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    }
  `,
  fadeOutRight: css`
    @keyframes fadeOutRight {
      from {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      to {
        opacity: 0;
        transform: translate3d(100%, 0, 0);
      }
    }
  `,
  opacityIn: css`
    @keyframes opacityIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
  `,
  opacityOut: css`
    @keyframes opacityOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
  `,
  headShake: css`
    @keyframes headShake {
      0% {
        transform: translateX(0);
      }
      6.5% {
        transform: translateX(-6px) rotateY(-9deg);
      }
      18.5% {
        transform: translateX(5px) rotateY(7deg);
      }
      31.5% {
        transform: translateX(-3px) rotateY(-5deg);
      }
      43.5% {
        transform: translateX(2px) rotateY(3deg);
      }
      50% {
        transform: translateX(0);
      }
    }
  `
}

const nextSize = size => {
  if (size.endsWith('xs')) {
    return size.slice(1)
  }
  if (size.endsWith('xl')) {
    return `x${size}`
  }
  switch (size) {
    case 's':
      return 'm'
    case 'm':
      return 'l'
    case 'l':
      return 'xl'
    default:
      return ''
  }
}

const iterateSize = (originSize, times = 1) => {
  let size = originSize
  for (let i = times; i > 0; i--) {
    size = nextSize(size)
  }
  return size
}

// const fontFamilies = {
//   geometric: css`Montserrat, sans-serif`
// }

export {
  goldenNumber,
  fontSizes,
  spacing,
  radius,
  breakpoints,
  colors,
  animation,
  // fontFamilies,
  iterateSize,
  fontSizeRatios
}
