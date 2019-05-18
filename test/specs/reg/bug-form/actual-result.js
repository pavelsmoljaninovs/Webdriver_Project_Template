import { assert } from 'chai';
import sel from '../../../selectors/bug-form';
import exp from '../../../expected/bug-form';
import help from "../../../helpers/helpers";

describe('actual result', function () {

    it('Font Family', function () {
        help.login();
        $(sel.newBug).click();
        let element = $(sel.actualField);
        let fieldFontFamily = element.getCSSProperty('font-family').value;
        assert.equal(fieldFontFamily, exp.fieldFontFamily);
    });

    it('Font Size', function () {
        help.login();
        $(sel.newBug).click();
        let element = $(sel.actualField);
        let fieldFontSize = element.getCSSProperty('font-size').value;
        assert.equal(fieldFontSize, exp.fieldFontSize);
    });

    it('Font Weight', function () {
        help.login();
        $(sel.newBug).click();
        let element = $(sel.actualField);
        let fieldFontWeight = element.getCSSProperty('font-Weight').value;
        assert.equal(fieldFontWeight, exp.fieldFontWeight);
    });

    it('Font Color', function () {
        help.login();
        $(sel.newBug).click();
        let element = $(sel.actualField);
        let fieldFontColor = element.getCSSProperty('color').parsed.hex;
        assert.equal(fieldFontColor, exp.fieldFontColor);
    });

    it('text align', function () {
        help.login();
        $(sel.newBug).click();
        let element = $(sel.actualField);
        let fieldTextAlign = element.getCSSProperty('text-align').value;
        assert.equal(fieldTextAlign, exp.fieldTextAlign);
    });


});