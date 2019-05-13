import loginData from "../data/login";
import sel from "../selectors/helpers";
import selReg from "../selectors/registration";
import regData from "../data/registration";

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
    $(selReg.firstName).addValue(regData.firstName);
    $(selReg.lastName).addValue(regData.lastName);
    let email = $(selReg.email);
    $(selReg.email).addValue(regData.email);
    $(selReg.confirmEmail).addValue(email.getValue());
    $(selReg.password).addValue(regData.password);
    $(selReg.confirmPassword).addValue(regData.confirmPassword);
  }

}

export default new Helpers()
