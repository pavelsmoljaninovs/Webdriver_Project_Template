import {assert} from 'chai';
import sel from '../../../selectors/bug-form-functionality';
import exp from '../../../expected/bug-form-functionality';
import help from '../../../helpers/helpers';
import bform from '../../../helpers/bug-form-functionality';
import data from '../../../data/bug-form-functionality.js';


describe('Functionality of drop-down lists ', function () {

    it('Verify that Severity drop-down placeholder is correct', function () {
        help.login();
        $(sel.newBug).click();
        let severity = $(sel.severity).getText();
        assert.equal(severity, exp.severity);
    });

    it('Verify contains of Severity drop-down list', function () {
        let severity = $(sel.severity);
        severity.click();
        let severityAtr = $(sel.severityButtonOpen);
        let divs = severityAtr.$$('div');
        const arrayDiv = divs.map(div => div.getText());
        assert.deepEqual(arrayDiv, exp.severityList);
    });

    it('Verify that Assignee drop-down placeholder is correct', function () {
        let assignee = $(sel.assignee).getText();
        assert.equal(assignee, exp.assignee);
    });

    it('Verify that Priority drop-down placeholder is correct', function () {
        let priority = $(sel.priority).getText();
        assert.equal(priority, exp.priority);
    });

    it('Verify contains of Priority drop-down list', function () {
        let priority = $(sel.priority);
        priority.click();
        let priorityAtr = $(sel.priorityButtonOpen);
        let divs = priorityAtr.$$('div');
        const arrayDiv = divs.map(div => div.getText());
        assert.deepEqual(arrayDiv, exp.priorityList);
    });

    it('Verify that Repro drop-down placeholder is correct', function () {
        let repro = $(sel.repro).getText();
        assert.equal(repro, exp.repro);
    });

    it('Verify contains of Repro drop-down list', function () {
        let priority = $(sel.priority);
        priority.click();
        let repro = $(sel.repro);
        repro.click();
        let reproAtr = $(sel.reproButtonOpen);
        let divs = reproAtr.$$('div');
        const arrayDiv = divs.map(div => div.getText());
        assert.deepEqual(arrayDiv, exp.reproList);
    });

});

describe('Functionality of Clear and Submit buttons', function () {
    
    it('Clear form button clears the bug form', function() {
        help.login();
        $(sel.newBug).click();
        $(sel.summaryField).waitForDisplayed(data.waitForDisplayedTimeout);
        bform.fillFieldsAndDropDownsInBugForm(sel.arrayFields(), sel.arrayDropDown());
        let arrayFields = sel.arrayFields().map(str => $(str));
        let arrayDropDown = sel.arrayDropDown().map(str => $(str));
        $(sel.clear).click();
        let fieldsValues = arrayFields.every(field => field.getValue() === "");
        let dropDownValues = arrayDropDown.every(field => field.getValue() === null);
        assert.equal(fieldsValues, true);
        assert.equal(dropDownValues, true);
    });

    it('Bug Report page is opened after submitting a bug', function() {
        bform.fillFieldsAndDropDownsInBugForm(sel.arrayFields(), sel.arrayDropDown());
        $(sel.submit).click();
        $(sel.openButton).waitForDisplayed(data.waitForDisplayedTimeout);
        let openButton = $(sel.openButton).isDisplayed();
        assert.isTrue(openButton);
    });

    it('Submit button adds new bug with specified values to the system', function() {
        $(sel.newBug).click();
        $(sel.summaryField).waitForDisplayed(data.waitForDisplayedTimeout);
        bform.fillFieldsAndDropDownsInBugForm(sel.arrayFields(), sel.arrayDropDown());
        let summary= $(sel.summaryField).getValue();
        let priority = $(sel.priority).getText();
        let assignee = $(sel.assignee).getText();
        $(sel.submit).click();
        $(sel.openButton).waitForDisplayed(data.waitForDisplayedTimeout);
        $(sel.allIssues).click();
        $(sel.bugSummary).waitForDisplayed(data.waitForDisplayedTimeout);
        assert.equal($(sel.bugSummary).getText(), summary);
        assert.equal($(sel.bugPriority).getText(), priority);
        assert.equal($(sel.bugStatus).getText(), exp.status);
        assert.equal($(sel.bugAssignee).getText(), assignee);
    });
});

describe('Functionality of version text field', function () {

    it('Version field accepts any characters', function () {
        help.login();
        $(sel.newBug).click();
        let version = $(sel.versionField);
        version.setValue(data.supportedCharacters);
        assert.equal(version.getValue(), data.supportedCharacters);
    });
    
    it('Version field is always a single line', function () {
        let version = $(sel.versionField);
        let randomWithBreak = bform.generateRandomStringWithBreak(data.maxStringLength, data.supportedCharacters);
        version.setValue(randomWithBreak);
        assert.equal(version.getValue().includes('/\r\n/'), false);
    });
    
    it('Version field accepts not more than max characters', function () {
        let version = $(sel.versionField);
        let randomString = bform.generateRandomString(data.maxStringLength + 1, data.supportedCharacters);
        version.setValue(randomString);
        assert.equal(version.getValue(), randomString.substr(0,data.maxStringLength));
    });
    
});