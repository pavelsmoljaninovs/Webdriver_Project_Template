import {assert} from 'chai';
import sel from '../../../selectors/filter-bar';
import help from '../../../helpers/helpers';
import filter from '../../../helpers/filter-bar';

describe('One filter is set', function () {

    it('Open', function () {
        help.login();
        $(sel.btnOpen).click();
        browser.waitUntil(() => {
            return $(sel.closed).isDisplayed() === false;
        }, 2000, "Error: Filter Open doesn't work");
    });

    it('Assign to me', function () {
        filter.clickAndWait($(sel.btnAll));
        filter.clickAndWait($(sel.btnToMe));
        let listSize = $$(sel.tblRows)['length'];
        assert.isTrue(filter.isFilterCorrect(listSize));
    });

    it('Closed', function () {
        filter.clickAndWait($(sel.btnAll));
        filter.clickAndWait($(sel.btnClosed));
        let openStatuses = $(sel.open).isDisplayed();
        assert.isFalse(openStatuses);
    });
});

describe('Two filters are set', function () {

    it('Assigned to me + Open', function () {
        filter.clickAndWait($(sel.btnAll));
        filter.clickAndWait($(sel.btnToMe));
        filter.clickAndWait($(sel.btnOpen));
        let listSize = $$(sel.tblRows)['length'];
        let closedStatuses = $(sel.closed).isDisplayed();
        assert.isTrue(filter.isFilterCorrect(listSize, closedStatuses));
    });

    it('Assign to me + Closed', function () {
        filter.clickAndWait($(sel.btnAll));
        filter.clickAndWait($(sel.btnToMe));
        filter.clickAndWait($(sel.btnClosed));
        let listSize = $$(sel.tblRows)['length'];
        let openStatuses = $(sel.open).isDisplayed();
        assert.isTrue(filter.isFilterCorrect(listSize, openStatuses));
    });

    it('Open + Assigned to me', function () {
        filter.clickAndWait($(sel.btnAll));
        filter.clickAndWait($(sel.btnOpen));
        filter.clickAndWait($(sel.btnToMe));
        let listSize = $$(sel.tblRows)['length'];
        let closedStatuses = $(sel.closed).isDisplayed();
        assert.isTrue(filter.isFilterCorrect(listSize, closedStatuses));
    });

    it('Open + Closed', function () {
        filter.clickAndWait($(sel.btnAll));
        filter.clickAndWait($(sel.btnOpen));
        filter.clickAndWait($(sel.btnClosed));
        let emptyList = $(sel.tblRows).$(sel.tblEmpty).isDisplayed();
        assert.isTrue(emptyList);
    });

    it('Closed + Assign to me', function () {
        filter.clickAndWait($(sel.btnAll));
        filter.clickAndWait($(sel.btnClosed));
        filter.clickAndWait($(sel.btnToMe));
        let listSize = $$(sel.tblRows)['length'];
        let openStatuses = $(sel.open).isDisplayed();
        assert.isTrue(filter.isFilterCorrect(listSize, openStatuses));
    });

    it('Closed + Open', function () {
        filter.clickAndWait($(sel.btnAll));
        filter.clickAndWait($(sel.btnClosed));
        filter.clickAndWait($(sel.btnOpen));
        let emptyList = $(sel.tblRows).$(sel.tblEmpty).isDisplayed();
        assert.isTrue(emptyList);
    });
});