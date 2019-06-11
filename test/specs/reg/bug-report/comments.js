import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report-comments';
import help from '../../../helpers/helpers';
import help2 from '../../../helpers/comments';
import loginData from "../../../data/login";
import data from '../../../data/comments';
import forgot from "../../../helpers/forgot-password";

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
        help.createNewBugReport();
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

describe('Button', function () {
    it('Comment button Right aligned', function () {
        help.login();
        help.createNewBugReport();
        $(sel.allIssues).waitForDisplayed();
        $(sel.allIssues).click();
        $(sel.bugReport).waitForDisplayed();
        $(sel.bugReport).click();
        $(sel.addNewCommentArea).setValue(data.commentText);
        let button = $(sel.addCommentButton);
        let buttonAlignment = button.getCSSProperty('align-items').value;
        assert.equal(buttonAlignment, exp.addCommentButtonAlignment);
    });

    it('Font family is proper', function () {
        let button = $(sel.addCommentButton);
        let actual = button.getCSSProperty('font-family').value;
        assert.equal(actual, exp.addCommentButtonFontFamily);
    });

    it('Font size is proper', function () {
        let button = $(sel.addCommentButton);
        let actual = button.getCSSProperty('font-size').value;
        assert.equal(actual, exp.addCommentButtonFontSize);
    });

    it('Background color is proper', function () {
        let button = $(sel.addCommentButton);
        let actual = button.getCSSProperty('background-color').parsed.hex;
        assert.equal(actual, exp.addCommentButtonBackgroundColor);
    });

    it('Font weight is proper', function () {
        let button = $(sel.addCommentButton);
        let actual = button.getCSSProperty('font-weight').value;
        assert.equal(actual, exp.addCommentButtonFontWeight);
    });

    it('Font color is proper', function () {
        let button = $(sel.addCommentButton);
        let actual = button.getCSSProperty('color').parsed.hex;
        assert.equal(actual, exp.addCommentButtonFontColor);
    });

    it('Hover Background Color is proper', function () {
        let button = $(sel.addCommentButton);
        button.moveTo();
        browser.pause(500);
        let addCommentButtonHoverColor = button.getCSSProperty('background-color').parsed.hex;
        assert.equal(addCommentButtonHoverColor, exp.addCommentHoverBackgroundColor);
    });

    it('Button adds a new comment', function () {
        let button = $(sel.addCommentButton);
        button.click();
        button.waitForEnabled(1000, true);
        let commentLength = $$(sel.commentsWritten).length;
        let actual = $$(sel.commentsWritten)[commentLength - 1].getText();
        assert.equal(actual, exp.commentText);
    });

    it('Once added, New comment text area becomes empty', function () {
        let commentsTextArea = $(sel.commentsTextArea);
        let actual = commentsTextArea.getText();
        let emptyTextArea = '';
        assert.equal(actual, emptyTextArea);
        let arrayHoverIcon = $$(sel.buttonDeleteComment);
        arrayHoverIcon[arrayHoverIcon.length - 1].click();
        arrayHoverIcon[arrayHoverIcon.length - 1].waitForDisplayed(500, true);
    });
});
