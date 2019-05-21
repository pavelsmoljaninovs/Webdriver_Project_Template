import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-list';
import exp from '../../../expected/bug-list';

describe('table appears with four columns', function () {

    it('table head include 4 columns', function () {
        help.login();
        let element = $$(sel.tableColumns).length;
        assert.equal(element, exp.tableColumnsCount);
    });

});
