import { Router } from '@vaadin/router';

export class RouterController {
  static router = {};

  static makeRouter() {
    this.router = new Router(document.getElementById('root'));
    this.router.setRoutes([
      { path: '/', component: 'login-page' },
      { path: '/todo', component: 'main-page' },
      { path: '/(.*)', component: 'not-found-page' },
    ]);
  }

  static goToLoginPage() {
    window.location = '/';
  }

  static goToToDoPage() {
    window.location = '/todo';
  }
}
