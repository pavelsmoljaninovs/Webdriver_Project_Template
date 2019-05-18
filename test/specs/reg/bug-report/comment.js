import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report';
import help from '../../../helpers/helpers';

describe('Date and Time', function () {

    it('Date and Time of Comment is Displayed', function () {
        help.login();
        $('#to_me').click();
        browser.pause(3000);
        $('.text-left').waitForDisplayed(true);
        $('.text-left').click();
        browser.pause(3000);
        let actual = $('.ml-3').isDisplayed();
        console.log(actual);
        assert.equal(actual, true);
    });

    it('In "Add" comment field Commentator name is appears', function () {
        // help.login();
        // $('#to_me').click();
        // $('.text-left').waitForDisplayed(true);
        // $('.text-left').click();
        let actual = $('.mt-2.mb-0').isDisplayed();
        console.log(actual);
        assert.equal(actual, true);
    });

     it('Text Align', function () {
         let textAlign = $('.ml-3').getCSSProperty('text-align');
        // assert.equal(textAlign, exp.textAlign);
     });

   //  it('Font Family', function () {
   //      let fontFamily = $('.ml-3').getCSSProperty('font-family').value;
   //      assert.equal(fontFamily, exp.fontFamily);
   //  });
   //
   // it('Font Size', function () {
   //     let fontSize = $('.ml-3').getCSSProperty('font-size').parsed.value;
   //      assert.equal(fontSize, exp.fontSize);
   //  });
   //
   //  it('Font Weight', function () {
   //      let fontWeight = $('.ml-3').getCSSProperty('font-weight').value;
   //      assert.equal(fontWeight, exp.fontWeight);
   //  });
   //
   //  it('Font Color', function () {
   //      let fontColor = $('.ml-3').getCSSProperty('color').parsed.hex;
   //      assert.equal(fontColor, exp.fontColor);
   //  });
   //


});