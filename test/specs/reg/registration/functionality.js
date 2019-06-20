import { assert } from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/registration';
import exp from '../../../expected/registration';
import data from "../../../data/registration";

describe('First name', function () {

  it('Field accept 20 symbols', function () {
    help.openRegistration();
    help.registration();
    help.fieldClear(sel.firstName);
    let actual = help.maxInput(sel.firstName, data.maxNameLength);
    assert.equal(actual, exp.maxNameLength);
  });

  it('Field accept 1 symbol', function () {
    help.openRegistration();
    help.registration();
    help.fieldClear(sel.firstName);
    let actual = help.maxInput(sel.firstName, data.minNameLength);
    assert.equal(actual, exp.minNameLength);
  });

  it('Field accept 10 symbols', function () {
    help.openRegistration();
    help.registration();
    help.fieldClear(sel.firstName);
    let actual = help.maxInput(sel.firstName, data.middleNameLength);
    assert.equal(actual, exp.middleNameLength);
  });

  it('Field does not accept 21 symbols', function () {
    help.openRegistration();
    let actual = help.maxInput(sel.firstName, data.maxNameLength + 1);
    assert.equal(actual, exp.maxNameLength);
  });

  it('Empty field', function () {
    help.openRegistration();
    help.registration();
    help.fieldClear(sel.firstName);
    $(sel.registerMe).click();
    let actual = $(sel.error).getText();
    assert.equal(actual, exp.emptyField);
  });

});

describe('Last name', function () {

  it('Field accept 20 symbols', function () {
    help.openRegistration();
    help.registration();
    help.fieldClear(sel.lastName);
    let actual = help.maxInput(sel.lastName, data.maxNameLength);
    assert.equal(actual, exp.maxNameLength);
  });

  it('Field accept 1 symbol', function () {
    help.openRegistration();
    help.registration();
    help.fieldClear(sel.lastName);
    let actual = help.maxInput(sel.lastName, data.minNameLength);
    assert.equal(actual, exp.minNameLength);
  });

  it('Field accept 10 symbols', function () {
    help.openRegistration();
    help.registration();
    help.fieldClear(sel.lastName);
    let actual = help.maxInput(sel.lastName, data.middleNameLength);
    assert.equal(actual, exp.middleNameLength);
  });

  it('Field does not accept 21 symbols', function () {
    help.openRegistration();
    let actual = help.maxInput(sel.lastName, data.maxNameLength + 1);
    assert.equal(actual, exp.maxNameLength);
  });

  it('Empty field', function () {
    help.openRegistration();
    help.registration();
    help.fieldClear(sel.lastName);
    $(sel.registerMe).click();
    let actual = $(sel.error).getText();
    assert.equal(actual, exp.emptyField);
  });

});

describe('Email field', function () {

  it('Placeholder text for field is correct', function () {
    help.openRegistration();
    let actual = $(sel.email).getAttribute('placeholder');
    assert.equal(actual, exp.placeholderEmail);
  });

  it('Font color after entering first symbol', function () {
    $(sel.email).addValue(data.email.slice(0,1));
    let actual = $(sel.email).getCSSProperty('color').parsed.hex;
    $(sel.email).clearValue();
    assert.equal(actual, exp.fontColor);
  });

  it('Focus highlight color after entering first symbol', function () {
    $(sel.email).addValue(data.email.slice(0,1));
    let actual = $(sel.email).getCSSProperty('box-shadow').parsed.hex;
    $(sel.email).clearValue();
    assert.equal(actual, exp.shadowColor);
  });

  it('Email min length ', function () {
    let actual = help.maxInput(sel.email, exp.minLength);
    assert.equal(actual, exp.minLength);
  });

  it('Email max length ', function () {
    let actual = help.maxInput(sel.email, exp.maxLength);
    assert.equal(actual, exp.maxLength);
  });

  it('Empty field email causes error', function () {
    help.fieldClear(sel.email);
    $(sel.registerMe).click();
    let actual = $(sel.error).getText();
    assert.equal(actual, exp.emptyField);
  });

});

describe('Confirm email field', function () {

  it('Placeholder text for field ', function () {
    help.openRegistration();
    let actual = $(sel.confirmEmail).getAttribute('placeholder');
    assert.equal(actual, exp.confirmEmailPlaceholder);
  });

  it('Font color after entering first symbol', function () {
    $(sel.confirmEmail).addValue(data.confirmEmail.slice(0,1));
    let actual = $(sel.confirmEmail).getCSSProperty('color').parsed.hex;
    assert.equal(actual, exp.fontColor);
  });

  it('Focus highlight color after entering first symbol', function () {
    $(sel.confirmEmail).addValue(data.confirmEmail.slice(0,1));
    let actual = $(sel.confirmEmail).getCSSProperty('box-shadow').parsed.hex;
    $(sel.confirmEmail).clearValue();
    assert.equal(actual, exp.shadowColor);
  });

  it('Confirm email min length ', function () {
    let actual = help.maxInput(sel.confirmEmail, exp.minLength);
    assert.equal(actual, exp.minLength);
  });

  it('Confirm email max length ', function () {
    let actual = help.maxInput(sel.confirmEmail, exp.maxLength);
    assert.equal(actual, exp.maxLength);
  });
});

describe('Password field', function () {

  it('Fields pass and confirm pass are empty', function () {
    help.openRegistration();
    help.registration();
    help.fieldClear(sel.password);
    help.fieldClear(sel.confirmPassword);
    $(sel.registerMe).click();
    let actual = $(sel.error).getText();
    assert.equal(actual, exp.passwordsEmpty);
  });

  it('Max Characters pass', function () {
    let actual = help.maxInput(sel.password, exp.maxLength);
    assert.equal(actual, exp.maxLength);
  });

  it('Max Characters + 1 pass', function () {
    let actual = help.maxInput(sel.password, exp.maxLength + 1);
    assert.equal(actual, exp.maxLength);
  });

  it('Max Characters confirm pass', function () {
    let actual = help.maxInput(sel.confirmPassword, exp.maxLength);
    assert.equal(actual, exp.maxLength);
  });

  it('Max Characters + 1 confirm pass', function () {
    let actual = help.maxInput(sel.confirmPassword, exp.maxLength + 1);
    assert.equal(actual, exp.maxLength);
  });

  it('Passwords do not match', function () {
    $(sel.password).addValue(data.password);
    $(sel.confirmPassword).addValue(data.password + '1');
    $(sel.registerMe).click();
    let actual = $(sel.error).getText();
    assert.equal(actual, exp.passwordsDontMatch);
  });

});
