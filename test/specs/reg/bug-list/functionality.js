import { assert } from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-list';
import exp from '../../../expected/bug-list';

describe('Bug Summary', function () {

    it('Bug Summary link is work', function () {
        help.login();
        $(sel.LinkCell).click();
        let OpenBtnText = $(sel.OpenButton).getText();
        assert.equal(OpenBtnText, exp.OpenButton);
    });
});