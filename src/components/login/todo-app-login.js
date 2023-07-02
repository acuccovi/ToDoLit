import { LitElement, html } from 'lit';
import { FirebaseController } from '../../controllers/firebase.controller.js';

export default class ToDoAppLogin extends LitElement {
  constructor() {
    super();
    this.firebaseController = new FirebaseController(this);
  }

  _onSubmit(e) {
    e.preventDefault();
    const email = this.shadowRoot.querySelector('#email').value;
    const password = this.shadowRoot.querySelector('#password').value;
    if (e.submitter.innerText === 'Register') {
      this._registerUser(email, password);
    } else {
      this._loginUser(email, password);
    }
  }

  _registerUser(email, password) {
    this.firebaseController
      .registerUser(email, password)
      .then(data => {
        this.dispatchEvent(
          new CustomEvent('user_registerd', {
            detail: {
              data,
            },
          })
        );
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  _loginUser(email, password) {
    this.firebaseController
      .loginUser(email, password)
      .then(data => {
        this.dispatchEvent(
          new CustomEvent('user_logged', {
            detail: {
              data,
            },
          })
        );
      })
      .catch(err => {
        console.log(err);
        alert(err);
      });
  }

  render() {
    return html`
      <img src="./assets/todo-lit.png" width="300px" alt="ToDo Lit logo" />
      <form @submit="${this._onSubmit}">
        <input id="email" type="email" />
        <input id="password" type="password" />
        <br />
        <button type="submit">Login</button>
        &nbsp;<button type="submit">Register</button>
      </form>
    `;
  }
}
