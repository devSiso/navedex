import API from '../index'

class NaversService extends API {
  constructor() {
    super(API);
  }

  async getNavers() {
    return this.get('/navers');
  }

  async getNaver(id) {
    return this.get(`/navers/${id}`);
  }

  async deleteNaver(id) {
    return this.delete(`/navers/${id}`);
  }
}

export default new NaversService();
