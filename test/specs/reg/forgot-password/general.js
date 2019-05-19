import { assert } from 'chai';
import exp from '../../../expected/forgot-password';
import sel from '../../../selectors/forgot-password';
import nav from "../../../selectors/navigation-bar";
import help from "../../../helpers/helpers";

//Forgot password back button tests

describe('Forgot Password Back Button', function () {

  it('Back Button Has Text "Back"', function () {
    browser.url('/');
    $(sel.forgot).click();
    let backButton = $(sel.backButton);
    let buttonText = backButton.getText();
    assert.equal(buttonText, exp.backButtonText)
  });

  it('Back Button Is Left Aligned', function () {
    let backButton = $(sel.backButton);
    let buttonAlignment = backButton.getCSSProperty('align-items').value;
    assert.equal(buttonAlignment, exp.backButtonAlignment);
  });

  it('Back Button Text Font Size', function () {
    let backButton = $(sel.backButton);
    let fontSize = backButton.getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.backButtonFontSize);
  });

  it('Back Button Text Font Weight', function () {
    let backButton = $(sel.backButton);
    let fontWeight = backButton.getCSSProperty('font-weight').parsed.value;
    assert.equal(fontWeight, exp.backButtonFontWeight);
  });

  it('Back Button Text Font Family', function () {
    let backButton = $(sel.backButton);
    let fontFamily = backButton.getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.backButtonFontFamily);
  });

  it('Back Button Text Font Color', function () {
    let backButton = $(sel.backButton);
    let fontColor = backButton.getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.backButtonFontColor);
  });

  it('Back Button Color', function () {
    let backButton = $(sel.backButton);
    let buttonColor = backButton.getCSSProperty('background-color').parsed.hex;
    assert.equal(buttonColor, exp.backButtonColor);
  });

  it('Back Button Hover Color', function () {
    let backButton = $(sel.backButton);
    backButton.moveTo();
    browser.pause(500);
    let hoverColor = backButton.getCSSProperty('background-color').parsed.hex;
    assert.equal(hoverColor,  exp.backButtonHoverColor);
  });

});

//Email Field Tests

describe('Forgot Password Email', function () {

  it('Email Placeholder Is Displayed', function () {
    browser.url('/');
    $(sel.forgot).click();
    let email = $(sel.email);
    let emailPlaceholder = email.getAttribute('placeholder');
    assert.equal(emailPlaceholder, exp.emailInputFormPlaceholder);
  });

  it('Email Font Size', function () {
    let email = $(sel.email);
    let emailFontSize = email.getCSSProperty('font-size').parsed.value;
    assert.equal(emailFontSize, exp.emailFontSize);
  });

  it('Email Font Weight', function () {
    let email = $(sel.email);
    let emailFontWeight = email.getCSSProperty('font-weight').parsed.value;
    assert.equal(emailFontWeight, exp.emailFontWeight);
  });

  it('Email Font Family', function () {
    let email = $(sel.email);
    let emailFontFamily = email.getCSSProperty('font-family').value;
    assert.equal(emailFontFamily, exp.emailFontFamily);
  });

  it('Entered Email Font Size', function () {
    help.randomEmail(sel.email);
    let email = $(sel.email);
    let emailFontSize = email.getCSSProperty('font-size').parsed.value;
    assert.equal(emailFontSize, exp.emailFontSize);
  });

  it('Max Characters', function () {
    let actual = help.maxInput(sel.email, exp.emailMaxLength + 1);
    assert.equal(actual, exp.emailMaxLength);
  });

  it('Email Field Focus Highlight Color', function () {
    let email = $(sel.email);
    email.click();
    let focusColor = email.getCSSProperty('box-shadow').parsed.hex;
    assert.equal(focusColor, exp.emailFiledFocusHighlightColor);
  });

});

describe('Forgot Password "* Required Field" Text', function () {

  it('Text "* Required Field" is displayed', function () {
    browser.url('/');
    $(sel.forgot).click();
    let reqField = $(sel.requiredField).isDisplayed();
    assert.isTrue(reqField);
  });

  it('Font Size of "* Required Field" Text', function () {
    let reqField = $(sel.requiredField);
    assert.equal(reqField.getCSSProperty('font-size').parsed.value, exp.requiredFieldFontSize);
  });

  it('Font Family of "* Required Field" Text', function () {
    let reqField = $(sel.requiredField);
    assert.equal(reqField.getCSSProperty('font-family').value, exp.requiredFieldFontFamily);
  });

  it('Font Color of "* Required Field" Text', function () {
    let reqField = $(sel.requiredField);
    assert.equal(reqField.getCSSProperty('color').parsed.hex, exp.requiredFieldFontColor);
  });

  it('Font Weight of "* Required Field" Text', function () {
    let reqField = $(sel.requiredField);
    assert.equal(reqField.getCSSProperty('font-weight').parsed.value, exp.requiredFieldFontWeight);
  });

});


