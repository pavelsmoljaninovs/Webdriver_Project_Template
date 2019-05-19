import { assert } from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-form';
import exp from '../../../expected/bug-form';

/*
Verify that text Placeholder = Drop-down list name
Verify that list values Assignees list = list of users registered in the system
Verify that list values Priorities list = [ Low, Medium, High ]
Verify that list values Severities list = [ Minor, Major, Critical ]
Verify that list values align: Repro list = [ Always, Sometimes, Once ]
Verify that list values Versions list = list of available app versions
* */

describe('Drop Downs', function () {

    before(function() {
        browser.url('/');
        help.login();
        $('#new_bug').click();
        $(sel.severityDropDown).waitForDisplayed(5000);
    });

    it('Text Placeholder = Drop-down list name: Severity', function () {
        let dropDownText = $(sel.severityDropDown).getText();
        assert.equal(dropDownText, exp.severityDropDownPlaceholder);
    });

    it('Text Placeholder = Drop-down list name: Priority', function () {
        let dropDownText = $(sel.priorityDropDown).getText();
        assert.equal(dropDownText, exp.priorityDropDownPlaceholder);
    });

    it('Text Placeholder = Drop-down list name: Assignee', function () {
        let dropDownText = $(sel.assigneeDropDown).getText();
        assert.equal(dropDownText, exp.assigneeDropDownPlaceholder);
    });

    it('Text Placeholder = Drop-down list name: Repro', function () {
        let dropDownText = $(sel.reproDropDown).getText();
        assert.equal(dropDownText, exp.reproDropDownPlaceholder);
    });

    it('List values Assignees list = List of users registered into the system', function () {
        let dropDownElement = $(sel.priorityDropDown);

    });

    it('List values Priorities list = [ Low, Medium, High ]', function () {
        $(sel.priorityDropDown).click();
        $(sel.priorityDropDownLow).click();
        let dropDownText = $(sel.priorityDropDown).getText();
        assert.equal(dropDownText, exp.priorityDropDownLow);

        $(sel.priorityDropDown).click();
        $(sel.priorityDropDownMedium).click();
        dropDownText = $(sel.priorityDropDown).getText();
        assert.equal(dropDownText, exp.priorityDropDownMedium);

        $(sel.priorityDropDown).click();
        $(sel.priorityDropDownHigh).click();
        dropDownText = $(sel.priorityDropDown).getText();
        assert.equal(dropDownText, exp.priorityDropDownHigh);
    });

    it('List values Severities list = [ Minor, Major, Critical ]', function () {
        $(sel.severityDropDown).click();
        $(sel.severityDropDownMinor).click();
        let dropDownText = $(sel.severityDropDown).getText();
        assert.equal(dropDownText, exp.severityDropDownMinor);

        $(sel.severityDropDown).click();
        $(sel.severityDropDownMajor).click();
        dropDownText = $(sel.severityDropDown).getText();
        assert.equal(dropDownText, exp.severityDropDownMajor);

        $(sel.severityDropDown).click();
        $(sel.severityDropDownCritical).click();
        dropDownText = $(sel.severityDropDown).getText();
        assert.equal(dropDownText, exp.severityDropDownCritical);
    });

    it('List values Repro list = [ Always, Sometimes, Once ]', function () {
        $(sel.reproDropDown).click();
        $(sel.reproDropDownAlways).click();
        let dropDownText = $(sel.reproDropDown).getText();
        assert.equal(dropDownText, exp.reproDropDownAlways);

        $(sel.reproDropDown).click();
        $(sel.reproDropDownSometimes).click();
        dropDownText = $(sel.reproDropDown).getText();
        assert.equal(dropDownText, exp.reproDropDownSometimes);

        $(sel.reproDropDown).click();
        $(sel.reproDropDownOnce).click();
        dropDownText = $(sel.reproDropDown).getText();
        assert.equal(dropDownText, exp.reproDropDownOnce);
    });
});