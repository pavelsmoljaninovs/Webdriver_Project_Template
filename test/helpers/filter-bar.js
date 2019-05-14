import exp from "../expected/filter-bar";
import sel from "../selectors/filter-bar";

class FilterBar {

    isFilterCorrect (listSize, excludeStatuses){
        let testPass = true;
        if (excludeStatuses) {
            testPass = false;
        } else{
            for (let i = 1; i < listSize; i++) {
                let assignee = $('.table tbody tr:nth-child(' + i + ')').$(sel.clmnAssignee).getText();
                if (assignee !== exp.assignee) {
                    testPass = false;
                }
            }
        }
        return testPass;
    }

    clickAndWait(selector){
        selector.click();
        browser.pause(500);
    }
}

export default new FilterBar()