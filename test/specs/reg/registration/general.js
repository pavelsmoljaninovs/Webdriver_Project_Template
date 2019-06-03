import { assert } from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/registration';
import exp from '../../../expected/registration';
import regData from "../../../data/registration";

describe('Email field', function () {

  it('Placeholder text', function () {
    help.openRegistration();
    let actual = $(sel.email).getAttribute('placeholder');
    assert.equal(actual, exp.placeholderEmail);
  });

  it('Max Characters', function () {
    let actual = help.maxInput(sel.email, exp.maxLength);
    assert.equal(actual, exp.maxLength);
  });

  it('Max Characters + 1', function () {
    let actual = help.maxInput(sel.email, exp.maxLength + 1);
    assert.equal(actual, exp.maxLength);
  });

  it('Font size', function () {
    let actual = $(sel.email).getCSSProperty('font-size').value;
    assert.equal(actual, exp.fontSize);
  });

  it('Font weight', function () {
    let actual = $(sel.email).getCSSProperty('font-weight').value;
    assert.equal(actual, exp.fontWeight);
  });

  it('Font family', function () {
    let actual = $(sel.email).getCSSProperty('font-family').value;
    assert.equal(actual, exp.fontFamily);
  });

  it('Font color', function () {
    let actual = $(sel.email).getCSSProperty('color').parsed.hex;
    assert.equal(actual, exp.fontColor);
  });

  it('Box shadow', function () {
    $(sel.email).addValue('S');
    let actual = $(sel.email).getCSSProperty('box-shadow').parsed.hex;
    $(sel.email).clearValue();
    assert.equal(actual, exp.shadowColor);
  });
});

describe('Last Name', function () {
  it('Registration placeholder text', function () {
    help.openRegistration();
    let actual = $(sel.lastName).getAttribute('placeholder');
    assert.equal(actual, exp.placeholderLastName);
  });

  it('Last Name font size', function () {
    let actual = $(sel.lastName).getCSSProperty('font-size').value;
    assert.equal(actual, exp.fontSize);
  });

  it('Last Name font weight', function () {
    let actual = $(sel.lastName).getCSSProperty('font-weight').value;
    assert.equal(actual, exp.fontWeight);
  });

  it('Last Name font family', function () {
    let actual = $(sel.lastName).getCSSProperty('font-family').value;
    assert.equal(actual, exp.fontFamily);
  });
});

describe('Confirm email', function () {

  it('User successfully registered', function () {
    help.openRegistration();
    help.registration();
    $(sel.registerMe).click();
    let newBug = $(sel.newBugButton);
    newBug.waitForDisplayed(5000);
    assert.isTrue(help.isVisible(sel.newBugButton));
  });

  it('Confirm email and Confirm password', function () {
    help.openRegistration();
    let confirmEmail = help.isVisible(sel.confirmEmail);
    let confirmPassword = help.isVisible(sel.confirmPassword);
    assert.isTrue(confirmEmail);
    assert.isTrue(confirmPassword);
  });

  it('Emails dont match', function () {
    $(sel.firstName).addValue(regData.firstName);
    $(sel.lastName).addValue(regData.lastName);
    $(sel.email).addValue(regData.email);
    $(sel.confirmEmail).addValue('a' + regData.email);
    $(sel.password).addValue(regData.password);
    $(sel.confirmPassword).addValue(regData.password);
    $(sel.registerMe).click();
    let actual = $(sel.error).getText();
    assert.equal(actual, exp.emailsDontMatch);
  });

  it('Passwords dont match', function () {
    help.openRegistration();
    $(sel.firstName).addValue(regData.firstName);
    $(sel.lastName).addValue(regData.lastName);
    $(sel.email).addValue(regData.email);
    $(sel.confirmEmail).addValue(regData.email);
    $(sel.password).addValue(regData.password);
    $(sel.confirmPassword).addValue(regData.password + '1');
    $(sel.registerMe).click();
    let actual = $(sel.error).getText();
    assert.equal(actual, exp.passwordsDontMatch);
  });
});

describe('Password', function () {

  it('Password placeholder', function () {
    help.openRegistration();
    let placeholderPassword = $(sel.password).getAttribute('placeholder');
    assert.equal(placeholderPassword, exp.placeholderPassword);
  });

  it('Password field is required', function () {
    $(sel.firstName).addValue(regData.firstName);
    $(sel.lastName).addValue(regData.lastName);
    let email = $(sel.email);
    $(sel.email).addValue(regData.email);
    $(sel.confirmEmail).addValue(email.getValue());
    $(sel.registerMe).click();
    let error = $(sel.error).getText();
    assert.equal(error, exp.passwordsEmpty);
  });

  it('Password max length', function () {
    let passwordLength = help.maxInput(sel.password, exp.minLength);
    assert.equal(passwordLength, exp.minLength);
  });

  it('Password max length', function () {
    let passwordLength = help.maxInput(sel.password, exp.maxLength);
    assert.equal(passwordLength, exp.maxLength);
  });

  it('Password max length + 1', function () {
    let passwordLength = help.maxInput(sel.password, exp.maxLength + 1);
    assert.equal(passwordLength, exp.maxLength);
  });

  it('Password alphanumerical & special char', function () {
    help.openRegistration();
    help.registration();
    $(sel.registerMe).click();
    let newBug = $(sel.newBugButton);
    newBug.waitForDisplayed(5000);
    assert.isTrue(help.isVisible(sel.newBugButton));
  });

  it('Font size', function () {
    help.openRegistration();
    let fontSize = $(sel.password).getCSSProperty('font-size').value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font weight', function () {
    let fontWeight = $(sel.password).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font family', function () {
    let fontFamily = $(sel.password).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Password is replaced by bullets', function () {
    $(sel.password).addValue(regData.pass);
    let actual = $(sel.password).getCSSProperty('display').value;
    assert.equal(actual, exp.passwordDisplay);
  });

  it('Confirm Password is replaced by bullets', function () {
    $(sel.confirmPassword).addValue(regData.pass);
    let actual = $(sel.confirmPassword).getCSSProperty('display').value;
    assert.equal(actual, exp.passwordDisplay);
  });

});
