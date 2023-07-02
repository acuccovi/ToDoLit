export class UserController {
  USER_ITEM = 'user';

  constructor(host) {
    this.host = host;
    host.addController(this);
  }

  async isAuthenticated() {
    const user = window.localStorage.getItem(this.USER_ITEM);
    const result = user && true;
    return new Promise(res => {
      res({
        result,
        user: result ? JSON.parse(user) : null,
      });
    });
  }

  async login(user) {
    window.localStorage.setItem(this.USER_ITEM, JSON.stringify(user));
    return new Promise(res => {
      res(true);
    });
  }

  async logout() {
    window.localStorage.removeItem(this.USER_ITEM);
    return new Promise(res => {
      res();
    });
  }
}
