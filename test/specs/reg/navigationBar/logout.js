import {assert} from 'chai';
import sel from '../../../selectors/navigation-bar';
import login from '../../../helpers/helpers';
import exp from '../../../expected/navigation';

describe('Logout', function () {

    it('Verify that fields are empty', function () {
        login.login();
        $(sel.logout).click();
        let elem = $(sel.emailField).getAttribute('value').length;
        let elem2 = $(sel.passwordField).getAttribute('value').length;

        if(elem === 0 && elem2 === 0) assert.equal(true, true);
        else assert.equal(true, false);
    });

    it('Verify that user is able to login again', function () {
        login.login();
        assert.equal($(sel.logout).isDisplayed(), true);
    });

});
