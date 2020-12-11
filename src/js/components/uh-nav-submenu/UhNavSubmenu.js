import { LitElement, html } from 'lit-element'

export class UhNavSubmenu extends LitElement {
  static get is () {
    return 'uh-nav-submenu'
  }

  render () {
    return html`
      <uh-text size="s" non-responsive><slot></slot></uh-text>
    `
  }
}
