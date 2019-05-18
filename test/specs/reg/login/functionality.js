import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/login';
import exp from '../../../expected/login';
import data from '../../../data/login';

describe('Email field', function () {

    it('Min Characters', function () {
        browser.url('/');
        $(sel.email).addValue('W');
        $(sel.login).click();
        let error = $(sel.error).getText();
        assert.equal(error, exp.errorLogin);
    });

    it('Max Characters', function () {
        let actual = help.maxInput(sel.email, exp.maxLength);
        assert.equal(actual, exp.maxLength);
    });

    it('Max Characters + 1', function () {
        let actual = help.maxInput(sel.email, exp.maxLength + 1);
        assert.equal(actual, exp.maxLength);
    });

    it('Empty email', function () {
        $(sel.login).click();
        let actual = $(sel.error).getText();
        assert.equal(actual, exp.errorLogin);
    });

    it('Unregistrated Email', function () {
        help.randomEmail(sel.email);
        help.randomPassword(sel.password);
        $(sel.login).click();
        let actual = $(sel.error).getText();
        assert.equal(actual, exp.errorLogin);
    });

    describe('Password field', function () {
        it('Min Characters', function () {
            browser.url('/');
            $(sel.email).addValue(data.email);
            let actual = help.maxInput(sel.password, exp.passwordMinLength);
            help.fieldClear(sel.email);
            assert.equal(actual, exp.passwordMinLength);
        });

        it('Max Characters', function () {
            $(sel.email).addValue(data.email);
            let actual = help.maxInput(sel.password, exp.maxLength);
            help.fieldClear(sel.email);
            assert.equal(actual, exp.maxLength);
        });

        it('Max Characters + 1', function () {
            $(sel.email).addValue(data.email);
            let actual = help.maxInput(sel.password, exp.maxLength + 1);
            help.fieldClear(sel.email);
            assert.equal(actual, exp.maxLength);
        });

        it('Password field is empty', function () {
            $(sel.email).addValue(data.email);
            $(sel.login).click();
            let actual = $(sel.error).getText();
            help.fieldClear(sel.email);
            help.fieldClear(sel.password);
            assert.equal(actual, exp.errorLogin);
        });

        it('Password is incorrect', function () {
            $(sel.email).addValue(data.email);
            $(sel.password).addValue(data.pass + 1);
            $(sel.login).click();
            let actual = $(sel.error).getText();
            help.fieldClear(sel.email);
            help.fieldClear(sel.password);
            assert.equal(actual, exp.errorLogin);
        });

        it('Password is replaced by bullets', function () {
            $(sel.password).addValue(data.pass);
            let actual = $(sel.password).getCSSProperty('display').value;
            assert.equal(actual, exp.passwordDisplay);
        });

    });
});
