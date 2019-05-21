import {assert} from 'chai';
import sel from '../../../selectors/bug-list';
import help from '../../../helpers/helpers';

describe('Pop-up', function () {

    it('pop-up text with full summary info', function () {

        help.login();
        let randInt = help.randomInteger(1, $$(sel.allColumnRows).length);
        let elem = $(sel.randomRow + randInt + sel.spanForRandom);
        let titleForCheck = elem.getAttribute('title').trim();

        elem.click();
        assert.equal(titleForCheck, $(sel.summaryColumn).getText());

    });

});
