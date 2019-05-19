import { assert } from 'chai';
import sel from '../../../selectors/filter-bar';
import help from '../../../helpers/helpers';
import exp from '../../../expected/filter-bar';

describe('Design', function () {

    it('Spaces between buttonsButtons', function () {
        help.login();
        let firstBtn = $(sel.btnToMe).getCSSProperty('margin-right').value;
        let secondBtn = $(sel.btnOpen).getCSSProperty('margin-right').value;

        if(firstBtn === exp.spaceBetweenButtons && secondBtn === exp.spaceBetweenButtons){
            assert.isTrue(true, true);
        }else {
            assert.isTrue(true, false);
        }
    });

    it('Buttons are rectangular shape with round corners', function () {
        let btns = $$(sel.btnsInOneRow);
        let flagA = true;
        let flagB = true;
        for (let foo of btns) {
            if (foo.getCSSProperty("width").value < foo.getCSSProperty("height").value) {
                flagA = false;
                break;
            }
        }
        for (let foo of btns) {
            if (foo.getCSSProperty("border-radius").value === 0){
                flagB = false;
                break;
            }
        }

        if(flagA && flagB) assert.isTrue(true, true);
        else assert.isTrue(true, false);
    });

});
