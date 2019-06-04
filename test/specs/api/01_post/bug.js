import api from '../../../helpers/api';
import helper from '../../../helpers/helpers';
import data from '../../../data/api';
import exp from '../../../expected/api';
import { assert } from 'chai';

describe('POST - Bug - Positive', function () {

  it('Bug', function () {
    let res = api.post(browser.options.baseUrl + data.bugsUrl, data.bug);
    console.log(res);
    console.log(exp.bug.successMessage);
    // assert.equal(, 'string');
    // assert.isTrue(typeof bug === 'object' && bug !== null && !Array.isArray(bug));
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
