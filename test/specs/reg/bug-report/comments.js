import { assert } from 'chai';
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
    $(sel.commentsTextArea).setValue('test123');
    $(sel.addCommentButton).click();
      browser.pause(300);
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
       let actual = $(sel.dateAndTime).isDisplayed();
      assert.equal(actual, true);
    });

    it('In "Add" comment field Commentator name is appears', function () {
      let actual = $('.mt-2.mb-0').isDisplayed();
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


