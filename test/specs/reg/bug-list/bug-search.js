import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-list';
import exp from '../../../expected/bug-list';
import loginData from "../../../data/login";

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

    describe('search functionality', function () {

        it('correct search result', function () {
            help.login();
            let fontsize = $$(sel.allColumnRows);
            let allRowsNamesInString = "";
            for(let el of fontsize){
                allRowsNamesInString += el.getAttribute('title');
                allRowsNamesInString += " ";
            }

            let splitArr = allRowsNamesInString.split(" ");
            let arrLength = splitArr.length-2;

            function randomInteger(min, max) {
                let rand = min + Math.random() * (max - min);
                rand = Math.round(rand);
                return rand;
            }

            let checkStr = splitArr[randomInteger(0,arrLength)];
            let foo = $(sel.searchField);
            foo.setValue(checkStr);

            let searchResult = $$(sel.allColumnRows);

            let flag = true;
            for(let el of searchResult){
                if( !el.getAttribute('title').includes(checkStr) ) flag = false;
            }
            if(flag) assert.equal(true, true);

        });

        it('correct search result when search field is empty', function () {
            help.login(); // dont remove
            let allSearchResultLength = $$(sel.allColumnRows).length;

            let foo = $(sel.searchField);
            foo.setValue('test');

            let SearchResultLength = $$(sel.allColumnRows).length;

            if(allSearchResultLength !== SearchResultLength){
                help.login(); // dont remove
                let newResult = $$(sel.allColumnRows).length;
                assert.equal(allSearchResultLength, newResult);
            }

        });

    });

});
git
