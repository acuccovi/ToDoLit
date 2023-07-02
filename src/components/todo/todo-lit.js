import { LitElement, html } from 'lit';
import { TodoListController } from '../../controllers/todo-list-controller.js';

export default class ToDoLit extends LitElement {
  static get properties() {
    return {
      list: {
        state: true,
      },
      user: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.toDoListController = new TodoListController(this);
    this.list = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.toDoListController
      .getList(this.user.uid, data => {
        this.list = data.list;
      })
      .catch(() => {
        this.list = [];
      });
  }

  async _addItem(e, text) {
    this.list = [...this.list, { text, checked: false }];
    await this.toDoListController.saveList(this.user.uid, this.list);
  }

  async _removeItem(e) {
    const { item } = e.detail;
    this.list = [
      ...this.list.slice(0, item.index),
      ...this.list.slice(item.index + 1),
    ];
    await this.toDoListController.saveList(this.user.uid, this.list);
  }

  async _toggleCompletion(e) {
    const { item } = e.detail;
    const itemFromList = this.list[item.index];
    itemFromList.checked = !itemFromList.checked;
    await this.toDoListController.saveList(this.user.uid, this.list);
  }

  render() {
    return html`
      <h1>Here's yours ToDo List, ${this.user?.email}!</h1>
      <todo-input @add_item="${e => this._addItem(e, e.detail)}"></todo-input>
      <ul>
        ${this.list.map(
          (item, index) => html` <li>
            <todo-item
              .uid="${item.uid}"
              .text="${item.text}"
              .checked="${item.checked}"
              .index="${index}"
              @remove_item="${e => this._removeItem(e)}"
              @toggle_completion="${e => this._toggleCompletion(e)}"
            ></todo-item>
          </li>`
        )}
      </ul>
    `;
  }
}
