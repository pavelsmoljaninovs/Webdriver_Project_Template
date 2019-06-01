import login from '../../../pages/not-logged/pages/login.page';
import { assert } from 'chai';

describe('Login', function () {

  it('Works', function () {
    login.open();
    let res = login.checkLogin();
    assert.isTrue(res);
  });

});
