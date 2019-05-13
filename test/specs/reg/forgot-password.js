import { assert } from 'chai';
import exp from '../../expected/forgot-password';

//Forgot password back button tests

describe('Forgot Password Back Button', function () {

    it('Back Button Text Font Size', function () {
        browser.url('/');
        $('#forgot').click();
        let backButton = $('#back');
        let fontSize = backButton.getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.fontSize);
    });

    it('Back Button Text Font Weight', function () {
        browser.url('/');
        $('#forgot').click();
        let backButton = $('#back');
        let fontWeight = backButton.getCSSProperty('font-weight').parsed.value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Back Button Text Font Family', function () {
        browser.url('/');
        $('#forgot').click();
        let backButton = $('#back');
        let fontFamily = backButton.getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fontFamily);
    });

    it('Back Button Text Font Color', function () {
        browser.url('/');
        $('#forgot').click();
        let backButton = $('#back');
        let fontColor = backButton.getCSSProperty('color').parsed.hex;
        console.log(fontColor);
        assert.equal(fontColor, exp.fontColor);
    });

    it('Back Button Color', function () {
        browser.url('/');
        $('#forgot').click();
        let backButton = $('#back');
        let buttonColor = backButton.getCSSProperty('background-color').parsed.hex;
        console.log(buttonColor);
        assert.equal(buttonColor, exp.buttonColor);
    });

});


