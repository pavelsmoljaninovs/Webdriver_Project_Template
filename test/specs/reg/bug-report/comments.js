import {assert} from 'chai';
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
describe('Comments List of comments (empty)', function () {

    it('Static text “No comments”', function () {
        help.login();
        help.createNewBugRetort();
        $(sel.textNoComments).isDisplayed();
        browser.pause(3000);
    });

      it('Text-align', function () {
       let text = $$(sel.msgNoComments)[1].getCSSProperty('text-align').value;
       assert.equal(text, exp.noCommentsTextAlign );
    });

       it('Font-weight', function () {
           let text = $$(sel.msgNoComments)[1].getCSSProperty('font-weight').value;
           assert.equal(text, exp.noCommentsTextFontWeight);
       });

       it('Font-family', function () {
           let text = $$(sel.msgNoComments)[1].getCSSProperty('font-family').value;
           assert.equal(text, exp.noCommentsTextFontFamily);
       });

       it('Font-size', function () {
           let text = $$(sel.msgNoComments)[1].getCSSProperty('font-size').parsed.value;
           assert.equal(text, exp.noCommentsTextFontSize);
       });

       it('Font-color', function () {
           let text = $$(sel.msgNoComments)[1].getCSSProperty('color').parsed.hex;
           assert.equal(text, exp.noCommentsTextFontColor);
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


