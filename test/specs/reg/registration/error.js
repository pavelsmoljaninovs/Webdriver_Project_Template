import { assert } from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/registration';
import selI from '../../../selectors/filter-bar';
import selL from '../../../selectors/login';
import exp from '../../../expected/registration';
import loginData from '../../../data/login';
import regData from "../../../data/registration";

describe('Error', function () {

    it('Verify that background color', function () {
        help.openRegistration();
        $(sel.firstName).addValue(regData.firstName);
        $(sel.lastName).addValue(regData.lastName);
        $(sel.email).addValue(loginData.email);
        $(sel.confirmEmail).addValue(loginData.email);
        $(sel.password).addValue(loginData.pass);
        $(sel.confirmPassword).addValue(loginData.pass);
        $(sel.registerMe).click();
        let actual = $(sel.error).getCSSProperty('background-color').parsed.hex;
        assert.equal(actual, exp.backgroundColor);
    });

    it('Veriify that border color', function () {
        help.openRegistration();
        $(sel.firstName).addValue(regData.firstName);
        $(sel.lastName).addValue(regData.lastName);
        $(sel.email).addValue(loginData.email);
        $(sel.confirmEmail).addValue(loginData.email);
        $(sel.password).addValue(loginData.pass);
        $(sel.confirmPassword).addValue(loginData.pass);
        $(sel.registerMe).click();
        let actual = $(sel.error).getCSSProperty('border-color').parsed.hex;
        assert.equal(actual, exp.borderColor);
    });

    it('Verify that font family', function () {
        help.openRegistration();
        $(sel.firstName).addValue(regData.firstName);
        $(sel.lastName).addValue(regData.lastName);
        $(sel.email).addValue(loginData.email);
        $(sel.confirmEmail).addValue(loginData.email);
        $(sel.password).addValue(loginData.pass);
        $(sel.confirmPassword).addValue(loginData.pass);
        $(sel.registerMe).click();
        let actual = $(sel.error).getCSSProperty('font-family').value;
        assert.equal(actual, exp.fontFamily);
    });

    it('Verify that font size', function () {
        help.openRegistration();
        $(sel.firstName).addValue(regData.firstName);
        $(sel.lastName).addValue(regData.lastName);
        $(sel.email).addValue(loginData.email);
        $(sel.confirmEmail).addValue(loginData.email);
        $(sel.password).addValue(loginData.pass);
        $(sel.confirmPassword).addValue(loginData.pass);
        $(sel.registerMe).click();
        let actual = $(sel.error).getCSSProperty('font-size').value;
        assert.equal(actual, exp.fontSize);
    });

    it('Verify that font weight:', function () {
        help.openRegistration();
        $(sel.firstName).addValue(regData.firstName);
        $(sel.lastName).addValue(regData.lastName);
        $(sel.email).addValue(loginData.email);
        $(sel.confirmEmail).addValue(loginData.email);
        $(sel.password).addValue(loginData.pass);
        $(sel.confirmPassword).addValue(loginData.pass);
        $(sel.registerMe).click();
        let actual = $(sel.error).getCSSProperty('font-weight').value;
        assert.equal(actual, exp.fontWeight);
    });

    it('Verify that font color:', function () {
        help.openRegistration();
        $(sel.firstName).addValue(regData.firstName);
        $(sel.lastName).addValue(regData.lastName);
        $(sel.email).addValue(loginData.email);
        $(sel.confirmEmail).addValue(loginData.email);
        $(sel.password).addValue(loginData.pass);
        $(sel.confirmPassword).addValue(loginData.pass);
        $(sel.registerMe).click();
        let actual = $(sel.error).getCSSProperty('color').parsed.hex;
        assert.equal(actual, exp.erFontColor);
    });

    it('Verify that align:', function () {
        help.openRegistration();
        $(sel.firstName).addValue(regData.firstName);
        $(sel.lastName).addValue(regData.lastName);
        $(sel.email).addValue(loginData.email);
        $(sel.confirmEmail).addValue(loginData.email);
        $(sel.password).addValue(loginData.pass);
        $(sel.confirmPassword).addValue(loginData.pass);
        $(sel.registerMe).click();
        let actual = $(sel.error).getCSSProperty('text-align').value;
        console.log(actual)
        browser.pause(1000);
        assert.equal(actual, exp.align);
    });
    it('Successfully registration', function () {
        help.openRegistration();
        $(sel.firstName).addValue(help.makeName(5))
        $(sel.lastName).addValue(help.makeName(6))
        help.randomEmail(sel.email);
        $(sel.confirmEmail).addValue($(sel.email).getValue());
        help.randomPassword(sel.password);
        $(sel.confirmPassword).addValue($(sel.password).getValue());
        $(sel.registerMe).click();
        //let actual = $(sel.error).getText();
        $(selI.btnToMe).waitForDisplayed(2000);
        let actual = $(selI.btnToMe).isExisting()
        assert.equal(actual, true);
    });

    it('Return to login page', function () {
        help.openRegistration();
        $(sel.backButton).click();
        $(selL.login).waitForDisplayed(2000);
        let actual = $(selL.login).isExisting()
        assert.equal(actual, true);
    });

});
