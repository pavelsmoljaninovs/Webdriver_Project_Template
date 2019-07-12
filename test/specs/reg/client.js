import {assert} from 'chai';
import sel from '../../selectors/client';
import exp from '../../expected/client';
import help from '../../helpers/helpers';

describe('General', function () {
    it('Favicon.ico', function () {
        browser.url('/');
        $(sel.header).waitForDisplayed(2000);
        assert.isTrue(help.isVisible(sel.faviconImg));
    });
    it ('Page title is "Bug Tracker"', function() {
        let title = $(sel.header).getText();
        assert.equal(title, exp.pageTitle);
    });
    it ('Page have "Global header"', function() {
        assert.isTrue(help.isVisible(sel.header))
    });
    it ('Page have "Global footer"', function() {
        assert.isTrue(help.isVisible(sel.footer))
    });
    it ('Bug Tracking System between them', function() {
        assert.isTrue(help.isVisible(sel.app));
        let headLoc = $(sel.header).getLocation()['y'];
        let appLoc = $(sel.app).getLocation()['y'];
        let footLoc = $(sel.footer).getLocation()['y'];
        assert.isTrue(headLoc < appLoc < footLoc);
    });
});