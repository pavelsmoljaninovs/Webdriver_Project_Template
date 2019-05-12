import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/registration';
import exp from '../../../expected/registration';

describe('Email field', function () {

    it('Placeholder text', function () {
        help.registration();
        let text = $('#email').getAttribute('placeholder');
        assert.equal(text, exp.placeholder);
    });

    it('Max Characters', function () {
        help.maxInputEmailPass(sel.email, exp.maxLength)
    });

    it('Max Characters + 1', function () {
        let input = $('#email');
        input.addValue('j'.repeat(maxLenght + 1));
        let actual = input.getValue().length;
        assert.equal(actual, maxLenght);
    });

    it('Font size', function () {
        let text = $('#email').getCSSProperty('font-size').value;
        assert.equal(text, '16px');
    });

    it('Font weight', function () {
        let text = $('#email').getCSSProperty('font-weight').value;
        console.log(text);
        assert.equal(text, '400');
    });

    it('Font family', function () {
        let text = $('#email').getCSSProperty('font-family').value;
        console.log(text);
        assert.equal(text, 'segoe ui');
    });

    it('Font color', function () {
        let text = $('#email').getCSSProperty('color').parsed.hex;
        console.log(text);
        assert.equal(text, '#495057');
    });

    it('Box shadow', function () {
        let text = $('#email').getCSSProperty('box-shadow').parsed.hex;
        console.log(text);
        assert.equal(text, '#007bff');
    });

});
