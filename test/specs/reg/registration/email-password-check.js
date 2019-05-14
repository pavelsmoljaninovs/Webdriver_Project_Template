import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/registration';
import exp from '../../../expected/registration';
import loginData from '../../../data/login';
import regData from "../../../data/registration";

describe('Email and Password Check', function () {

    it('Email Confirmation is Visible', function () {
        help.openRegistration();
        let confirmEmail = $(sel.confirmEmail).isDisplayed();
        assert.isTrue(confirmEmail);
    });

    it('Password Confirmation is Visible', function () {
        let confirmPassword = $(sel.confirmPassword).isDisplayed();
        assert.isTrue(confirmPassword);
    });

    it('Email Confirmation Placeholder', function () {
        let actual = $(sel.confirmEmail).getAttribute('placeholder');
        assert.equal(actual, exp.confirmEmailPlaceholder);
    });

    it('Password Confirmation Placeholder', function () {
        let actual = $(sel.confirmPassword).getAttribute('placeholder');
        assert.equal(actual, exp.confirmPasswordPlaceholder);
    });

    it('Emails match, passwords match, unregistered before user => success registration', function () {
        help.registration();
        $(sel.registerMe).click();
        let newBugButton = $(sel.newBugButton);
        newBugButton.waitForDisplayed(5000);
        assert.isTrue(help.isVisible(sel.newBugButton));
    });

    it('Emails match, passwords match, registered before user => error message', function () {
        $(sel.logOut).click();
        help.openRegistration();
        $(sel.firstName).addValue(regData.firstName);
        $(sel.lastName).addValue(regData.lastName);
        $(sel.email).addValue(loginData.email);
        $(sel.confirmEmail).addValue(loginData.email);
        $(sel.password).addValue(loginData.pass);
        $(sel.confirmPassword).addValue(loginData.pass);
        $(sel.registerMe).click();
        let actual = $(sel.error).getText();
        assert.equal(actual, exp.errorUserExists);
    });

    it('Emails do not match => error message', function () {
        browser.refresh();
        help.openRegistration();
        help.registration();
        help.fieldClear(sel.confirmEmail);
        $(sel.email).addValue(regData.email);
        $(sel.registerMe).click();
        let actual = $(sel.error).getText();
        assert.equal(actual, exp.emailsDontMatch);

    });

    it('Passwords do not match => error message', function () {
        browser.refresh();
        help.openRegistration();
        help.registration();
        help.fieldClear(sel.confirmPassword);
        $(sel.password).addValue(regData.confirmPassword);
        $(sel.registerMe).click();
        let actual = $(sel.error).getText();
        assert.equal(actual, exp.passwordsDontMatch);

    });

});
