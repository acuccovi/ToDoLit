import { LitElement, html } from 'lit';

export default class ToDoItem extends LitElement {
  static get properties() {
    return {
      userId: {
        type: String,
      },
      text: {
        type: String,
      },
      checked: {
        type: Boolean,
        attrName: 'checked',
      },
      index: {
        type: Number,
      },
    };
  }

  _onRemove() {
    this.dispatchEvent(
      new CustomEvent('remove_item', {
        detail: {
          item: {
            uid: this.uid,
            text: this.text,
            chcked: this.checked,
            index: this.index,
          },
        },
      })
    );
  }

  _onToggle() {
    this.dispatchEvent(
      new CustomEvent('toggle_completion', {
        detail: {
          item: {
            uid: this.uid,
            text: this.text,
            chcked: this.checked,
            index: this.index,
          },
        },
      })
    );
  }

  render() {
    return html`
      <label
        ><input
          type="checkbox"
          .checked="${this.checked}"
          @click="${this._onToggle}"
        />
        ${this.text}</label
      >
      <button @click="${this._onRemove}">&times;</button>
    `;
  }
}
