import { expect } from 'chai';
import nav from '../../../selectors/navigation-bar';
import login from '../../../helpers/helpers'


describe('Navigation Bar', function() {
    it('exist Navigation Bar', function() {
            login.login();
            // browser.url('/');
            expect($(nav.navBar).isDisplayed()).to.eql(true);
        })
        //'Navigation bar contains navigation buttons'
    it('exist newBug button', function() {
        expect($(nav.newBug).isDisplayed()).to.eql(true);
    })
    it('exist all_issues button', function() {
        expect($(nav.allIssues).isDisplayed()).to.eql(true);
    })
    it('exist logout button', function() {
        expect($(nav.logout).isDisplayed()).to.eql(true);
    })

    it('is contain 100% of the application width', function() {
            let navBarWidth = parseInt($(nav.navBar).getCSSProperty('width').value);
            let containerWidth = parseInt($(nav.container).getCSSProperty('width').value) - 30;
            expect(navBarWidth).to.equal(containerWidth);
        })
        // Verify that Navigation  Bar located just below the Header.
    it('located just below the Header', function() {
            expect($(nav.navBar).getAttribute('class')).to.equal('card-footer text-center');
        })
        // Verify that Navigation Bar background color: rgba(0, 0, 0, 0.03)
    it('equal background color: rgba(0, 0, 0, 0.03)', () => {
        expect($(nav.navBar).getCSSProperty('background-color').value)
            .to.equal('rgba(0,0,0,0.03)');
    })

    //         Verify that Navigation Bar have New Bug button
    it('have New Bug button', () => {
            expect($(nav.newBugForCheck).getAttribute('id')).to.equal('new_bug');
        })
        // Verify that Navigation Bar have All Issues button
    it('have All Issues button', () => {
            expect($(nav.allIssuesForCheck).getAttribute('id')).to.equal('all_issues');
        })
        // Verify that Navigation Bar have Logout button
    it('have Logout button', () => {
            expect($(nav.logoutForCheck).getAttribute('id')).to.equal('logout');
        })
        // Verify that New Bug button have font family: Segoe UI
    it('have font family: Segoe UI', () => {
            expect($(nav.newBug).getCSSProperty('font-family').value).to.equal('segoe ui');
        })
        // Verify that New Bug button have font size: 16px
    it('have font size: 16px', () => {
            expect($(nav.newBug).getCSSProperty('font-size').value).to.equal('16px');
        })
        // Verify that New Bug button have font weight: 400
    it('have font weight: 400', () => {
            expect($(nav.newBug).getCSSProperty('font-weight').value).to.equal(400);
        })
        // Verify that New Bug button have font color: #fff
    it('have font color: #fff', () => {
            expect($(nav.newBug).getCSSProperty('color').parsed.hex).to.equal('#ffffff');
        })
        // Verify that New Bug have text align: center
    it('have text align: center', () => {
            expect($(nav.newBug).getCSSProperty('text-align').value).to.equal('center');
        })
        // Verify that New Bug Button have background color: #17a2b8
    it('have background color: #17a2b8', () => {
            expect($(nav.newBug).getCSSProperty('background-color').parsed.hex).to.equal('#17a2b8');
        })
        // Verify that New Bug Button  have hover background color: #138496
    it('have hover background color: #138496', () => {
            $(nav.newBug).moveTo();
            browser.pause(2000);
            expect($(nav.newBug).getCSSProperty('background-color').parsed.hex).to.equal('#138496');
        })
        // 			Verify that All Issues button have font family: Segoe UI
    it('have font family: Segoe UI', () => {
            expect($(nav.allIssues).getCSSProperty('font-family').value).to.equal('segoe ui');
        })
        // Verify that All Issues button have font size: 16px
    it('have font size: 16px', () => {
            expect($(nav.allIssues).getCSSProperty('font-size').value).to.equal('16px');
        })
        // Verify that All Issues button have font weight: 400
    it('have font weight: 400', () => {
            expect($(nav.allIssues).getCSSProperty('font-weight').value).to.equal(400);
        })
        // Verify that All Issues button have font color: #fff
    it('have font color: #fff', () => {
            expect($(nav.allIssues).getCSSProperty('color').value).to.equal('rgba(255,255,255,1)');
        })
        // Verify that All Issues button have text align: center
    it('have text align: center', () => {
            expect($(nav.allIssues).getCSSProperty('text-align').value).to.equal('center');
        })
        // Verify that All Issues Button have background color: #17a2b8
    it('have background color: #17a2b8', () => {
            expect($(nav.allIssues).getCSSProperty('background-color').parsed.hex).to.equal('#17a2b8');
        })
        // Verify that All Issues Button  have hover background color: #138496
    it('have hover background color: #138496', () => {
            $(nav.allIssues).moveTo();
            browser.pause(2000);
            expect($(nav.allIssues).getCSSProperty('background-color').parsed.hex).to.equal('#138496');
        })
        // 			Verify that Logout button have font family: Segoe UI
    it('have font family: Segoe UI', () => {
            expect($(nav.logout).getCSSProperty('font-family').value).to.equal('segoe ui');
        })
        // Verify that Logout button have font size: 16px
    it('have font size: 16px', () => {
            expect($(nav.logout).getCSSProperty('font-size').value).to.equal('16px');
        })
        // Verify that Logout button have font weight: 400
    it('have font weight: 400', () => {
            expect($(nav.logout).getCSSProperty('font-weight').value).to.equal(400);
        })
        // Verify that Logout button have font color: #fff
    it('have font color: #fff', () => {
            expect($(nav.logout).getCSSProperty('color').value).to.equal('rgba(255,255,255,1)');
        })
        // Verify that Logout button have text align: center
    it('have text align: center', () => {
            expect($(nav.logout).getCSSProperty('text-align').value).to.equal('center');
        })
        // Verify that Button Logout  have background color: #6c757d
    it('have background color: #6c757d', () => {
            expect($(nav.logout).getCSSProperty('background-color').parsed.hex).to.equal('#6c757d');
        })
        // Verify that Button Logout  have hover background color: #5a6268
    it('have hover background color: #5a6268', () => {
        $(nav.logout).moveTo();
        browser.pause(2000);
        expect($(nav.logout).getCSSProperty('background-color').parsed.hex).to.equal('#5a6268');
    })
})