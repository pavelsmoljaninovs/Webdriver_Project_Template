import { assert } from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report-comments';
import help from '../../../helpers/helpers';
import loginData from "../../../data/login";

// describe('Comments Title', function () {
//
//   it('Comments Title text', function () {
//     help.login();
//     $(sel.bugReport).click();
//     let commentsTitle = $(sel.commentsTitle).getText();
//     assert.equal(commentsTitle, exp.commentsTitle);
//   });
//
//   it('Comments Title text-align"', function () {
//     let actualTextAlign = $(sel.commentsTitle).getCSSProperty('text-align').value;
//     assert.equal(actualTextAlign, exp.commentsTitleTextAlign);
//   });
//
//   it('Comments Title font-weight"', function () {
//     let actualFontWeight = $(sel.commentsTitle).getCSSProperty('font-weight').value;
//     assert.equal(actualFontWeight, exp.commentsTitleFontWeight);
//   });
//
//   it('Comments Title font-family"', function () {
//     let actualFontFamily = $(sel.commentsTitle).getCSSProperty('font-family').value;
//     assert.equal(actualFontFamily, exp.commentsTitleFontFamily);
//   });
//
//   it('Comments Title font-size"', function () {
//     let actualFontSize = $(sel.commentsTitle).getCSSProperty('font-size').value;
//     assert.equal(actualFontSize, exp.commentsTitleFontSize);
//   });
//
//   it('Comments Title font-color"', function () {
//     let actualFontColor = $(sel.commentsTitle).getCSSProperty('color').parsed.hex;
//     assert.equal(actualFontColor, exp.commentsTitleFontColor);
//   });


  // describe('Date and Time', function () {
  //
  //   it('Date and Time of Comment is Displayed', function () {
  //     help.login();
  //     $('#to_me').click();
  //     browser.pause(3000);
  //     $('.text-left').waitForDisplayed(3000);
  //     $('.text-left').click();
  //     browser.pause(3000);
  //     //   $('.form-control').setValue(new Date().getTime());
  //     //   $('#login').click();
  //     //   let newBug = $('#new_bug');
  //     //   newBug.waitForDisplayed(5000);
  //     // }
  //     let actual = $(sel.dateAndTime).isDisplayed();
  //     assert.equal(actual, true);
  //   });
  //
  //   it('In "Add" comment field Commentator name is appears', function () {
  //     // help.login();
  //     // $('#to_me').click();
  //     // $('.text-left').waitForDisplayed(true);
  //     // $('.text-left').click();
  //     let actual = $('.mt-2.mb-0').isDisplayed();
  //     assert.equal(actual, true);
  //   });
  //
  //   it('Text Align', function () {
  //     let textAlign = $(sel.dateAndTime).getCSSProperty('text-align');
  //     console.log(textAlign);
  //     // assert.equal(textAlign, exp.dateAndTimeTextAlign);
  //   });
    //
    // it('Font-Weight', function () {
    //   let textAlign = $(sel.dateAndTime).getCSSProperty('font-weight');
    //   console.log(textAlign);
    //   //assert.equal(textAlign, exp.dateAndTimeFontWeight);
    // });
    //
    // it('Font-Size', function () {
    //   let textAlign = $(sel.dateAndTime).getCSSProperty('font-size');
    //   console.log(textAlign);
    //   //assert.equal(textAlign, exp.dateAndTimeFontSize);
    // });
    //
    // it('Font-Color', function () {
    //   let textAlign = $(sel.dateAndTime).getCSSProperty('color');
    //   console.log(textAlign);
    //   //assert.equal(textAlign, exp.dateAndTimeFontSize);
    // });
    //
    // it('Font-Family', function () {
    //   let textAlign = $(sel.dateAndTime).getCSSProperty('font-family');
    //   console.log(textAlign);
    //   //assert.equal(textAlign, exp.dateAndTimeFontFamily);
    // });
  //});

describe('New comment text area', function () {

  it('Font-family', function () {
    help.login();
    $('#to_me').click();
    browser.pause(3000);
    $('.text-left').waitForDisplayed(3000);
    $('.text-left').click();
    browser.pause(3000);
    $(sel.commentsTextArea).setValue('test123');
    browser.pause(3000);
    let textAlign = $(sel.commentsTextArea).getCSSProperty('font-family').value;
      // console.log(textAlign);
     assert.equal(textAlign, exp.newCommentTextFontFamily);
  });

  it('Font-Size', function () {
    let textAlign = $(sel.commentsTextArea).getCSSProperty('font-size').value;
    //console.log(textAlign);
    assert.equal(textAlign, exp.newCommentTextFontSize);
  });

  it('Font-Weight', function () {
    let textAlign = $(sel.commentsTextArea).getCSSProperty('font-weight').value;
    //console.log(textAlign);
    assert.equal(textAlign, exp.newCommentTextFontWeight);
  });

  it('Font-Color', function () {
    let textAlign = $(sel.commentsTextArea).getCSSProperty('color').parsed.hex;
    //console.log(textAlign);
    assert.equal(textAlign, exp.newCommentTextFontColor);
  });

  it('Text Align', function () {
      let textAlign = $(sel.commentsTextArea).getCSSProperty('text-align').value;
      //console.log(textAlign);
       assert.equal(textAlign, exp.newCommentTextTextAlign);
  });

  it('Width', function () {
    let textAlign = $(sel.commentsTextArea).getCSSProperty('width').parsed.value;
    console.log(textAlign);
    //assert.equal(textAlign, exp.dateAndTimeFontSize);
  });

  // it('Font-Family', function () {
  //   let textAlign = $(sel.dateAndTime).getCSSProperty('font-family');
  //   console.log(textAlign);
  //   //assert.equal(textAlign, exp.dateAndTimeFontFamily);
  // });
});
