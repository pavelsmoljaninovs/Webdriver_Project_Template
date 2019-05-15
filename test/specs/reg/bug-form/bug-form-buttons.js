import {assert} from 'chai';
import sel from '../../../selectors/bug-form';
import exp from '../../../expected/bug-form';
import help from "../../../helpers/helpers";


describe('General', function () {
    it('Font Family', function () {
        browser.url('/');
        help.login();
        $(sel.newBugBut).click();
        let fontFamily = $(sel.submitBut).getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        let fontSize = $(sel.submitBut).getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        let fontWeight = $(sel.submitBut).getCSSProperty('font-weight').parsed.value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        let fontColor = $(sel.submitBut).getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.fontColor);
    });

    it('Text Align', function () {
        let textAlign = $(sel.submitBut).getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.textAlign);
    });
});

describe('Submit', function () {
    it('Background Color', function () {
        let subBackColor = $(sel.submitBut).getCSSProperty('background-color').parsed.hex;
        assert.equal(subBackColor, exp.subBackColor);
    });

    it(' Hover Background Color', function () {
        $(sel.submitBut).moveTo();
        browser.pause(500);
        let hovBacColor = $(sel.submitBut).getCSSProperty('background-color').parsed.hex;
        assert.equal(hovBacColor, exp.subHovBackColor);
    });

});

describe('Clear Form Button', function () {
    it('Background Color', function () {
        let clearBackColor = $(sel.clearBut).getCSSProperty('background-color').parsed.hex;
        assert.equal(clearBackColor, exp.clearBackColor);
    });

    it(' Hover Background Color', function () {
        $(sel.clearBut).moveTo();
        browser.pause(500);
        let hovBacColor = $(sel.clearBut).getCSSProperty('background-color').parsed.hex;
        assert.equal(hovBacColor, exp.clearHovBackColor);
    });
});