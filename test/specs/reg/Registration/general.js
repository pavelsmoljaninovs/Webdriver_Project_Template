import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/registration';
import exp from '../../../expected/registration';

describe('Email field', function () {

    it('Placeholder text', function () {
        help.registration();
        let text = $(sel.email).getAttribute('placeholder');
        assert.equal(text, exp.placeholder);
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
        let text = $(sel.email).getCSSProperty('font-size').value;
        assert.equal(text, '16px');
    });

    it('Font weight', function () {
        let text = $(sel.email).getCSSProperty('font-weight').value;
        console.log(text);
        assert.equal(text, '400');
    });

    it('Font family', function () {
        let text = $(sel.email).getCSSProperty('font-family').value;
        console.log(text);
        assert.equal(text, 'segoe ui');
    });

    it('Font color', function () {
        let text = $(sel.email).getCSSProperty('color').parsed.hex;
        console.log(text);
        assert.equal(text, '#495057');
    });

    it('Box shadow', function () {
        let text = $(sel.email).getCSSProperty('box-shadow').parsed.hex;
        console.log(text);
        assert.equal(text, '#007bff');
    });

});
