//import api from '../../../helpers/api';
import { assert } from 'chai';

const axios = require('axios');

describe('Get - Positive', function () {

  it('Base URL', function () {
    let res;
    browser.call(() => {
      return axios.get('https://small-express-server.herokuapp.com/sgfsdgzg')
        .then(function (response) {
          res = response.data;
        })
        .catch(function (error) {
         res = error.response.data;
        });
    });
    assert.deepEqual(res, {error: {message: "Not found"}});
  })

});
