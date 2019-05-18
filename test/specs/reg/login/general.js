import { assert } from 'chai';
import sel from '../../../selectors/login';
import exp from '../../../expected/login';
import help from "../../../helpers/helpers";

describe('Email', function () {

  it('Email field has a placeholder text when field is empty', function () {
    browser.url('/');
    let input = $(sel.email);
    let placeholder = input.getAttribute('placeholder');
    assert.equal(placeholder, exp.emailPlaceholderText);
  });

  it('Font size', function () {
    let input = $(sel.email);
    let fontSize = input.getCSSProperty('font-size').value;
    assert.equal(fontSize, exp.emailFontSize);
  });

  it('Font weight', function () {
    let input = $(sel.email);
    let fontWeight = input.getCSSProperty('font-weight').parsed.value;
    assert.equal(fontWeight, exp.emailFontWeight);
  });

  it('Font family', function () {
    let input = $(sel.email);
    let fontFamily = input.getCSSProperty('font-family').value.toLowerCase();
    assert.equal(fontFamily, exp.emailFontFamily);
  });

  it('Focus highlight color', function () {
    let input = $(sel.email);
    input.click();
    let highlightColor = input.getCSSProperty('box-shadow').parsed.hex;
    assert.equal(highlightColor, exp.emailHighlightColor);
  });

  it('Enters first symbol: email font color', function () {
    let input = $(sel.email);
    input.addValue('a');
    let fontColor = input.getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.emailValueTextColor);
  });

  it('Max chars', function () {
    let actual = help.maxInput(sel.email, exp.emailMaxLength + 1);
    assert.equal(actual, exp.emailMaxLength);
  });

});

describe('"* Required field" text', function () {

  it('Align on the left', function () {
    let requiredField = $(sel.requiredField);
    let textAlign = requiredField.getCSSProperty('text-align').value;
    assert.equal(textAlign, exp.requiredFieldTextAlign);
  });

  it('Font size', function () {
    let requiredField = $(sel.requiredField);
    let fontSize = requiredField.getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.requiredFieldFontSize);
  });

  it('Font Family', function () {
    let requiredField = $(sel.requiredField);
    let fontFamily = requiredField.getCSSProperty('font-family').parsed.value[0];
    assert.equal(fontFamily, exp.requiredFieldFontFamily.toLowerCase());
  });

  it('Font Weight', function () {
    let requiredField = $(sel.requiredField);
    let fontWeight = requiredField.getCSSProperty('font-weight').parsed.value;
    assert.equal(fontWeight, exp.requiredFieldFontWeight);
  });

  it('Font Color', function () {
    let requiredField = $(sel.requiredField);
    let fontColor = requiredField.getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.requiredFieldFontColor);
  });

});

describe('Forgot Password link', function () {

  it('Link name', function () {
    let forgotPas = $(sel.forgotPassword);
    let linkName = forgotPas.getText('.button_submit');
    assert.equal(linkName, exp.forgotPasswordLinkLinkName);
  });

  it('"Forgot Password link" is displayed ', function () {
    let forgotPas = $(sel.forgotPassword);
    let actual = forgotPas.isDisplayed();
    assert.equal(actual, true);
  });

  it('Link type', function () {
    let forgotPas = $(sel.forgotPassword);
    let linkType = forgotPas.getAttribute('class');
    assert.equal(linkType, exp.forgotPasswordLinkLinkType);
  });

  it('Font Color', function () {
    let forgotPas = $(sel.forgotPassword);
    let fontColor = forgotPas.getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.forgotPasswordLinkColor);
  });

  it('Font Color in hover state', function () {
    let forgotPas = $(sel.forgotPassword);
    forgotPas.moveTo();
    let fontColor = forgotPas.getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.forgotPasswordLinkHoverColor);
  });

  it('Text-decoration is underline', function () {
    let forgotPas = $(sel.forgotPassword);
    forgotPas.moveTo();
    let textDecor = forgotPas.getCSSProperty('text-decoration-line').value;
    assert.equal(textDecor, exp.forgotPasswordLinkTextDecoration);
  });

  it('After clik, open page "Forgot Password" ', function () {
    let forgotPas = $(sel.forgotPassword);
    forgotPas.click();
    let actual = $('#remind').isDisplayed();
    assert.equal(actual, true);
  });

});

