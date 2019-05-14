import { assert } from 'chai';
import sel from '../../../selectors/forgot-password';

describe('Error message appears between Email and *Required Filed', function () {
    it('Vertical Location Check', function () {
        browser.url('/');
        $(sel.forgot).click();
        $(sel.remindPass).click();
        const emailLocation = $(sel.email).getLocation('y');
        const errorLocation = $(sel.errorButton).getLocation('y');
        const requiredLocation = $(sel.requiredField).getLocation('y');
        assert.isTrue(emailLocation < errorLocation && errorLocation < requiredLocation);

    });
});