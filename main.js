import LoginPage from './src/pages/login.page.js';
import MainPage from './src/pages/main.page.js';
import NotFoundPage from './src/pages/not-found.page.js';
import ToDoAppLogin from './src/components/login/todo-app-login.js';
import ToDoInput from './src/components/todo/todo-input.js';
import ToDoItem from './src/components/todo/todo-item.js';
import ToDoLit from './src/components/todo/todo-lit.js';
import { RouterController } from './src/controllers/router-controller.js';

customElements.define('login-page', LoginPage);
customElements.define('main-page', MainPage);
customElements.define('not-found-page', NotFoundPage);
customElements.define('todo-app-login', ToDoAppLogin);
customElements.define('todo-lit', ToDoLit);
customElements.define('todo-input', ToDoInput);
customElements.define('todo-item', ToDoItem);

window.addEventListener('load', () => RouterController.makeRouter());
