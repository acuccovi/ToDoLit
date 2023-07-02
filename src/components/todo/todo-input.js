import { LitElement, html } from 'lit';

export default class ToDoInput extends LitElement {
  _onSubmit(e) {
    e.preventDefault();
    const input = this.shadowRoot.querySelector('#new_item');
    const { value } = input;
    if (!value || !value.trim()) return;
    this.dispatchEvent(new CustomEvent('add_item', { detail: value }));
    input.value = '';
  }

  render() {
    return html`
      <form @submit="${this._onSubmit}">
        <input type="text" id="new_item" />
      </form>
    `;
  }
}
