import api from '../../../helpers/api';
import helper from '../../../helpers/helpers';
import { assert } from 'chai';

describe('GET - General', function () {

  it('Base URL', function () {
    let res = api.get(browser.options.baseUrl);
    assert.deepEqual(res, {error: {message: "Not found"}});
  });

  it('Incorrect Link', function () {
    let res = api.get(browser.options.baseUrl + helper.generateRandomString(10));
    assert.deepEqual(res, {error: {message: "Not found"}});
  })

});
