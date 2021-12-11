import { LitElement, css, html } from 'lit';

class MyFooter extends LitElement {
  static styles = css`
      :host {
      	position: absolute;
      	bottom: 0;
      	left: 0;
      	right: 0;
      }
      footer {
      	display: flex;
      	justify-content: center;
        font-family: Manrope, sans-serif;
      }
    `;
  render() {
    return html`
      <footer><p>THE END</p></footer>
    `;
  }
}
customElements.define('my-footer', MyFooter);
