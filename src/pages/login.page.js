import { LitElement, html } from 'lit';
import { UserController } from '../controllers/user-controller.js';
import { RouterController } from '../controllers/router-controller.js';

export default class LoginPage extends LitElement {
  constructor() {
    super();
    this.userController = new UserController(this);
  }

  connectedCallback() {
    super.connectedCallback();
    this.userController
      .isAuthenticated()
      .then(data => {
        if (data.result) {
          RouterController.goToToDoPage();
        }
      })
      .catch(err => alert(err));
  }

  _loginUser(e) {
    const { user } = e.detail.data;
    this.userController
      .login(user)
      .then(res => {
        if (res) {
          RouterController.goToToDoPage();
        }
      })
      .catch(err => alert(err));
  }

  render() {
    return html` <todo-app-login
      @user_registerd="${e => this._loginUser(e)}"
      @user_logged="${e => this._loginUser(e)}"
    ></todo-app-login>`;
  }
}
