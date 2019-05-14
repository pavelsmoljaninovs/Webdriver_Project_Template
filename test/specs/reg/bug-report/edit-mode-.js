import {assert} from 'chai';
import sel from '../../../selectors/edit-mode-input-fields';
import exp from '../../../expected/edit-mode-input-fields';
import help from '../../../helpers/helpers';

describe('Input Fields Properties', function () {

    it('Font Family', function () {
        browser.url('/');
        help.login();
        $(sel.bugReport).click();
        $(sel.edit).click();
        let summary = $(sel.summary);
        let fontFamily = summary.getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        let summary = $(sel.summary);
        let fontSize = summary.getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        let summary = $(sel.summary);
        let fontWeight = summary.getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        let summary = $(sel.summary);
        let fontColor = summary.getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.fontColor);
    });

    it('Text Align', function () {
        let summary = $(sel.summary);
        let textAlign = summary.getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.textAlign);
    });

    it('Font Family', function () {
        let actual = $(sel.actual);
        let fontFamily = actual.getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        let actual = $(sel.actual);
        let fontSize = actual.getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        let actual = $(sel.actual);
        let fontWeight = actual.getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        let actual = $(sel.actual);
        let fontColor = actual.getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.fontColor);
    });

    it('Text Align', function () {
        let actual = $(sel.actual);
        let textAlign = actual.getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.textAlign);
    });

    it('Font Family', function () {
        let expected = $(sel.expected);
        let fontFamily = expected.getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        let expected = $(sel.expected);
        let fontSize = expected.getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        let expected = $(sel.expected);
        let fontWeight = expected.getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        let expected = $(sel.expected);
        let fontColor = expected.getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.fontColor);
    });

    it('Text Align', function () {
        let expected = $(sel.expected);
        let textAlign = expected.getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.textAlign);
    });


    it('Font Family', function () {
        let attach = $(sel.attach);
        let fontFamily = attach.getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        let attach = $(sel.attach);
        let fontSize = attach.getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        let attach = $(sel.attach);
        let fontWeight = attach.getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        let attach = $(sel.attach);
        let fontColor = attach.getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.fontColor);
    });

    it('Text Align', function () {
        let attach = $(sel.attach);
        let textAlign = attach.getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.textAlign);
    });

});
