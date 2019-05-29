import sel from "../selectors/forgot-password";

class forgotPass {

    openForgotPass() {
        browser.url('/');
        $(sel.forgot).click();
    }

}
export default new forgotPass()
