import { FirebaseController } from './firebase.controller.js';

export class TodoListController {
  constructor(host) {
    this.host = host;
    host.addController(this);
    this.firebaseController = new FirebaseController(host);
  }

  async getList(userId, callback) {
    return new Promise((res, rej) => {
      this.firebaseController
        .readList(userId, data => {
          callback(data);
        })
        .then(() => res())
        .catch(err => rej(err));
    });
  }

  async saveList(userId, list) {
    //    window.localStorage.setItem('list', JSON.stringify(list));
    this.firebaseController.pushList(userId, list).catch(err => {
      console.log(err);
      alert(err);
    });
  }
}
