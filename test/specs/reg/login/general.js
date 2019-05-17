import { assert } from 'chai';
import sel from '../../../selectors/login';
import exp from '../../../expected/login';

describe('Login', function () {

  describe('Email', function () {

    it('Email field has a placeholder “Email *” when field is empty', function () {
      browser.url('/');
      let input = $('#email');
      let placeholder = input.getAttribute('placeholder');
      assert.equal(placeholder, exp.emailPlaceholderText);
    })

    it('Font size: 16px', function () {
      browser.url('/');
      let input = $('#email');
      let fontSize = input.getCSSProperty('font-size').value;
      assert.equal(fontSize, exp.emailFontSize);
    })

    it('Font weight: 400', function () {
      browser.url('/');
      let input = $('#email');
      let fontWeight = input.getCSSProperty('font-weight').parsed.value;
      assert.equal(fontWeight, exp.emailFontWeight);
    })

    it('Placeholder font color: #6c757d (gray)', function () {
      browser.url('/');
      let input = $('#placeholder');
      let fontWeight = input.getCSSProperty('color').parsed.hex;
      assert.equal(fontWeight, exp.emailPlaceholderColor);
    })

    it('Font family: Segoe UI', function () {
      browser.url('/');
      let input = $('#email');
      let fontFamily = input.getCSSProperty('font-family').value.toLowerCase();
      assert.equal(fontFamily, exp.emailFontFamily);
    })

    it('Max chars: 45', function () {
      browser.url('/');
      let input = $('#email');
      input.addValue('j'.repeat(exp.emailMaxLength + 1));
      let dataLength = input.getValue().length;
      assert.equal(dataLength, exp.emailMaxLength);
    })

    it('Once user puts a cursor to the field focus highlight color: rgba(0,123,255,0.25)', function () {
      browser.url('/');
      let input = $('#email');
      input.click();
      let highlightColor = input.getCSSProperty('box-shadow').parsed.hex;
      assert.equal(highlightColor, exp.emailHighlightColor);
    })

    it('Enters first symbol:email font color: #495057', function () {
      browser.url('/');
      let input = $('#email');
      input.addValue('a');
      let fontColor = input.getCSSProperty('color').parsed.hex;
      assert.equal(fontColor, exp.emailValueTextColor);
    })

  });

});