import loginData from "../data/login";
import {assert} from "chai";

class Helpers {

  login (){
    browser.url('/');
    $('#email').setValue(loginData.email);
    $('#pass').setValue(loginData.pass);
    $('#login').click();
    let newBug = $('#new_bug');
    newBug.waitForDisplayed(5000);
  }

  isVisible (selector, index){
    if(index === undefined){
      return $(selector).isDisplayed()
    } else {
      return $$(selector)[index].isDisplayed()
    }
  }

  registration(){
      browser.url('/');
      $('#registration').click();
  }

  maxInputEmailPass(selector, maxLength){
    let input = $(selector);
    input.addValue('j'.repeat(maxLength));
    let actual = input.getValue().length;
    input.clearValue();
    return assert.equal(actual, maxLength);
  }

}

export default new Helpers()
