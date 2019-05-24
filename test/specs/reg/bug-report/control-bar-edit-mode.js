import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report';
import help from '../../../helpers/helpers';

describe('Control Bar Edit Mode Cancel Button Properties', function () {

    it('Background Color', function () {
        help.openBugReport();
        $(sel.edit).click();
        $(sel.summary).moveTo();
        browser.pause(200);
        let cancelButtonColor = $(sel.cancel).getCSSProperty('background-color').parsed.hex;
        assert.equal(cancelButtonColor, exp.cancelButtonColor);
    });

    it('Hover Background Color', function () {
        $(sel.cancel).moveTo();
        browser.pause(200);
        let cancelButtonHoverColor = $(sel.cancel).getCSSProperty('background-color').parsed.hex;
        assert.equal(cancelButtonHoverColor, exp.cancelButtonHoverColor);
    });

    it('Name of Cancel Button is Cancel', function () {
        let cancelButtonName = $(sel.cancel).getText('Cancel');
        assert.equal(cancelButtonName, exp.cancelButtonName);
    });

    it('Font Family', function () {
        let fontFamily = $(sel.cancel).getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        let fontSize = $(sel.cancel).getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        let fontWeight = $(sel.cancel).getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        let buttonFontColor = $(sel.cancel).getCSSProperty('color').parsed.hex;
        assert.equal(buttonFontColor, exp.buttonFontColor);
    });

    it('Text Align', function () {
        let buttonTextAlign = $(sel.cancel).getCSSProperty('text-align').value;
        assert.equal(buttonTextAlign, exp.buttonTextAlign);
    });

});
