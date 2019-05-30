import { assert } from 'chai';
import mergeImg from 'merge-img';
import help from '../../helpers/helpers';
import sel from '../../selectors/compare';

describe('Full Page Screenshots', function () {

  it('Login', function () {
    browser.url('/');
    $(sel.email).waitForDisplayed();
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
    $(sel.forgot).click();
    $(sel.remindBtn).waitForDisplayed();
    let res = browser.checkFullPageScreen('forgot');
    assert.equal(res, 0);
  });

});

describe('Bug List Elements Screenshots', function () {

  it('Header', function () {
    help.login();
    let res = browser.checkElement($(sel.header), 'bug-list-header');
    assert.equal(res, 0);
  });

  it('Nav Bar', function () {
    let res = browser.checkElement($(sel.navBar), 'bug-list-nav-bar');
    assert.equal(res, 0);
  });

  it('Table Head', function () {
    $(sel.tableHead).waitForDisplayed(5000);
    let res = browser.checkElement($(sel.tableHead), 'bug-list-thead');
    assert.equal(res, 0);
  });

  it('Last Bug', function () {
    const array = $$(sel.tableRowsArr);
    const el = array[array.length - 1];
    $(sel.footer).scrollIntoView();
    let res = browser.checkElement(el, 'bug-list-last-bug');
    assert.equal(res, 0);
  });

  it('Footer', function () {
    let res = browser.checkElement($(sel.footer), 'bug-list-footer');
    assert.equal(res, 0);
  });

});

describe('Registration Page Screenshots', function () {

  it('registration', function () {
    browser.url('/');
    $(sel.regBtn).waitForDisplayed();
    $(sel.regBtn).click();
    $(sel.backBtn).waitForDisplayed();
    let res = browser.checkFullPageScreen('registration');
    assert.equal(res, 0);
  });

});

describe('Bug Report Screenshots', function () {

  it('default mode', function () {
    help.login();
    const array = $$(sel.tableRows);
    const el = array[array.length - 1];
    el.click();
    $(sel.editBtn).waitForDisplayed();
    let res = browser.checkFullPageScreen('bug-report-default-mode');
    assert.equal(res, 0);
  });

  it('edit mode', function () {
    $(sel.editBtn).click();
    $(sel.submitBtn).waitForDisplayed();
    let res = browser.checkFullPageScreen('bug-report-edit-mode');
    assert.equal(res, 0);
  });

});


