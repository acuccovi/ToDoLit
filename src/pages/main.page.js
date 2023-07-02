import { LitElement, html } from 'lit';
import { UserController } from '../controllers/user-controller.js';
import { RouterController } from '../controllers/router-controller.js';

export default class MainPage extends LitElement {
  static get properties() {
    return {
      user: {
        type: Object,
      },
    };
  }

  constructor() {
    super();
    this.userController = new UserController(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.userController
      .isAuthenticated()
      .then(data => {
        if (!data.result) {
          RouterController.goToLoginPage();
        } else {
          this.user = data.user;
        }
      })
      .catch(err => alert(err));
  }

  shouldUpdate() {
    return !!this.user;
  }

  _logoutUser() {
    this.userController.logout();
    RouterController.goToLoginPage();
  }

  render() {
    return html` <todo-lit .user="${this.user}"></todo-lit>
      <button @click="${() => this._logoutUser()}">Logout</button>`;
  }
}
