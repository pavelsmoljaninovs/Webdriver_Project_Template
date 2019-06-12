import { assert } from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report-comments';
import help from '../../../helpers/helpers';
import help2 from '../../../helpers/comments';
import data from '../../../data/comments';

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
    assert.equal(text, exp.noCommentsTextAlign);
  });

  it('Font-weight', function () {
    let text = $$(sel.msgNoComments)[1].getCSSProperty('font-weight').value;
    assert.equal(text, exp.noCommentsTextFontWeight);
  });

  it('Font-family', function () {
    let text = $$(sel.msgNoComments)[1].getCSSProperty('font-family').value;
    assert.equal(text, exp.noCommentsTextFontFamily);
  });

});

describe('Date and Time', function () {

  it('Date and Time of Comment is Displayed', function () {
    help.login();
    $(sel.bugReport).click();
    $(sel.commentsTextArea).setValue('test123');
    $(sel.addCommentButton).click();
    let actual = $(sel.dateAndTime).isDisplayed();
    assert.equal(actual, true);
  });

  it('In "Add" comment field Commentator name is appears', function () {
    let actual = $(sel.commentNameAppears).isDisplayed();
    assert.equal(actual, true);
  });

  it('Text Align', function () {
    let textAlign = $(sel.dateAndTime).getCSSProperty('text-align').value;
    assert.equal(textAlign, exp.dateAndTimeTextAlign);
  });

  it('Font-Weight', function () {
    let textAlign = $(sel.dateAndTime).getCSSProperty('font-weight').value;
    assert.equal(textAlign, exp.dateAndTimeFontWeight);
  });

  it('Font-Size', function () {
    let textAlign = $(sel.dateAndTime).getCSSProperty('font-size').parsed.value;
    assert.equal(textAlign, exp.dateAndTimeFontSize);
  });

  it('Font-Color', function () {
    let textAlign = $(sel.dateAndTime).getCSSProperty('color').parsed.hex;
    assert.equal(textAlign, exp.dateAndTimeFontColor);
  });

  it('Font-Family', function () {
    let textAlign = $(sel.dateAndTime).getCSSProperty('font-family').value;
    assert.equal(textAlign, exp.dateAndTimeFontFamily);
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
      let del = $$(delButton)[$$(delButton).length - 1];
      del.click();
      let actual2 = com.isExisting();
      if (actual2 === true) {
        assert.equal(actual2, true);
      }
    } else {
      assert.equal(actual, true);
    }
  });
});

describe('New comment text area', function () {

  it('Font-family', function () {
    help.login();
    $(sel.bugReport).click();
    $(sel.commentsTextArea).setValue('test123');
    let textAlign = $(sel.commentsTextArea).getCSSProperty('font-family').value;
    assert.equal(textAlign, exp.newCommentTextFontFamily);
  });

  it('Font-Size', function () {
    let textAlign = $(sel.commentsTextArea).getCSSProperty('font-size').value;
    assert.equal(textAlign, exp.newCommentTextFontSize);
  });

  it('Font-Weight', function () {
    let textAlign = $(sel.commentsTextArea).getCSSProperty('font-weight').value;
    assert.equal(textAlign, exp.newCommentTextFontWeight);
  });

  it('Font-Color', function () {
    let textAlign = $(sel.commentsTextArea).getCSSProperty('color').parsed.hex;
    assert.equal(textAlign, exp.newCommentTextFontColor);
  });

  it('Text Align', function () {
    let textAlign = $(sel.commentsTextArea).getCSSProperty('text-align').value;
    assert.equal(textAlign, exp.newCommentTextTextAlign);
  });

  it('is contain 100% of the application width', function () {
    let comAreaWidth = parseInt($(sel.commentWidth).getCSSProperty('width').value);
    let comContainerWidth = parseInt($(sel.siteWidth).getCSSProperty('width').value) - 30;
    assert.equal(comAreaWidth, comContainerWidth);
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

describe('Comment Placeholder', function () {

  it('Comment Confirmation Placeholder', function () {
    help.login();
    $(sel.bugReport).click();
    let actual = $(sel.commentsTextArea).getAttribute('placeholder');
    assert.equal(actual, exp.confirmCommentPlaceholder);
  });

  it('Font-Color Placeholder', function () {
    let textAlign = $(sel.commentsTextArea).getCSSProperty('color').parsed.hex;
    assert.equal(textAlign, exp.fontColorPlaceholder);
  });
});

