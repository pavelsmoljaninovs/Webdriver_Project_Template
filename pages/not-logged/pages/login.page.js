import NotLoggedPage from '../not-logged.page';
import data from '../../../test/data/login';
import sel from '../../../test/selectors/login';

class Login extends NotLoggedPage {

  checkLogin() {
    $(sel.email).waitForDisplayed(5000);
    $(sel.email).setValue(data.email);
    $(sel.password).setValue(data.pass);
    $(sel.login).click();
    return $(sel.newBugButton).waitForDisplayed(5000);
  }

}

export default new Login();