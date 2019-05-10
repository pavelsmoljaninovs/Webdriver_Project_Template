import { assert } from 'chai';
import sel from '../../selectors/client';
import exp from '../../expected/client';

describe('Client', function () {

  describe('Page Level', function () {

    it('Get title', function () {
      browser.url('/');
      let title = browser.getTitle();
      assert.equal(title, exp.pageTitle);
    });

    it('Favicon', function () {
      browser.url('/favicon.ico');
      let icon = $(sel.faviconImg);
      let width = icon.getCSSProperty('width').parsed.value;
      let height = icon.getCSSProperty('height').parsed.value;
      let size = `${width}x${height}`;
      assert.equal(size, exp.faviconSize);
    });

  });

  describe('Elements exist', function () {

    it('Header', function () {
      browser.url('/');
      let header = $(sel.header).isDisplayed();
      assert.isTrue(header);
    });

    it('App', function () {
      let app = $(sel.app).isDisplayed();
      assert.isTrue(app);
    });

    it('Footer', function () {
      let footer = $(sel.footer).isDisplayed();
      assert.isTrue(footer);
    });

  });

});