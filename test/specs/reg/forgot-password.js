import { assert } from 'chai';
// import sel from '../../selectors/forgot-password';
import exp from '../../expected/forgot-password';

//Forgot password tests

describe('Forgot Password Back Button', function () {

    it('Button Text Font Size', function () {
        browser.url('/');
        $('#forgot').click();
        let backButton = $(#back);
        let fontSize = backButton.getCSSProperty('font-size');
        console.log(fontSize);
        assert.equal(fontSize, exp.fontSize);
    });

    // it('Favicon', function () {
    //     browser.url('/favicon.ico');
    //     let icon = $(sel.faviconImg);
    //     let width = icon.getCSSProperty('width').parsed.value;
    //     let height = icon.getCSSProperty('height').parsed.value;
    //     let size = `${width}x${height}`;
    //     assert.equal(size, exp.faviconSize);
    // });

});

// describe('Elements exist', function () {
    //
    // it('Header', function () {
    //     browser.url('/');
    //     let header = $(sel.header).isDisplayed();
    //     assert.isTrue(header);
    // });
    //
    // it('App', function () {
    //     let app = $(sel.app).isDisplayed();
    //     assert.isTrue(app);
    // });
    //
    // it('Footer', function () {
    //     let footer = $(sel.footer).isDisplayed();
    //     assert.isTrue(footer);
    // });

// });

