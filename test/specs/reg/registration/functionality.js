import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/registration';
import exp from '../../../expected/registration';
import data from "../../../data/registration";

describe('Password field', function () {

    it('Fields pass and confirm pass are empty', function () {
        help.openRegistration();
        help.registration();
        help.fieldClear(sel.password);
        help.fieldClear(sel.confirmPassword);
        $(sel.registerMe).click();
        let actual = $(sel.error).getText();
        assert.equal(actual, exp.passwordsEmpty);
    });

    it('Max Characters pass', function () {
        let actual = help.maxInput(sel.password, exp.maxLength);
        assert.equal(actual, exp.maxLength);
    });

    it('Max Characters + 1 pass', function () {
        let actual = help.maxInput(sel.password, exp.maxLength+1);
        assert.equal(actual, exp.maxLength);
    });

    it('Max Characters confirm pass', function () {
        let actual = help.maxInput(sel.confirmPassword, exp.maxLength);
        assert.equal(actual, exp.maxLength);
    });

    it('Max Characters + 1 confirm pass', function () {
        let actual = help.maxInput(sel.confirmPassword, exp.maxLength+1);
        assert.equal(actual, exp.maxLength);
    });

    it('Passwords do not match', function () {
        $(sel.password).addValue(data.password);
        $(sel.confirmPassword).addValue(data.password+'1');
        $(sel.registerMe).click();
        let actual = $(sel.error).getText();
        assert.equal(actual, exp.passwordsDontMatch);
    });

});
