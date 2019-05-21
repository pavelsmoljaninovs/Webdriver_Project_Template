import { assert } from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/login';
import exp from '../../../expected/login';

describe('Email field', function () {

  it('Min Characters', function () {
    browser.url('/');
    $(sel.email).addValue('W');
    $(sel.login).click();
    let error = $(sel.error).getText();
    assert.equal(error, exp.errorLogin);
  });

  it('Max Characters', function () {
    let actual = help.maxInput(sel.email, exp.maxLength);
    assert.equal(actual, exp.maxLength);
  });

  it('Max Characters + 1', function () {
    let actual = help.maxInput(sel.email, exp.maxLength + 1);
    assert.equal(actual, exp.maxLength);
  });

  it('Empty email', function () {
    $(sel.login).click();
    let actual = $(sel.error).getText();
    assert.equal(actual, exp.errorLogin);
  });

  it('Unregistrated Email', function () {
    help.randomEmail(sel.email);
    help.randomPassword(sel.password);
    $(sel.login).click();
    let actual = $(sel.error).getText();
    assert.equal(actual, exp.errorLogin);
  });

});

describe('Registration', function() {

  it('Redirect to registration', function () {
    $(sel.registration).click();
    let emailC = $(sel.emailConfirm);
    emailC.waitForDisplayed(2000);
    assert.isTrue(emailC.isDisplayed());
  });

});