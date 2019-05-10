import { assert } from 'chai';
//import loginData from '../../data/login';
import login from '../../helpers/login';

describe('Login', function () {

  it('Works', function () {
    login.login();
    assert.isTrue(true);
  })

});

