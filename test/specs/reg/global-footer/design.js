import {assert} from 'chai';
import sel from '../../../selectors/global-footer';
import exp from '../../../expected/global-footer';

describe('Design', function () {
    it('Text center', function () {
        browser.url('/');
        let textAlign1 = $(sel.text).getCSSProperty('text-align').value;
        let textAlign2 = $(sel.smalltext).getCSSProperty('text-align').value;
        assert.equal(textAlign1, exp.textAlign && textAlign2, exp.textAlign);
    });
    it('Background color', function () {
        let bgColor =  $(sel.footer).getCSSProperty('background-color').value;
        assert.equal(bgColor, exp.colorValue);
    });
    it('Font size', function () {
        let fontSize = $(sel.footer).getCSSProperty('font-size').value;
        assert.equal(fontSize, exp.fSize)
    });
    it('Font Family', function () {
        let fontFamily = $(sel.footer).getCSSProperty('font-family').value;
        assert.equal(fontFamily, exp.fFamily)
    });
    it('Font Weight', function () {
        let fontWeight = $(sel.footer).getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.fWeight);
    });
    it('Font Color', function () {
        let fontColor = $(sel.footer).getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.fColor);
    });

});
/*   it('Footer', function () {
      let footer = $(sel.footer).isDisplayed();
      assert.isTrue(footer);
    });*/