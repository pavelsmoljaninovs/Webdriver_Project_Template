import { assert } from 'chai';
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

});

