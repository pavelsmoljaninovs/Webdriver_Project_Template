import { assert } from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/forgot-password';
import exp from '../../../expected/forgot-password';
import loginData from "../../../data/login";
import forgot from '../../../helpers/forgot-password'


describe('Back button', function () {
    it('Back button returns to previous page', function () {
        forgot.openForgotPass();
        $(sel.backButton).click();
        let actualUrl = browser.getUrl();
        assert.equal(actualUrl, forgot.baseURL());

    });
});

describe('Email', function () {
    it('Email field accepts 1 symbol', function () {
        forgot.openForgotPass();
        let actual = help.maxInput(sel.email, exp.minEmailLength);
        assert.equal(actual, exp.minEmailLength);

    });


    it('Email field accepts 20 symbols', function () {
        forgot.openForgotPass();
        let actual = help.maxInput(sel.email, exp.middleEmailLength);
        assert.equal(actual, exp.middleEmailLength);

    });

    it('Email field accepts 45 symbols', function () {
        forgot.openForgotPass();
        let actual = help.maxInput(sel.email, exp.maxEmailLength);
        assert.equal(actual, exp.maxEmailLength);

    });

    it('Email does not exists error message appears with the proper text', function () {
        forgot.openForgotPass();
        help.fieldClear(sel.email);
        $(sel.remindPass).click();
        let actual = $(sel.errorMessage).getText();
        assert.equal(actual, exp.noEmailErrorMessage);
    });

    it('Email is not registered error message appears with the proper text', function () {
        forgot.openForgotPass();
        help.randomEmail(sel.email);
        $(sel.remindPass).click();
        let actual = $(sel.errorMessage).getText();
        assert.equal(actual, exp.notRegisteredEmailMessage);
    });

    it('Email is registered message appears with the proper text', function () {
        forgot.openForgotPass();
        $(sel.email).setValue(loginData.email);
        $(sel.remindPass).click();
        let actual = $(sel.errorMessage).getText();
        assert.equal(actual, exp.registeredEmailMessage);
    });

    it('Email is registered message disappears within 5 seconds', function () {
        forgot.openForgotPass();
        $(sel.email).setValue(loginData.email);
        $(sel.remindPass).click();
        let messageDisappears = $(sel.errorMessage).waitForDisplayed(5000, undefined, true);
        assert.isTrue(messageDisappears);
        });

});
