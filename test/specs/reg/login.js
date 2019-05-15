import { assert } from 'chai';
import sel from '../../selectors/login';
let maxLenght = 45;

describe('Login', function () {

  describe('Email', function () {

    it('Max Characters', function () {
      browser.url('/');
      let input = $('#email');
      input.addValue('j'.repeat(maxLenght));
      let actual = input.getValue().length;
      input.clearValue();
      assert.equal(actual, maxLenght);
    });

    it('Max Characters + 1', function () {
      let input = $('#email');
      input.addValue('j'.repeat(maxLenght + 1));
      let actual = input.getValue().length;
      assert.equal(actual, maxLenght);
    });

    it('Registration', function () {
      let reg = $(sel.registration).click();
      let email_c = $(sel.email_confirm);
      email_c.waitForDisplayed(2000);
      assert.isTrue(email_c.isDisplayed());
    })

  });

});