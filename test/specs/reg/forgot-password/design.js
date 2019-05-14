import {assert} from 'chai';
import sel from '../../../selectors/forgot-password';
import exp from '../../../expected/forgot-password';

describe('Error message', function () {

    it('Background Color', function () {
        browser.url('/');
        $(sel.forgot).click();
        $(sel.remindPass).click();
        let bgColor = $(sel.errorButton).getCSSProperty('background-color').parsed.hex;
        assert.equal(bgColor, exp.errorButtonBackColor);
    });

    it('Border Color', function () {
        let brColor = $(sel.errorButton).getCSSProperty('border-color').parsed.hex;
        assert.equal(brColor, exp.errorButtonBordColor);
    });

    it('Font Family', function () {
        let ftFam = $(sel.errorButton).getCSSProperty('font-family').value;
        assert.equal(ftFam, exp.errorButtonFontFamily);
    });

    it('Font Size', function () {
        let ftSize = $(sel.errorButton).getCSSProperty('font-size').parsed.value;
        assert.equal(ftSize, exp.errorButtonFontSize);
    });

    it('Font Weight', function () {
        let ftWeight = $(sel.errorButton).getCSSProperty('font-weight').value;
        assert.equal(ftWeight, exp.errorButtonFontWeight);
    });

    it('Font Color', function () {
        let ftColor = $(sel.errorButton).getCSSProperty('color').parsed.hex;
        assert.equal(ftColor, exp.errorButtonFontColor);
    });

    it('Text Aline', function () {
        let textAline = $(sel.errorButton).getCSSProperty('text-align').value;
        assert.equal(textAline, exp.errorButtonTextAlign);
    });
});