import { assert } from 'chai';
import mergeImg from 'merge-img';
const { addStep, addAttachment } = require('@wdio/allure-reporter').default;
import help from '../../helpers/helpers';
import sel from '../../selectors/compare';
import data from '../../data/compare';

describe('Full Page Screenshots', function () {

  it(data.login, function () {
    browser.url('/');
    $(sel.email).waitForDisplayed();
    $(sel.email).setValue('a');
    let res = browser.checkFullPageScreen(data.login);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.login}.png`,
        `${data.screenPath}${data.actPath}${data.login}.png`,
        `${data.screenPath}${data.diffPath}${data.login}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.login}.png`);
          addStep('Test step', 'this is body', 'failed');
          addAttachment(`${data.mergePath}${data.login}.png`, `${data.mergePath}${data.login}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.forgot, function () {
    $(sel.forgot).click();
    $(sel.remindBtn).waitForDisplayed();
    let res = browser.checkFullPageScreen(data.forgot);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.forgot}.png`,
        `${data.screenPath}${data.actPath}${data.forgot}.png`,
        `${data.screenPath}${data.diffPath}${data.forgot}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.forgot}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.register, function () {
    $(sel.backBtn).click();
    $(sel.regBtn).waitForDisplayed();
    $(sel.regBtn).click();
    $(sel.backBtn).waitForDisplayed();
    let res = browser.checkFullPageScreen(data.register);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.register}.png`,
        `${data.screenPath}${data.actPath}${data.register}.png`,
        `${data.screenPath}${data.diffPath}${data.register}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.register}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.bugForm, function () {
    help.login();
    $(sel.newBug).click();
    $(sel.clear).waitForDisplayed();
    let res = browser.checkFullPageScreen(data.bugForm);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.bugForm}.png`,
        `${data.screenPath}${data.actPath}${data.bugForm}.png`,
        `${data.screenPath}${data.diffPath}${data.bugForm}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.bugForm}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.bugDefault, function () {
    $(sel.allIssues).click();
    $(sel.tableRows).waitForDisplayed(5000);
    const array = $$(sel.tableRows);
    const el = array[array.length - 1];
    el.scrollIntoView();
    el.click();
    $(sel.editBtn).scrollIntoView();
    let res = browser.checkFullPageScreen(data.bugDefault);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.bugDefault}.png`,
        `${data.screenPath}${data.actPath}${data.bugDefault}.png`,
        `${data.screenPath}${data.diffPath}${data.bugDefault}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.bugDefault}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.bugEdit, function () {
    $(sel.editBtn).scrollIntoView();
    $(sel.editBtn).click();
    $(sel.submitBtn).waitForDisplayed();
    let res = browser.checkFullPageScreen(data.bugEdit);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.bugEdit}.png`,
        `${data.screenPath}${data.actPath}${data.bugEdit}.png`,
        `${data.screenPath}${data.diffPath}${data.bugEdit}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.bugEdit}.png`);
        });
    }
    assert.equal(res, 0);
  });

});

describe('Bug List Elements Screenshots', function () {

  it(data.listHeader, function () {
    $(sel.allIssues).scrollIntoView();
    $(sel.allIssues).click();
    $(sel.tableRows).waitForDisplayed(5000);
    let res = browser.checkElement($(sel.header), data.listHeader);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.listHeader}.png`,
        `${data.screenPath}${data.actPath}${data.listHeader}.png`,
        `${data.screenPath}${data.diffPath}${data.listHeader}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.listHeader}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.listNavBar, function () {
    let res = browser.checkElement($(sel.navBar), data.listNavBar);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.listNavBar}.png`,
        `${data.screenPath}${data.actPath}${data.listNavBar}.png`,
        `${data.screenPath}${data.diffPath}${data.listNavBar}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.listNavBar}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.listTHead, function () {
    let res = browser.checkElement($(sel.tableHead), data.listTHead);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.listTHead}.png`,
        `${data.screenPath}${data.actPath}${data.listTHead}.png`,
        `${data.screenPath}${data.diffPath}${data.listTHead}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.listTHead}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.listLastBug, function () {
    const array = $$(sel.tableRows);
    const el = array[array.length - 1];
    $(sel.footer).scrollIntoView();
    let res = browser.checkElement(el, data.listLastBug);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.listLastBug}.png`,
        `${data.screenPath}${data.actPath}${data.listLastBug}.png`,
        `${data.screenPath}${data.diffPath}${data.listLastBug}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.data.listLastBug}.png`);
        });
    }
    assert.equal(res, 0);
  });

  it(data.listFooter, function () {
    let res = browser.checkElement($(sel.footer), data.listFooter);
    if (res > 0) {
      mergeImg([`${data.screenPath}${data.basePath}${data.listFooter}.png`,
        `${data.screenPath}${data.actPath}${data.listFooter}.png`,
        `${data.screenPath}${data.diffPath}${data.listFooter}.png`])
        .then((img) => {
          img.write(`${data.mergePath}${data.data.data.listFooter}.png`);
        });
    }
    assert.equal(res, 0);
  });

});

describe('Bug Report Screenshots', function () {



});