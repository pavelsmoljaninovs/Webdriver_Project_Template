import { assert } from 'chai';
import sel from '../../selectors/login';

describe('registration', function() {
    it('Registration', function () {
    $(sel.registration).click();
    let emailC = $(sel.emailConfirm);
    emailC.waitForDisplayed(2000);
    assert.isTrue(emailC.isDisplayed());
   })
});
