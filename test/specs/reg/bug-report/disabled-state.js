import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report';
import help from '../../../helpers/helpers';
import report from '../../../helpers/bug-report';

describe('Titles', function () {

    it('Font Weight', function () {
        help.login();
        $(sel.tblRow).click();
        $(sel.edit).waitForDisplayed(2000);
        let arrBugs = report.checkProperty(sel.sections, 'font-weight', exp.titleFontWeight);
        assert.equal(arrBugs.length, 0, 'Incorrect font weight for titles: ' + arrBugs);
    });

    it('Font Family', function () {
        let arrBugs = report.checkProperty(sel.sections, 'font-family', exp.titleFontFamily);
        assert.equal(arrBugs.length, 0, 'Incorrect font family for titles: ' + arrBugs);
    });

    it('Font Size', function () {
        let arrBugs = report.checkProperty(sel.sections, 'font-size', exp.titleFontSize);
        assert.equal(arrBugs.length, 0, 'Incorrect font size for titles: ' + arrBugs);
    });

    it('Font Color', function () {
        let arrBugs = report.checkProperty(sel.sections, 'color', exp.titleFontColor);
        assert.equal(arrBugs.length, 0, 'Incorrect font color for titles: ' + arrBugs);
    });
});

describe('Values', function () {

    it('Font Weight', function () {
        let textValueSections = sel.sections.slice(1);
        let arrBugs = report.checkProperty(textValueSections, 'font-weight', exp.titleFontWeight);
        assert.equal(arrBugs.length, 0, 'Incorrect font weight for titles: ' + arrBugs);
    });

    it('Font Family', function () {
        let textValueSections = sel.sections.slice(1);
        let arrBugs = report.checkProperty(textValueSections, 'font-family', exp.titleFontFamily);
        assert.equal(arrBugs.length, 0, 'Incorrect font family for titles: ' + arrBugs);
    });

    it('Font Size', function () {
        let textValueSections = sel.sections.slice(1);
        let arrBugs = report.checkProperty(textValueSections, 'font-size', exp.titleFontSize);
        assert.equal(arrBugs.length, 0, 'Incorrect font size for titles: ' + arrBugs);
    });

    it('Font Color', function () {
        let textValueSections = sel.sections.slice(1);
        let arrBugs = report.checkProperty(textValueSections, 'color', exp.titleFontColor);
        assert.equal(arrBugs.length, 0, 'Incorrect font color for titles: ' + arrBugs);
    });
});

describe('Attachment', function () {

    it('Attachment is a link', function () {
        let link = $(sel.sections[0]).$('a');
        let url = link.getText();
        let href = link.getAttribute('href');
        assert.equal(url, href);
    });
});