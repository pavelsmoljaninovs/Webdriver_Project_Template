import { assert } from 'chai';
import login from '../../helpers/helpers';

describe('Login', function () {

  it('Works', function () {
    login.login();
    assert.isTrue(true);
  });

  it('Works', function () {
    login.login();
    assert.isTrue(true);
  });

  it('Does not', function () {
    login.login();
    assert.isTrue(false);
  });

});
