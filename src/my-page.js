import { LitElement, html } from 'lit';

import './my-header.js';
import './my-article.js';
import './my-footer.js';

class MyPage extends LitElement {
  render() {
    return html`
      <my-header>Header</my-header>
      <my-article>content</my-article>
      <my-footer>Footer</my-footer>
    `;
  }
}
customElements.define('my-page', MyPage);
