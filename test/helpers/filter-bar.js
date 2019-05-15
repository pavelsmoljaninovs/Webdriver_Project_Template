import exp from "../expected/filter-bar";
import sel from "../selectors/filter-bar";

class FilterBar {

    resetAll(returnedStatuses) {
        $(sel.btnAll).click();
        returnedStatuses.waitForDisplayed(2000);
    }

    setToMe() {
        $(sel.btnToMe).click();
        browser.pause(300);
    }

    setOpen() {
        $(sel.btnOpen).click();
        $(sel.closed).waitForDisplayed(2000, true);
    }

    setClosed() {
        $(sel.btnClosed).click();
        $(sel.open).waitForDisplayed(2000, true);
    }

    isFilterCorrect(listSize, excludeStatuses) {
        let testPass = true;
        if (excludeStatuses !== undefined && excludeStatuses.isDisplayed()) {
            testPass = false;
        } else {
            for (let i = 1; i < listSize; i++) {
                let assignee = $('.table tbody tr:nth-child(' + i + ')').$(sel.clmnAssignee).getText();
                if (assignee !== exp.assignee) {
                    testPass = false;
                }
            }
        }
        return testPass;
    }
}

export default new FilterBar()