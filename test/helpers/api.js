import axios from 'axios';
import fs from 'fs-extra';

class API {

  writeJson(file, content) {
    browser.call(() => {
      return fs.writeJson(file, content)
        .then(() => {
          console.log(`${file} created`)
        })
        .catch(err => {
          console.error(err)
        })
    });
  }

  get(url) {
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

  post(url, obj) {
    let res;
    browser.call(() => {
      return axios.post(url, obj)
        .then(function (response) {
          res = response.data;
        })
        .catch(function (error) {
          res = error.response.data;
        });
    });
    return res;
  }

  delete(url) {
    let res;
    browser.call(() => {
      return axios.delete(url)
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