const { EventEmitter } = require('events');

class UserService extends EventEmitter {
  async create(user) {
    this.emit('pre.create', user);
    // TODO stocker en database

    this.emit('post.create', user);
  }
}

(async () => {
  const userService = new UserService();
  userService.on('pre.create', (user) => {
    console.log('user creating', user);
  });

  // logguer
  await userService.create({
    username: 'romain'
  });
  // envoyer email
})()
