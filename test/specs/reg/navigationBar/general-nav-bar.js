import { assert } from 'chai';
import nav from '../../../selectors/navigation-bar';
import login from '../../../helpers/helpers';
import exp from '../../../expected/navigation';

describe('Navigation Bar', function () {

  it('exist Navigation Bar', function () {
    login.login();
    assert.equal($(nav.navBar).isDisplayed(), true);
  });

  it('exist newBug button', function () {
    assert.equal($(nav.newBug).isDisplayed(), true);
  });

  it('exist all_issues button', function () {
    assert.equal($(nav.allIssues).isDisplayed(), true);
  });

  it('exist logout button', function () {
    assert.equal($(nav.logout).isDisplayed(), true);
  });

  it('is contain 100% of the application width', function () {
    let navBarWidth = parseInt($(nav.navBar).getCSSProperty('width').value);
    let containerWidth = parseInt($(nav.container).getCSSProperty('width').value) - 30;
    assert.equal(navBarWidth, containerWidth);
  });

  it('equal background color: rgba(0, 0, 0, 0.03)', () => {
    assert.equal($(nav.navBar).getCSSProperty('background-color').value,
      exp.navBarBackgroundColor);
  });

  it('have New Bug button', () => {
    assert.equal($(nav.newBug).getAttribute('id'), exp.btnNameNewBug);
  });

  it('have All Issues button', () => {
    assert.equal($(nav.allIssues).getAttribute('id'), exp.btnNameAllIssues);
  });

  it('have Logout button', () => {
    assert.equal($(nav.logout).getAttribute('id'), exp.btnNameLogout);
  });

  it('New Bug button have font family: Segoe UI', () => {
    assert.equal($(nav.newBug).getCSSProperty('font-family').value, exp.btnFontFamily);
  });

  it('New Bug button have font size: 16px', () => {
    assert.equal($(nav.newBug).getCSSProperty('font-size').value, exp.btnFontSize);
  });

  it('New Bug button have font weight: 400', () => {
    assert.equal($(nav.newBug).getCSSProperty('font-weight').value, exp.btnFontWeight);
  });

  it('New Bug button have font color: #fff', () => {
    assert.equal($(nav.newBug).getCSSProperty('color').parsed.hex, exp.btnColor);
  });

  it('New Bug button have text align: center', () => {
    assert.equal($(nav.newBug).getCSSProperty('text-align').value, exp.textCenter);
  });

  it('New Bug button have background color: #17a2b8', () => {
    assert.equal($(nav.newBug).getCSSProperty('background-color').parsed.hex,
      exp.btnBackgroundColor);
  });

  it('New Bug button have hover background color: #138496', () => {
    $(nav.newBug).moveTo();
    browser.pause(500);
    assert.equal($(nav.newBug).getCSSProperty('background-color').parsed.hex,
      exp.btnHoverBackgroundColor);
  });

  it('All Issues button have font family: Segoe UI', () => {
    assert.equal($(nav.allIssues).getCSSProperty('font-family').value,
      exp.btnFontFamily);
  });

  it('All Issues button have font size: 16px', () => {
    assert.equal($(nav.allIssues).getCSSProperty('font-size').value, exp.btnFontSize);
  });

  it('All Issues button have font weight: 400', () => {
    assert.equal($(nav.allIssues).getCSSProperty('font-weight').value, exp.btnFontWeight);
  });

  it('All Issues button have font color: #fff', () => {
    assert.equal($(nav.allIssues).getCSSProperty('color').parsed.hex, exp.btnColor);
  });

  it('All Issues button have text align: center', () => {
    assert.equal($(nav.allIssues).getCSSProperty('text-align').value, exp.textCenter);
  });

  it('All Issues button have background color: #17a2b8', () => {
    assert.equal($(nav.allIssues).getCSSProperty('background-color').parsed.hex,
      exp.btnBackgroundColor);
  });

  it('All Issues button have hover background color: #138496', () => {
    $(nav.allIssues).moveTo();
    browser.pause(500);
    assert.equal($(nav.allIssues).getCSSProperty('background-color').parsed.hex,
      exp.btnHoverBackgroundColor);
  });

  it('Logout button have font family: Segoe UI', () => {
    assert.equal($(nav.logout).getCSSProperty('font-family').value, exp.btnFontFamily);
  });

  it('Logout button have font size: 16px', () => {
    assert.equal($(nav.logout).getCSSProperty('font-size').value, exp.btnFontSize);
  });

  it('Logout button have font weight: 400', () => {
    assert.equal($(nav.logout).getCSSProperty('font-weight').value, exp.btnFontWeight);
  });

  it('Logout button have font color: #fff', () => {
    assert.equal($(nav.logout).getCSSProperty('color').parsed.hex, exp.btnColor);
  });

  it('Logout button have text align: center', () => {
    assert.equal($(nav.logout).getCSSProperty('text-align').value, exp.textCenter);
  });

  it('Logout button have background color: #6c757d', () => {
    assert.equal($(nav.logout).getCSSProperty('background-color').parsed.hex,
      exp.btnLogoutBackgroundColor);
  });

  it('Logout button have hover background color: #5a6268', () => {
    $(nav.logout).moveTo();
    browser.pause(500);
    assert.equal($(nav.logout).getCSSProperty('background-color').parsed.hex,
      exp.btnLogouHovertBackgroundColor);
  });

});