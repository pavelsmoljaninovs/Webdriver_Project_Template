import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report-comments';
import help from '../../../helpers/helpers';
import loginData from "../../../data/login";
import nav from "../../../selectors/navigation-bar";
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
