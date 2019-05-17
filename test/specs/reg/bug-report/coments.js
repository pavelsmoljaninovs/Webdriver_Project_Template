import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report-comments';
import help from '../../../helpers/helpers';

describe('General', function () {

    it('entered in bug-report form', function () {
        help.login();
        $('#to_me').click();
        $('.text-left').waitForDisplayed(true);
        $('.text-left').click();
        let actual = $('#edit').isDisplayed();
        assert.equal(actual, true);
    });

    it('Module has title “Comments”', function () {
        let com = $(sel.commentsTitle);
        let title = com.getText();
        assert.equal(title, exp.commentsName);
    });

    it('List of comments', function () {
        let com = $$(sel.commentsLength);
        assert.equal(com.length, exp.listCommentsLength);
    });

    it('New comment text area', function () {
        let actual = $(sel.comments).isEnabled('form-control');
        assert.equal(actual, true);
    });

    it('Module has "Add Comment” button', function () {
        let actual = $(sel.comments).isEnabled('.btn.btn-primary.align-right');
        assert.equal(actual, true);
    });

});
