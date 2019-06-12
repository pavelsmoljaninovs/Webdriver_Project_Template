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

    badgeBackgroundColor(){
        return $(sel.statusBadgeEl).getCSSProperty('background-color').parsed.hex;
    }

    badgeFontColor(){
       return $(sel.statusBadgeEl).getCSSProperty('color').parsed.hex;
    }
}

export default new BugReport()