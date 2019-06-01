import axios from 'axios';

const baseUrl = browser.options.baseUrl;

class Api {

  get() {
      return axios.get(baseUrl);
  }

}

export default new Api();
