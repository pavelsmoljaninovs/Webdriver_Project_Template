import {assert} from 'chai';
import sel from '../../../selectors/global-footer';
import exp from '../../../expected/global-footer';


describe('General', function () {

    it('Footer id displayed', function () {
        browser.url('/');
        let footer = $(sel.footer).isDisplayed();
        assert.isTrue(footer);
    });
    it('Two lines text', function () {
        let line_1 = $(sel.text).isDisplayed();
        let line_2 = $(sel.smalltext).isDisplayed();
        assert.isTrue(line_1);
        assert.isTrue(line_2);
    });
    it('Text includes', function () {
        let text = $(sel.text).getText();
        assert.equal(text, exp.text);
    });
    it('Version included', function () {
        let smalltext = $(sel.smalltext).getText();
        assert.equal(smalltext, exp.version);
    });
    it('Current version', function () {
        let currentVersion = $(sel.smalltext).getText().slice(9,16);
        assert.equal(currentVersion, exp.currentVersion);
    });
    it('Release version', function () {
        let releaseVersion = $(sel.smalltext).getText().slice(9,10);
        assert.equal(releaseVersion, exp.releaseVersion);
    });
    it('Sprint number', function () {
        let sprint = $(sel.smalltext).getText().slice(11,12);
        assert.equal(sprint, exp.sprint);
    });
    it('Sprint number', function () {
        let sprint = $(sel.smalltext).getText().slice(11,12);
        assert.equal(sprint, exp.sprint);
    });


});
