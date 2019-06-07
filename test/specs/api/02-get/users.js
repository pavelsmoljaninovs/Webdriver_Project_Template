import api from '../../../helpers/api';
import helper from '../../../helpers/helpers';
import data from '../../../data/api';
import exp from '../../../expected/api';
import { assert } from 'chai';

describe('GET - Users', function () {

  it('Positive - All users', function () {
    let res = api.get(browser.options.baseUrl + data.userUrl);
    assert.isTrue(Array.isArray(res));
    assert.equal(typeof res[res.length - 1]._id, 'string');
    assert.equal(typeof res[res.length - 1].fname, 'string');
    assert.equal(typeof res[res.length - 1].lname, 'string');
    assert.equal(typeof res[res.length - 1].email, 'string');
    assert.equal(typeof res[res.length - 1].pass, 'string');
    assert.equal(typeof res[res.length - 1].admin, 'boolean');
  });

});
