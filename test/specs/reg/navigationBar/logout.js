import {assert} from 'chai';
import sel from '../../../selectors/navigation-bar';
import login from '../../../helpers/helpers';
import loginData from "../../../data/login";
import selReg from "../../../selectors/registration";

describe('Logout', function () {

    it('Verify that fields are empty & user is able to login again', function () {
        login.login();
        $(sel.logout).click();
        let elem = $(sel.emailField).getAttribute('value').length;
        let elem2 = $(sel.passwordField).getAttribute('value').length;

        $(selReg.email).setValue(loginData.email);
        $(selReg.password).setValue(loginData.pass);
        $(selReg.login).click();
        let newBug = $(selReg.newBugButton);
        newBug.waitForDisplayed(1000);

        assert.isTrue((elem === 0 && elem2 === 0) && $(sel.logout).isDisplayed());
    });

});
