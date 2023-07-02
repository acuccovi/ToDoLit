import { LitElement, html } from 'lit';

export default class NotFoundPage extends LitElement {
  render() {
    return html`
      <div>
        <h2>URL not found!</h2>
        <a href="/">Go home</a>
      </div>
    `;
  }
}
