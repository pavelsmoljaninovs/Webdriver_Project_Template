import sel from "../selectors/forgot-password";

class forgotPass {

    openForgotPass() {
        browser.url('/');
        $(sel.forgot).click();
    }

    baseURL () {
       return 'https://reactbugtracker.com/';
    }
}
export default new forgotPass()
