import {assert} from 'chai';
import sel from '../../selectors/global-header';
import exp from '../../expected/global-header';

// Global Header regression tests

describe('Design', function () {

    it('Text Size', function () {
        browser.url('/');
        let text = $(`${sel.header} ${sel.text}`);
        let fontSize = text.getCSSProperty('font-size').parsed.value;
        assert.equal(fontSize, exp.textSize);
    });

    it('Font Weight', function () {
        let text = $(`${sel.header} ${sel.text}`);
        let fontWeight = text.getCSSProperty('font-weight').value;
        assert.equal(fontWeight, exp.fontWeight);
    });

    it('Font Color', function () {
        let text = $(`${sel.header} ${sel.text}`);
        let fontColor = text.getCSSProperty('color').parsed.hex;
        assert.equal(fontColor, exp.hex);
    });

});

