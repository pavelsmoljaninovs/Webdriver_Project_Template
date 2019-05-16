import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report-comments';
import help from '../../../helpers/helpers';

describe('Comments Title', function () {

    it('Comments Title text', function () {
        help.login();
        $(sel.bugReport).click();
        let commentsTitle = $(sel.commentsTitle).getText();
        assert.equal(commentsTitle, exp.commentsTitle);
    });

    it('Comments Title text-align"', function () {
        let actualTextAlign = $(sel.commentsTitle).getCSSProperty('text-align').value;
        assert.equal(actualTextAlign, exp.commentsTitleTextAlign);
    });

    it('Comments Title font-weight"', function () {
        let actualFontWeight = $(sel.commentsTitle).getCSSProperty('font-weight').value;
        assert.equal(actualFontWeight, exp.commentsTitleFontWeight);
    });

    it('Comments Title font-family"', function () {
        let actualFontFamily = $(sel.commentsTitle).getCSSProperty('font-family').value;
        assert.equal(actualFontFamily, exp.commentsTitleFontFamily);
    });

    it('Comments Title font-size"', function () {
        let actualFontSize = $(sel.commentsTitle).getCSSProperty('font-size').value;
        assert.equal(actualFontSize, exp.commentsTitleFontSize);
    });

    it('Comments Title font-color"', function () {
        let actualFontColor = $(sel.commentsTitle).getCSSProperty('color').parsed.hex;
        assert.equal(actualFontColor, exp.commentsTitleFontColor);
    });

});
