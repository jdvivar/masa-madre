import { LitElement, html, css } from 'lit-element'
import { breakpoints, spacing } from '../../utils/values.styles.js'
import '../uh-card/uh-card.js'

export class UhSkill extends LitElement {
  static get is () {
    return 'uh-skill'
  }

  static get styles () {
    return css`
      .card {
        display: none;
      }

      .no-card .title {
        display: block;
      }

      .card-wrapper {
        display: flex;
      }

      @media(min-width: ${breakpoints.l}) {
        .no-card {
          display: none;
        }
        .card {
          display: block;
        }

        .card-wrapper {
          margin: ${spacing.s} ${spacing.m} ${spacing.s} 0;
        }

        .card .title {
          margin-bottom: ${spacing.s};
          display: block;
        }

        .card .description {
          display: block;
        }
      }
    `
  }

  getSlot (name) {
    const el = this.querySelector(`[slot=${name}]`).cloneNode(true)
    el.removeAttribute('slot')
    el.classList.add(name)
    return el
  }

  render () {
    return html`
      <div class="wrapper">
        <div class="no-card">
          ${this.getSlot('icon')}
          ${this.getSlot('title')}
        </div>
        <uh-card class="card">
          <div class="card-wrapper">
            <div class="left">
              ${this.getSlot('icon')}
            </div>
            <div class="right">
              ${this.getSlot('title')}
              ${this.getSlot('description')}
            </div>
          </div>
        </uh-card>
      </div>
    `
  }
}
