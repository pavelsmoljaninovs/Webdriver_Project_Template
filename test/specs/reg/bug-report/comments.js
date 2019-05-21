import { assert } from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report-comments';
import help from '../../../helpers/helpers';
import help2 from '../../../helpers/comments';

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

    it('Module has title “Comments”', function () {
        let com = $(sel.commentsTitle);
        let title = com.getText();
        assert.equal(title, exp.commentsName);
    });

    it('New comment text area', function () {
        let actual = $(sel.comments).isEnabled(sel.addCommentsForm);
        assert.equal(actual, true);
    });

    it('Module has "Add Comment” button', function () {
        let actual = $(sel.comments).isEnabled(sel.buttonAddComments);
        assert.equal(actual, true);
    });

    it('List of comments', function () {
        let com = $(sel.commentsWritten);
        let actual = com.isExisting();
        console.log(actual);
        if (actual === false) {
            help2.addNewComments();
            let delButton = (sel.buttonDeleteComment);
            let del = $$(delButton)[$$(delButton).length -1];
            del.click();
            let actual2 = com.isExisting();
            if(actual2 === true){
                assert.equal(actual2, true);
            }
        } else {
            assert.equal(actual, true);
        }
    });

});

