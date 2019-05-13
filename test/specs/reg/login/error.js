import { assert } from 'chai';
import sel from '../../../selectors/login';
import exp from '../../../expected/login';


describe('Design', function () {

    it('Background Color', function () {
        browser.url('/');
        $('#login').click();
        let error = $(sel.error);
        let bgColor = error.getCSSProperty('background-color').parsed.hex;
        assert.equal(bgColor, exp.errorBackgroundColor);
    });

    it('Border Color', function () {
        browser.url('/');
        $('#login').click();
        let error = $(sel.error);
        let borderColor = error.getCSSProperty('border-color').parsed.hex;
        assert.equal(borderColor, exp.errorBorderColor);
    });

    it('Font Family', function () {
        browser.url('/');
        $('#login').click();
        let error = $(sel.error);
        let fontFamily = error.getCSSProperty('font-family').parsed.value;
        assert.equal(fontFamily[0], exp.errorFontFamily.toLowerCase());
    });

    it('Font Size', function () {
        browser.url('/');
        $('#login').click();
        let error = $(sel.error);
        let fontSize = error.getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.errorFontSize);
    });

    it('Font Weight', function () {
        browser.url('/');
        $('#login').click();
        let error = $(sel.error);
        let fontWeight = error.getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.errorFontWeight);
    });

    it('Font Color', function () {
        browser.url('/');
        $('#login').click();
        let error = $(sel.error);
        let fontColor = error.getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.errorFontColor);
    });

    it('Text Align', function () {
        browser.url('/');
        $('#login').click();
        let error = $(sel.error);
        let textAlign = error.getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.errorTextAlign);
    });

});