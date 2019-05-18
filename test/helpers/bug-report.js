import sel from "../selectors/bug-report";

class BugReport {

    checkProperty(selectorsArr, propertyName, expectedValue) {
        let arrBugs = [];
        let propertyValue;
        for (let title of selectorsArr) {
            let text = $(title).$(sel.titleText);
            if (propertyName === 'color') {
                propertyValue = text.getCSSProperty(propertyName).parsed.hex;
            } else {
                propertyValue = text.getCSSProperty(propertyName).value;
            }
            if (propertyValue !== expectedValue) {
                arrBugs.push(title);
            }
        }
        return arrBugs;
    }
}

export default new BugReport()