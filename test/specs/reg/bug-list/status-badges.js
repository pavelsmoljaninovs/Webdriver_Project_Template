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

    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.openStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
  });

  it('bgrd color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.openStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.colorBlue);
  });

  it('font size', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.openStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
  });

  it('font weight', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.openStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);

  });

  it('font family', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.openStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
  });

  it('text align', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.openStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
  });

});

describe('closed status badge', function () {

  it('font color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.closedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
  });

  it('bgrd color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.closedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.statusBackColor);
  });

  it('font size', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.closedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
  });

  it('font weight', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.closedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
  });

  it('font family', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.closedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
  });

  it('text align', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.closedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
  });

});

describe('duplicate status badge', function () {

  it('font color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.duplicateStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
  });

  it('bgrd color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.duplicateStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.statusBackColor);
  });

  it('font size', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.duplicateStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
  });

  it('font weight', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.duplicateStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
  });

  it('font family', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.duplicateStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
  });

  it('text align', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.duplicateStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
  });

});

describe('in progress status badge', function () {

  it('font color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inProgressStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
  });

  it('bgrd color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inProgressStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.greenColor);
  });

  it('font size', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inProgressStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
  });

  it('font weight', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inProgressStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
  });

  it('font family', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inProgressStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
  });

  it('text align', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inProgressStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
  });

});

describe('in verification status badge', function () {

  it('font color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inVerificationStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
  });

  it('bgrd color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inVerificationStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.greenWhiteColor);
  });

  it('font size', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inVerificationStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
  });

  it('font weight', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inVerificationStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
  });

  it('font family', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inVerificationStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
  });

  it('text align', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.inVerificationStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
  });

});

describe('reopened_status_columns status badge', function () {

  it('font color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.reopenedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
  });

  it('bgrd color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.reopenedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.redColor);
  });

  it('font size', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.reopenedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
  });

  it('font weight', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.reopenedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
  });

  it('font family', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.reopenedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
  });

  it('text align', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.reopenedStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
  });

});

describe('cannot reproduce status badge', function () {

  it('font color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.cantRepStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.colorDark);
  });

  it('bgrd color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.cantRepStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.orangeColor);
  });

  it('font size', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.cantRepStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
  });

  it('font weight', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.cantRepStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
  });

  it('font family', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.cantRepStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
  });

  it('text align', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.cantRepStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
  });

});

describe('wont_fix_status_columns status badge', function () {

  it('font color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.wontFixStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('color').parsed.hex, exp.whiteColor);
  });

  it('bgrd color', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.wontFixStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('background-color').parsed.hex, exp.whiteGrayColor);
  });

  it('font size', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.wontFixStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-size').value, exp.fontSize);
  });

  it('font weight', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.wontFixStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-weight').value, exp.fontWeightBold);
  });

  it('font family', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.wontFixStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('font-family').value, exp.fontFamily);
  });

  it('text align', function () {
    let arrAllSpanInTable = $$(sel.allSpanInTable);
    let sortArr;
    for (let x = 0; x < arrAllSpanInTable.length; x++) {
      if (arrAllSpanInTable[x].getText() === sel.wontFixStatus) {
        sortArr = arrAllSpanInTable[x];
        break;
      }
    }
    assert.equal(sortArr.getCSSProperty('text-align').value, exp.textAlignCenter);
  });

});
