import axios from 'axios';

class API {

  get(url){
    let res;
    browser.call(() => {
      return axios.get(url)
        .then(function (response) {
          res = response.data;
        })
        .catch(function (error) {
          res = error.response.data;
        });
    });
    return res;
  }

}

export default new API();