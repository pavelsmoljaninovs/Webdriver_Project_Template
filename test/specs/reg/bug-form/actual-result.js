import {assert} from 'chai';
import sel from '../../../selectors/bug-form';
import exp from '../../../expected/bug-form';
import help from '../../../helpers/helpers';

describe('actual result', function () {

    it('Font Family', function () {
        help.login();
        $(sel.newBug).click();
        let element = $(sel.actualResult);
        let fontFamily = element.getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Font Size', function () {
        $(sel.newBug).click();
        let element = $(sel.actualResult);
        let fontSize = element.getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Font Weight', function () {
        $(sel.newBug).click();
        let element = $(sel.actualResult);
        let fontWeight = element.getCSSProperty('font-Weight').value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        $(sel.newBug).click();
        let element = $(sel.actualResult);
        let fieldFontColor = element.getCSSProperty('color').parsed.hex;
        assert.equal(fieldFontColor, exp.fieldFontColor);
    });

    it('text align', function () {
        $(sel.newBug).click();
        let element = $(sel.actualResult);
        let fieldTextAlign = element.getCSSProperty('text-align').value;
        assert.equal(fieldTextAlign, exp.fieldTextAlign);
    });
});