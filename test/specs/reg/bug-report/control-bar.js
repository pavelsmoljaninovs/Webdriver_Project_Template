import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report';
import help from '../../../helpers/helpers';

describe('Default State', function () {

    it('Status badge element is displayed', function () {
        help.login();
        $(sel.bugReport).click();
        let statusBad = $(sel.statusBadgeEl).isDisplayed();
        assert.isTrue(statusBad);
    });

    it('Edit button is displayed', function () {
        let editBut = $(sel.edit).isDisplayed();
        assert.isTrue(editBut);
    });
});

describe('Status Badge', function () {

    it('Font Family', function () {
        let fontFamily = $(sel.statusBadgeEl).getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        let fontSize = $(sel.statusBadgeEl).getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.badgeFontSize);
    });

    it('Font Weight', function () {
        let fontWeight = $(sel.statusBadgeEl).getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.badgeFontWeight);
    });

    it('Font Color', function () {
        let fontColor = $(sel.statusBadgeEl).getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.badgeButtonFontColor);
    });

    it('Text Align', function () {
        let textAlign = $(sel.statusBadgeEl).getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.badgeButtonTextAlign);
    });
});

describe('Edit button', function () {

    it('Background Color', function () {
        let fontColor = $(sel.edit).getCSSProperty('background-color').parsed.hex;
        assert.equal(fontColor, exp.editButtonBackColor);
    });

    it('Font Family', function () {
        let fontFamily = $(sel.edit).getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        let fontSize = $(sel.edit).getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        let fontWeight = $(sel.edit).getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        let fontColor = $(sel.edit).getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.buttonFontColor);
    });

    it('Text Align', function () {
        let textAlign = $(sel.edit).getCSSProperty('text-align').value;
        assert.equal(textAlign, exp.editTextAlign);
    });

    it('Hover Background Color', function () {
        $(sel.edit).moveTo();
        browser.pause(500);
        let editButtonHoverColor = $(sel.edit).getCSSProperty('background-color').parsed.hex;
        assert.equal(editButtonHoverColor, exp.editButtonHoverColor);
    });

});