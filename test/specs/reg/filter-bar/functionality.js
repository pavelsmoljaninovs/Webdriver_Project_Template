import {assert} from 'chai';
import sel from '../../../selectors/filter-bar';
import help from '../../../helpers/helpers';
import filter from '../../../helpers/filter-bar';

let testPassed;

describe('One filter is set', function () {

    it('Open', function () {
        help.login();
        $(sel.btnOpen).click();
        browser.waitUntil(() => {
            return $(sel.closed).isDisplayed() === false;
        }, 2000, "Error: filter doesn't work");
    });

    it('Closed', function () {
        filter.resetAll($(sel.closed));
        $(sel.btnClosed).click();
        browser.waitUntil(() => {
            return $(sel.open).isDisplayed() === false;
        }, 2000, "Error: filter doesn't work");
    });

    it('Assign to me', function () {
        filter.resetAll($(sel.open));
        filter.setToMe();
        let listSize = $$(sel.tblRows)['length'];
        assert.isTrue(filter.isFilterCorrect(listSize), "Error: filter doesn't work");
    });
});

describe('Two filters are set', function () {

    it('Assigned to me + Open', function () {
        filter.setOpen();
        let listSize = $$(sel.tblRows)['length'];
        testPassed = filter.isFilterCorrect(listSize, $(sel.closed));
        assert.isTrue(testPassed, "Error: filter doesn't work");
    });

    it('Assign to me + Closed', function () {
        filter.resetAll($(sel.closed));
        filter.setToMe();
        filter.setClosed();
        let listSize = $$(sel.tblRows)['length'];
        testPassed = filter.isFilterCorrect(listSize, $(sel.open));
        assert.isTrue(testPassed, "Error: filter doesn't work");
    });

    it('Open + Assigned to me', function () {
        filter.resetAll($(sel.open));
        filter.setOpen();
        filter.setToMe();
        let listSize = $$(sel.tblRows)['length'];
        testPassed = filter.isFilterCorrect(listSize, $(sel.closed));
        assert.isTrue(testPassed, "Error: filter doesn't work");
    });

    it('Open + Closed', function () {
        filter.resetAll($(sel.closed));
        filter.setOpen();
        $(sel.btnClosed).click();
        browser.waitUntil(() => {
            let emptyList = $(sel.tblRows).$(sel.tblEmpty);
            return emptyList.isDisplayed();
        }, 2000, "Error: filter doesn't work");
    });

    it('Closed + Assign to me', function () {
        filter.resetAll($(sel.closed));
        filter.setClosed();
        filter.setToMe();
        let listSize = $$(sel.tblRows)['length'];
        testPassed = filter.isFilterCorrect(listSize, $(sel.open));
        assert.isTrue(testPassed, "Error: filter doesn't work");
    });

    it('Closed + Open', function () {
        filter.resetAll($(sel.open));
        filter.setClosed();
        $(sel.btnOpen).click();
        browser.waitUntil(() => {
            let emptyList = $(sel.tblRows).$(sel.tblEmpty);
            return emptyList.isDisplayed();
        }, 2000, "Error: filter doesn't work");
    });
});