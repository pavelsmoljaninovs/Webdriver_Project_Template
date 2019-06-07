import api from '../../../helpers/api';
import data from '../../../data/api';
import exp from '../../../expected/api';
import { assert } from 'chai';

describe('POST - Bug', function () {

  it('Positive', function () {
    let res = api.post(browser.options.baseUrl + data.bugsUrl, data.bug);
    assert.equal(res.message, exp.bug.successMessage);
    assert.deepEqual(res.bug.bug, data.bug.bug);
    api.writeJson('./test/data/id.json', {id: res.bug._id})
  });

});
