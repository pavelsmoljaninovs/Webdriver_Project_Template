import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-form';
import exp from '../../../expected/bug-form';


describe('Expected result', function () {

    it('Font Family', function () {
        help.login();
        $(sel.btnNewBug).click();
        let actual = $(sel.expectedField).getCSSProperty('font-family').value;
        console.log(actual);
        assert.equal(actual, exp.fontFamily);
    });

    it('Font Size', function () {
        let actual = $(sel.expectedField).getCSSProperty('font-size').parsed.value;
        assert.equal(actual, exp.fontSize);
    });

    it('Font Weight', function () {
        let actual = $(sel.expectedField).getCSSProperty('font-weight').value;
        assert.equal(actual, exp.fontWeight);
    });

    it('Font Color', function () {
        let actual = $(sel.expectedField).getCSSProperty('color').parsed.hex;
        assert.equal(actual, exp.fieldFontColor);
    });

    it('Text align', function () {
        let actual = $(sel.expectedField).getCSSProperty('text-align').value;
        assert.equal(actual, exp.fieldTextAlign);
    });

});