import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report-comments';
import help from '../../../helpers/helpers';

describe('Comments Title', function () {

    it('Comments Title text', function () {
        help.login();
        $(sel.bugReport).click();
        let commentsTitle = $$('.text-bold')[11].getText();
        assert.equal(commentsTitle, exp.commentsTitle);
    });

    it('Comments Title text-align"', function () {
        let actualTextAlign = $$('.text-bold')[11].getCSSProperty('text-align').value;
        assert.equal(actualTextAlign, exp.commentsTitleTextAlign);
    });

    it('Comments Title font-weight"', function () {
        let actualFontWeight = $$('.text-bold')[11].getCSSProperty('font-weight').value;
        assert.equal(actualFontWeight, exp.commentsTitleFontWeight);
    });

});
