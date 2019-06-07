import api from '../../../helpers/api';
import data from '../../../data/api';
import { assert } from 'chai';
import { id } from '../../../data/id';
import helper from '../../../helpers/helpers';

describe('DELETE - Bug', function () {

  it('Positive', function () {
    let res = api.delete(browser.options.baseUrl + data.bugsUrl + id);
    assert.equal(res.result, 1);
  });

  it('Negative', function () {
    let res = api.delete(browser.options.baseUrl + data.bugsUrl + helper.generateRandomString(10));
    assert.equal(res.result, 0);
  });

});
