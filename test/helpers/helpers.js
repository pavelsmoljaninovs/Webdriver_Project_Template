import loginData from "../data/login";
import sel from "../selectors/helpers";
import selReg from "../selectors/registration";
import regData from "../data/registration";
import generateData from "../expected/bug-form";

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

//to check if text field is a text filed and accepts only 1 line:
  is1LineTextField(selector) {
    let tagName = $(selector).getTagName();
    let typeName = $(selector).getAttribute('type');
    return tagName === 'input' && (typeName === 'text' || typeName === null);
  }

  randomEmail(selector) {
    let actual = $(selector).addValue(new Date().getTime() + '@gmail.com');
    return actual;
  }

  randomPassword(selector) {
    let actual = $(selector).addValue('AnyPassword');
    return actual;
  }

//to check if field is a text area and accepts multiple lines:
  isTextArea(selector) {
    let tagName = $(selector).getTagName();
    return tagName === 'textarea';
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

}

export default new Helpers()
