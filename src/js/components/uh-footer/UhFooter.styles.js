import { css } from 'lit-element'
import { minireset } from 'minireset.css/minireset.css.lit.js'
import { colors, spacing, breakpoints } from '../../utils/values.styles.js'
import { contentRowStyleMixin } from '../uh-content-row/UhContentRow.style.js'

export const styles = css`
${minireset}

.wrapper {
  background: ${colors.codGray};
}

footer {
  ${contentRowStyleMixin()}
  background: ${colors.codGray};
  color: white;
  margin-bottom: 0;
  margin-top: 0;
  padding-top: ${spacing.m};
  padding-bottom: ${spacing.m};
}


@media(min-width: ${breakpoints.s}) {
  footer {
    display: flex;
    justify-content: space-between;
  }
}

@media(min-width: ${breakpoints.l}) {
  footer {
    ${contentRowStyleMixin('l')}
    margin-bottom: 0;
    margin-top: 0;
    padding-top: ${spacing.l};
    padding-bottom: ${spacing.l};
  }
}

@media(min-width: ${breakpoints.xl}) {
  footer {
    ${contentRowStyleMixin('xl')}
    margin-bottom: 0;
  }
}

::slotted(a) {
  color: white;
}

::slotted(a[slot=address]),
::slotted(a[slot=links]) {
  display: block;
}

address {
  font-style: normal;
}

.wrapper-contact {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.links-list {
  margin-top: ${spacing.m};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media(min-width: ${breakpoints.xl}) {
  .links-list {
    margin: 0;
    margin-left: ${spacing.l};
    padding-left: ${spacing.m};
    border-left: 1px solid white;
  }

  .wrapper-left {
    display: flex;
  }
}

.social-wrapper {
  margin-top: ${spacing.m};
  margin-bottom: ${spacing.m};
}

@media(min-width: ${breakpoints.s}) {
  .social-wrapper {
    margin-top: 0;
  }
}

::slotted(a[slot=social]:not(:last-child)) {
  margin-right: ${spacing.s};
}
`
