import api from '../../../helpers/api';
import helper from '../../../helpers/helpers';
import data from '../../../data/api';
import exp from '../../../expected/api';
import { assert } from 'chai';

describe('Bugs - Positive', function () {

  it('All bugs', function () {
    let res = api.get(browser.options.baseUrl + data.allBugsUrl);
    assert.isTrue(Array.isArray(res));
    let id = res[res.length - 1]._id;
    let bug = res[res.length - 1].bug;
    assert.equal(typeof id, 'string');
    assert.isTrue(typeof bug === 'object' && bug !== null && !Array.isArray(bug));
  });

});

describe('Bugs - Negative', function () {

  it('Incorrect ID', function () {
    let randomId = helper.generateRandomString(10);
    let res = api.get(browser.options.baseUrl + data.allBugsUrl + randomId);
    exp.bug.incorrectId.error = exp.bug.incorrectId.error.replace('##ID##', randomId);
    exp.bug.incorrectId.value = exp.bug.incorrectId.value.replace('##ID##', randomId);
    assert.deepEqual(res, exp.bug.incorrectId);
  });

});
