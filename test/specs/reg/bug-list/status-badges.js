import { assert } from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-list';
import exp from '../../../expected/bug-list';

describe('general', function () {

    it('rows column count == status rows count', function () {
        help.login();
        let columns = $$(sel.allColumnRows).length;
        let statuscolumns = $$(sel.allStatusColumnRows).length;
        assert.equal(columns, statuscolumns);
    });

});

describe('open status badge', function () {

    it('font color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.openStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
    });

    it('bgrd color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.openStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.colorBlue);
    });

    it('font size', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.openStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
    });

    it('font weight', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.openStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);

    });

    it('font family', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.openStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
    });

    it('text align', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.openStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
    });

});

describe('closed status badge', function () {

    it('font color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.closedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
    });

    it('bgrd color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.closedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.statusBackColor);
    });

    it('font size', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.closedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
    });

    it('font weight', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.closedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
    });

    it('font family', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.closedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
    });

    it('text align', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.closedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
    });

});

describe('duplicate status badge', function () {

    it('font color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.duplicateStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
    });

    it('bgrd color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.duplicateStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.statusBackColor);
    });

    it('font size', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.duplicateStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
    });

    it('font weight', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.duplicateStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
    });

    it('font family', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.duplicateStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
    });

    it('text align', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.duplicateStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
    });

});

describe('in progress status badge', function () {

    it('font color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inProgressStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
    });

    it('bgrd color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inProgressStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.greenColor);
    });

    it('font size', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inProgressStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
    });

    it('font weight', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inProgressStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
    });

    it('font family', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inProgressStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
    });

    it('text align', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inProgressStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
    });

});

describe('in verification status badge', function () {

    it('font color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inVerificationStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
    });

    it('bgrd color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inVerificationStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.greenWhiteColor);
    });

    it('font size', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inVerificationStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
    });

    it('font weight', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inVerificationStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
    });

    it('font family', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inVerificationStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
    });

    it('text align', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.inVerificationStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
    });

});

describe('reopened_status_columns status badge', function () {

    it('font color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.reopenedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
    });

    it('bgrd color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.reopenedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.redColor);
    });

    it('font size', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.reopenedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
    });

    it('font weight', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.reopenedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
    });

    it('font family', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.reopenedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
    });

    it('text align', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.reopenedStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
    });

});

describe('cannot reproduce status badge', function () {

    it('font color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.cantRepStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.colorDark);
    });

    it('bgrd color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.cantRepStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.orangeColor);
    });

    it('font size', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.cantRepStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
    });

    it('font weight', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.cantRepStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
    });

    it('font family', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.cantRepStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
    });

    it('text align', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.cantRepStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
    });

});

describe('wont_fix_status_columns status badge', function () {

    it('font color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.wontFixStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
    });

    it('bgrd color', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.wontFixStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.whiteGrayColor);
    });

    it('font size', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.wontFixStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
    });

    it('font weight', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.wontFixStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
    });

    it('font family', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.wontFixStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
    });

    it('text align', function () {
        let sortArr;
        for (let foo of $$(sel.allSpanInTable)) {
            if (foo.getText() === sel.wontFixStatus) {
                sortArr = foo;
                break;
            }
        }
        assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
    });

});
