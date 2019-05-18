import loginData from "../data/login";
import sel from "../selectors/helpers";
import selReg from "../selectors/registration";
import regData from "../data/registration";

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
}

export default new Helpers()
