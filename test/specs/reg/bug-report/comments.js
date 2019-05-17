import { assert } from 'chai';
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

