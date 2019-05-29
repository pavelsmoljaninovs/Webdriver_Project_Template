import { assert } from 'chai';
import mergeImg from 'merge-img';
import help from '../../helpers/helpers';

describe('Full Page Screenshots', function () {

  it('Login', function () {
    browser.url('/');
    $('#email').waitForDisplayed();
    let res = browser.checkFullPageScreen('login');
    if (res > 0) {
      mergeImg(['./screenshots/baseline/login.png', './screenshots/actual/login.png', './screenshots/diff/login.png'])
        .then((img) => {
          img.write('./merge/login.png');
        });
    }
    assert.equal(res, 0);
  });

  it('Forgot', function () {
    $('#forgot').click();
    $('#remind').waitForDisplayed();
    let res = browser.checkFullPageScreen('forgot');
    assert.equal(res, 0);
  });

});

describe('Bug List Elements Screenshots', function () {

  it('Header', function () {
    help.login();
    let res = browser.checkElement($('.custom-header'), 'bug-list-header');
    assert.equal(res, 0);
  });

  it('Nav Bar', function () {
    let res = browser.checkElement($('#nav_bar'), 'bug-list-nav-bar');
    assert.equal(res, 0);
  });

  it('Table Head', function () {
    $('thead').waitForDisplayed(5000);
    let res = browser.checkElement($('thead'), 'bug-list-thead');
    assert.equal(res, 0);
  });

  it('Last Bug', function () {
    const array = $$('tbody tr');
    const el = array[array.length - 1];
    $('.custom-footer').scrollIntoView();
    let res = browser.checkElement(el, 'bug-list-last-bug');
    assert.equal(res, 0);
  });

  it('Footer', function () {
    let res = browser.checkElement($('.custom-footer'), 'bug-list-footer');
    assert.equal(res, 0, '<button>Click</button>');
  });


});

