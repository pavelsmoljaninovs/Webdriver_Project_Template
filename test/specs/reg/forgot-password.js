import { assert } from 'chai';
import exp from '../../expected/forgot-password';
import sel from '../../selectors/forgot-password';

//Forgot password back button tests

describe('Forgot Password Back Button', function () {

    it('Back Button Text Font Size', function () {
        browser.url('/');
        $(sel.forgot).click();
        let backButton = $(sel.backButton);
        let fontSize = backButton.getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Back Button Text Font Weight', function () {
        let backButton = $(sel.backButton);
        let fontWeight = backButton.getCSSProperty('font-weight').parsed.value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Back Button Text Font Family', function () {
        let backButton = $(sel.backButton);
        let fontFamily = backButton.getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Back Button Text Font Color', function () {
        let backButton = $(sel.backButton);
        let fontColor = backButton.getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.fontColor);
    });

    it('Back Button Color', function () {
        let backButton = $(sel.backButton);
        let buttonColor = backButton.getCSSProperty('background-color').parsed.hex;
        assert.equal(buttonColor, exp.buttonColor);
    });
});


