import { assert } from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/registration';
import exp from '../../../expected/registration';
import data from "../../../data/registration";

describe('Steps to reproduce', function () {

    it('Text area accept any text', function () {
        assert.isTrue(help.randomText(sel.text));
    });

    it('Text area accept any text', function () {
        help.openRegistration();
        help.registration();
        help.fieldClear(sel.firstName);
        $(sel.firstName).addValue(data.maxNameLength);
        $(sel.registerMe).click();
        let newPage = $(sel.newBugButton);
        newPage.waitForDisplayed(5000);
        assert.isTrue(help.isVisible(sel.newBugButton));
    });