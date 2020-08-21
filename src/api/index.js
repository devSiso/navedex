import axios from 'axios';
import cookie from 'js-cookie';

class API {
  constructor() {
    this.authBearerKey = `${process.env.REACT_APP_PROJECT_NAME}-token`;

    this.token = null;

    this.service = axios.create({
      baseURL: API.host(),
      timeout: 30000,
    });

    this.setBearer();
  }

  static host() {
    return process.env.REACT_APP_API_URL;
  }

  setBearer() {
    this.token = cookie.get(this.authBearerKey);
    this.service.defaults.headers.common.Authorization = this.token ? `Bearer ${this.token}` : '';
  }

  async get(resource, params) {
    this.setBearer();
    return this.service.get(resource, params);
  }

  async post(resource, params) {
    this.setBearer();
    return this.service.post(resource, params);
  }

  async put(resource, params) {
    this.setBearer();
    return this.service.put(resource, params);
  }

  async delete(resource) {
    this.setBearer();
    return this.service.delete(resource);
  }

  async patch(resource, params) {
    this.setBearer();
    return this.service.patch(resource, params)
  }
}

export default API;
