import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report';
import help from '../../../helpers/helpers';

describe('Titles', function () {

    it('Font Weight', function () {
        help.login();
        $(sel.tblRow).click();
        $(sel.edit).waitForDisplayed(2000);
        let testPass = true;
        for (let i = 0; i < sel.sections.length; i++) {
            let text = $(sel.sections[i]).$(sel.titleText);
            let fontWeight = text.getCSSProperty('font-weight').value;
            if (fontWeight !== exp.titleFontWeight) {
                testPass = false;
            }
        }
        assert.isTrue(testPass);
    });

    it('Font Family', function () {
        let testPass = true;
        for (let i = 0; i < sel.sections.length; i++) {
            let text = $(sel.sections[i]).$(sel.titleText);
            let fontFamily = text.getCSSProperty('font-family').value;
            if (fontFamily !== exp.titleFontFamily) {
                testPass = false;
            }
        }
        assert.isTrue(testPass);
    });

    it('Font Size', function () {
        let testPass = true;
        for (let i = 0; i < sel.sections.length; i++) {
            let text = $(sel.sections[i]).$(sel.titleText);
            let fontSize = text.getCSSProperty('font-size').value;
            if (fontSize !== exp.titleFontSize) {
                testPass = false;
            }
        }
        assert.isTrue(testPass);
    });

    it('Font Color', function () {
        let testPass = true;
        for (let i = 0; i < sel.sections.length; i++) {
            let text = $(sel.sections[i]).$(sel.titleText);
            let fontColor = text.getCSSProperty('color').parsed.hex;
            if (fontColor !== exp.titleFontColor) {
                testPass = false;
            }
        }
        assert.isTrue(testPass);
    });
});

describe('Values', function () {

    it('Font Weight', function () {
        let testPass = true;
        for (let i = 1; i < sel.sections.length; i++) {
            let text = $(sel.sections[i]).$(sel.valueText);
            let fontWeight = text.getCSSProperty('font-weight').value;
            if (fontWeight !== exp.valueFontWeight) {
                testPass = false;
            }
        }
        assert.isTrue(testPass);
    });

    it('Font Family', function () {
        let testPass = true;
        for (let i = 1; i < sel.sections.length; i++) {
            let text = $(sel.sections[i]).$(sel.valueText);
            let fontFamily = text.getCSSProperty('font-family').value;
            if (fontFamily !== exp.valueFontFamily) {
                testPass = false;
            }
        }
        assert.isTrue(testPass);
    });

    it('Font Size', function () {
        let testPass = true;
        for (let i = 1; i < sel.sections.length; i++) {
            let text = $(sel.sections[i]).$(sel.valueText);
            let fontSize = text.getCSSProperty('font-size').value;
            if (fontSize !== exp.valueFontSize) {
                testPass = false;
            }
        }
        assert.isTrue(testPass);
    });

    it('Font Color', function () {
        let testPass = true;
        for (let i = 1; i < sel.sections.length; i++) {
            let text = $(sel.sections[i]).$(sel.valueText);
            let fontColor = text.getCSSProperty('color').parsed.hex;
            if (fontColor !== exp.valueFontColor) {
                testPass = false;
            }
        }
        assert.isTrue(testPass);
    });
});