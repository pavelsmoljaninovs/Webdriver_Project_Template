import {assert} from 'chai';
import sel from '../../../selectors/login';
import exp from '../../../expected/login';

describe('"* Required field" text', function () {

    it('Align on the left', function () {
        browser.url('/');
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
