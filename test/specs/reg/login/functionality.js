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
        let actual = help.maxInput(sel.email, exp.maxLength+1);
        assert.equal(actual, exp.maxLength);
    });

    it('Empty email', function () {
        $(sel.login).click();
        let actual = $(sel.error).getText();
        assert.equal(actual, exp.errorLogin);
    });

    it('Unregistrated Email', function () {
        $(sel.email).addValue(data.unregistratedEmail);
        $(sel.password).addValue(data.pass);
        $(sel.login).click();
        let actual= $(sel.error).getText();
        assert.equal(actual, exp.errorLogin);
    });

});
