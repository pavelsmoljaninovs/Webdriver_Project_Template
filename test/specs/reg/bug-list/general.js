import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-list';
import exp from '../../../expected/bug-list';

describe('general', function () {

    it('first column name', function () {
        help.login();
        let element = $(sel.summaryColumn).getText();
        assert.equal(element, exp.firstTableColumnName);
    });

    it('second column name', function () {
        let element = $(sel.priorityColumn).getText();
        assert.equal(element, exp.secondTableColumnName);
    });

    it('third column name', function () {
        let element = $(sel.statusColumn).getText();
        assert.equal(element, exp.thirdTableColumnName);
    });

    it('fourth column name', function () {
        let element = $(sel.assigneeColumn).getText();
        assert.equal(element, exp.fourthTableColumnName);
    });

    it('text align', function () {
        let element = $(sel.priorityColumn).getCSSProperty('text-align').value;
        assert.equal(element, exp.textAlignCenter);
    });

    it('font weight', function () {
        let element = $(sel.priorityColumn).getCSSProperty('font-weight').value;
        assert.equal(element, exp.fontWeightBold);
    });

    it('font family', function () {
        let element = $(sel.priorityColumn).getCSSProperty('font-family').value;
        assert.equal(element, exp.fontFamily);
    });

    it('font size', function () {
        let element = $(sel.priorityColumn).getCSSProperty('font-size').value;
        assert.equal(element, exp.fontSizeLarge);
    });

    it('font color', function () {
        let element = $(sel.priorityColumn).getCSSProperty('color').parsed.hex;
        assert.equal(element, exp.colorDark);
    });

});
