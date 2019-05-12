import loginData from "../data/login";

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

}

export default new Helpers()
