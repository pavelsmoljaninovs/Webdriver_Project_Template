import { assert } from "chai";
import sel from '../../../selectors/login';
import disp from "../../../helpers/helpers";

describe('general', function () {

    it('login button', function () {
        browser.url('/');
        assert.isTrue(disp.isVisible(sel.loginButton));
    });

    it('reg button', function () {
        assert.isTrue(disp.isVisible(sel.regButton));
    });

    it('forgotPassword', function () {
        assert.isTrue(disp.isVisible(sel.forgotPassword));
    });

    it('requiredField', function () {
        assert.isTrue(disp.isVisible(sel.requiredField));
    });

    it('emailTextField', function () {
        assert.isTrue(disp.isVisible(sel.emailTextField));
    });

});

