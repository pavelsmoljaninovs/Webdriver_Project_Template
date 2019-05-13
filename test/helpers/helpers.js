import loginData from "../data/login";
import sel from "../selectors/helpers";
import selReg from '../selectors/registration';

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

  openRegistration(){
      browser.url('/');
      $(sel.buttonRegister).click();
  }

  maxInput(selector, length){
    let input = $(selector);
    input.addValue('W'.repeat(length));
    let actual = input.getValue().length;
    input.setValue(['W', '\uE003']);
    return actual;
  }

  registration (){
    let fName = $(selReg.firstName);
    fName.addValue('Donald');
    let lName = $(selReg.lastName);
    lName.addValue('Duck');
    let email = $(selReg.email);
    email.addValue(new Date().getTime() + "@gmail.com");
    let confirmEmail = $(selReg.confirmEmail);
    confirmEmail.addValue(email.getValue());
    let password = $(selReg.password);
    password.addValue('Abc12345678');
    let confirmPassword = $(selReg.confirmPassword);
    confirmPassword.addValue('Abc12345678');
  }

  registerClean(){
    $(selReg.firstName).setValue(['W', '\uE003']);
    $(selReg.lastName).setValue(['W', '\uE003']);
    $(selReg.email).setValue(['W', '\uE003']);
    $(selReg.confirmEmail).setValue(['W', '\uE003']);
    $(selReg.password).setValue(['W', '\uE003']);
    $(selReg.confirmPassword).setValue(['W', '\uE003']);
  }

}

export default new Helpers()
