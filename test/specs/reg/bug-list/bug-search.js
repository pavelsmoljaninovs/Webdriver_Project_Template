import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-list';
import exp from '../../../expected/bug-list';

describe('bug search', function () {

    describe('layout', function () {

        it('search font size', function () {
            help.login();
            let fontsize = $(sel.searchField).getCSSProperty('font-size').value;
            assert.equal(fontsize, exp.fontSizeXL);
        });

        it('placeholder text', function () {
            let plhldr_text = $(sel.searchField).getAttribute('placeholder');
            assert.equal(plhldr_text, exp.placeholder_text);
        });

        it('font color', function () {
            let fontsize = $(sel.searchField).getCSSProperty('color').parsed.hex;
            assert.equal(fontsize, exp.placeholder_color);
        });

        it('font family', function () {
            let fontfamily = $(sel.searchField).getCSSProperty('font-family').value;
            assert.equal(fontfamily, exp.fontFamily);
        });

        it('text align', function () {
            let textAling = $(sel.searchField).getCSSProperty('text-align').value;
            assert.equal(textAling, exp.textAlign);
        });

        it('font Weight', function () {
            let fontWeight = $(sel.searchField).getCSSProperty('font-weight').value;
            assert.equal(fontWeight, exp.fontWeight);
        });

    });

});
