import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/registration';
import exp from '../../../expected/registration';

describe('Email field', function () {

    it('Placeholder text', function () {
        help.openRegistration();
        let actual = $(sel.email).getAttribute('placeholder');
        assert.equal(actual, exp.placeholder);
    });

    it('Max Characters', function () {
        let actual = help.maxInput(sel.email, exp.maxLength);
        assert.equal(actual, exp.maxLength);
    });

    it('Max Characters + 1', function () {
        let actual = help.moreMaxInput(sel.email, exp.maxLength);
        assert.equal(actual, exp.maxLength);
    });

    it('Font size', function () {
        let actual = $(sel.email).getCSSProperty('font-size').value;
        assert.equal(actual, exp.fontSize);
    });

    it('Font weight', function () {
        let actual = $(sel.email).getCSSProperty('font-weight').value;
        assert.equal(actual, exp.fontWeight);
    });

    it('Font family', function () {
        let actual = $(sel.email).getCSSProperty('font-family').value;
        assert.equal(actual, exp.fontFamily);
    });

    it('Font color', function () {
        let actual = $(sel.email).getCSSProperty('color').parsed.hex;
        assert.equal(actual, exp.fontColor);
    });

    it('Box shadow', function () {
        $(sel.email).addValue('S');
        let actual = $(sel.email).getCSSProperty('box-shadow').parsed.hex;
        $(sel.email).clearValue();
        assert.equal(actual, exp.shadowColor);
    });

});
