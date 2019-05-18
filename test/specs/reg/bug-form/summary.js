import {assert} from 'chai';
import sel from '../../../selectors/bug-form';
import exp from '../../../expected/bug-form';
import help from '../../../helpers/helpers';


describe('Summary', function () {

    it('Font Family', function () {
        help.login();
        $(sel.newBug).click();
        let element = $(sel.summary);
        let fieldFontFamily = element.getCSSProperty('font-family').value;
        assert.equal(fieldFontFamily, exp.fieldFontFamily);
    });

    it('Font Size', function () {
        let element = $(sel.summary);
        let fieldFontSize = element.getCSSProperty('font-size').value;
        assert.equal(fieldFontSize, exp.fieldFontSize);
    });

    it('Font Weight', function () {
        let element = $(sel.summary);
        let fieldFontWeight = element.getCSSProperty('font-weight').value;
        assert.equal(fieldFontWeight, exp.fieldFontWeight);
    });

    it('Font Color', function () {
        let element = $(sel.summary);
        let fieldFontColor = element.getCSSProperty('color').parsed.hex;
        assert.equal(fieldFontColor, exp.fieldFontColor);

    });
    it('Text align', function () {
        let element = $(sel.summary);
        let fieldTextAlign = element.getCSSProperty('text-align').value;
        assert.equal(fieldTextAlign, exp.fieldTextAlign);

    });

});

