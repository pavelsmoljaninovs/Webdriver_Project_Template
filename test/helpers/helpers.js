import loginData from "../data/login";
import sel from "../selectors/helpers";
import selReg from "../selectors/registration";
import regData from "../data/registration";
import generateData from "../expected/bug-form";
import selBug from "../selectors/bug-report";

class Helpers {

  login() {
    browser.url('/');
    $('#email').setValue(loginData.email);
    $('#pass').setValue(loginData.pass);
    $('#login').click();
    let newBug = $('#new_bug');
    newBug.waitForDisplayed(5000);
  }

  isVisible(selector, index) {
    if (index === undefined) {
      return $(selector).isDisplayed();
    } else {
      return $$(selector)[index].isDisplayed();
    }
  }

  openRegistration() {
    browser.url('/');
    $(sel.buttonRegister).click();
  }

  maxInput(selector, length) {
    let input = $(selector);
    input.addValue('W'.repeat(length));
    let actual = input.getValue().length;
    this.fieldClear(selector);
    return actual;
  }

  registration() {
    $(selReg.firstName).addValue(regData.firstName);
    $(selReg.lastName).addValue(regData.lastName);
    let email = $(selReg.email);
    email.addValue(new Date().getTime() + "@gmail.com");
    $(selReg.confirmEmail).addValue(email.getValue());
    $(selReg.password).addValue(regData.password);
    $(selReg.confirmPassword).addValue(regData.confirmPassword);
  }

  fieldClear(selector) {
    $(selector).setValue(['W', '\uE003']);
  }

//to check if an input field is a text field and accepts only 1 line:
  is1LineTextField(selector) {
    let tagName = $(selector).getTagName();
    let typeName = $(selector).getAttribute('type');
    return tagName === 'input' && (typeName === 'text' || typeName === null);
  }

  //to check if an input field is a text area and accepts multiple lines:
  isTextArea(selector) {
    let tagName = $(selector).getTagName();
    return tagName === 'textarea';
  }

  randomEmail(selector) {
    let actual = $(selector).addValue(new Date().getTime() + '@gmail.com');
    return actual;
  }

  randomPassword(selector) {
    let actual = $(selector).addValue('AnyPassword');
    return actual;
  }
//to check if one element (TopEl) is higher vertically than another (BottomEl):
  locationCheck2Elemets(selectorTopEl, selectorBottomEl){
    const emailLocation = $(selectorTopEl).getLocation('y');
    const errorLocation = $(selectorBottomEl).getLocation('y');
    return (emailLocation < errorLocation);
  }

//to check the vertical order of 3 elements (Top, Middle, Bottom):
  locationCheck3Elemets(selectorTopEl, selectorMiddleEl, selectorBottomEl){
    const topElLocation = $(selectorTopEl).getLocation('y');
    const middleElLocation = $(selectorMiddleEl).getLocation('y');
    const bottomElLocation = $(selectorBottomEl).getLocation('y');
    return (topElLocation < middleElLocation && middleElLocation < bottomElLocation);
  }

  generateRandomStringWithSpesChar(){
    let foo = "";
    function randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      rand = Math.round(rand);
      return rand;
    }
    for(let i = 1; i <= generateData.longStringLength; i++){
      foo += String.fromCharCode(randomInteger(32, 126));
    }
    return foo;
  }

  generateRandomStringWithBreak(){
    let strWithBreak = "";
    function randomInteger(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      rand = Math.round(rand);
      return rand;
    }
    for(let i = 1; i <= 4; i++){
      for(let i = 1; i <= 6; i++){
        strWithBreak += String.fromCharCode(randomInteger(32, 126));
      }
      strWithBreak += "\n";
    }
    return strWithBreak;
  }

  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }

  openBugReport(){
    browser.url('/');
    $('#email').setValue(loginData.email);
    $('#pass').setValue(loginData.pass);
    $('#login').click();
    let newBug = $('#new_bug');
    newBug.waitForDisplayed(5000);
    $(selBug.bugReport).click();
  }
  makeName(length) {
    let result           = '';
    let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

}

export default new Helpers()
