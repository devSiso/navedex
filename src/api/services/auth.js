import API from '../index'

class AuthService extends API {
  constructor() {
    super(API);
  }

  async signIn(data) {
    return this.post('/users/login', {
      email: data.email,
      password: data.password
    });
  }

  async signUp(data) {
    return this.post('users/signup', data);
  }

}

export default new AuthService();
