import {assert} from "chai";
import sel from "../../../selectors/login";
import exp from "../../../expected/login";

describe('Forgot Password link', function () {

    it('Link name', function () {
        browser.url('/');
        let forgotPas = $(sel.forgotPassword);
        let linkName = forgotPas.getText('.button_submit');
        assert.equal(linkName, exp.forgotPasswordLinkLinkName);
    });

    it('"Forgot Password link" is displayed ', function () {
        let forgotPas = $(sel.forgotPassword);
        let actual = forgotPas.isDisplayed();
        assert.equal(actual, true);
    });

    it('Link type', function () {
        let forgotPas = $(sel.forgotPassword);
        let linkType = forgotPas.getAttribute('class');
        assert.equal(linkType, exp.forgotPasswordLinkLinkType);
    });

    it('Font Color', function () {
        let forgotPas = $(sel.forgotPassword);
        let fontColor = forgotPas.getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.forgotPasswordLinkColor);
    });

    it('Text-decoration is underline', function () {
        let forgotPas = $(sel.forgotPassword);
        forgotPas.moveTo();
        let textDecor = forgotPas.getCSSProperty('text-decoration-line').value;
        assert.equal(textDecor, exp.forgotPasswordLinkTextDecoration);
    });

    it('After clik, open page "Forgot Password" ', function () {
        let forgotPas = $(sel.forgotPassword);
        forgotPas.click();
        let actual = $('#remind').isDisplayed();
        assert.equal(actual, true);
    });

});
