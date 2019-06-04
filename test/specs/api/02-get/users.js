import api from '../../../helpers/api';
import helper from '../../../helpers/helpers';
import data from '../../../data/api';
import exp from '../../../expected/api';
import { assert } from 'chai';

describe('GET - Users - Positive', function () {

  it('All users', function () {
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

// describe('GET - Bugs - Negative', function () {
//
//   it('Incorrect ID', function () {
//     let randomId = helper.generateRandomString(10);
//     let res = api.get(browser.options.baseUrl + data.bugsUrl + randomId);
//     exp.bug.incorrectId.error = exp.bug.incorrectId.error.replace('##ID##', randomId);
//     exp.bug.incorrectId.value = exp.bug.incorrectId.value.replace('##ID##', randomId);
//     assert.deepEqual(res, exp.bug.incorrectId);
//   });
//
// });
