import { assert } from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report';
import help from '../../../helpers/helpers';

describe('Summary Input Field Properties', function () {

  it('Summary Input Field is a text field and accepts only one line', function () {
    help.login();
    $(sel.bugReport).click();
    $(sel.edit).click();
    assert.isTrue(help.is1LineTextField(sel.summary));
  });

  it('Font Family', function () {
    let fontFamily = $(sel.summary).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.summary).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.summary).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let fontColor = $(sel.summary).getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.fontColor);
  });

  it('Text Align', function () {
    let textAlign = $(sel.summary).getCSSProperty('text-align').value;
    assert.equal(textAlign, exp.textAlign);
  });

});

describe('Actual Input Field Properties', function () {

  it('Actual Input Field is a text field and accepts only one line', function () {
    assert.isTrue(help.is1LineTextField(sel.actual));
  });

  it('Font Family', function () {
    let fontFamily = $(sel.actual).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.actual).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.actual).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let fontColor = $(sel.actual).getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.fontColor);
  });

  it('Text Align', function () {
    let textAlign = $(sel.actual).getCSSProperty('text-align').value;
    assert.equal(textAlign, exp.textAlign);
  });

});

describe('Expected Input Field Properties', function () {

  it('Expected Input Field is a text field and accepts only one line', function () {
    assert.isTrue(help.is1LineTextField(sel.expected));
  });

  it('Font Family', function () {
    let fontFamily = $(sel.expected).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.expected).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.expected).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let fontColor = $(sel.expected).getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.fontColor);
  });

  it('Text Align', function () {
    let textAlign = $(sel.expected).getCSSProperty('text-align').value;
    assert.equal(textAlign, exp.textAlign);
  });

});

describe('Attach Input Field Properties', function () {

  it('Attach Input Field is a text field and accepts only one line', function () {
    assert.isTrue(help.is1LineTextField(sel.attach));
  });

  it('Font Family', function () {
    let fontFamily = $(sel.attach).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.attach).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.attach).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let fontColor = $(sel.attach).getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.fontColor);
  });

  it('Text Align', function () {
    let textAlign = $(sel.attach).getCSSProperty('text-align').value;
    assert.equal(textAlign, exp.textAlign);
  });

});

describe('Version Input Field Properties', function () {

  it('Version Input Field is a text field and accepts only one line', function () {
    assert.isTrue(help.is1LineTextField(sel.version));
  });

  it('Font Family', function () {
    let fontFamily = $(sel.version).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.version).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.version).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let fontColor = $(sel.version).getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.fontColor);
  });

  it('Text Align', function () {
    let textAlign = $(sel.version).getCSSProperty('text-align').value;
    assert.equal(textAlign, exp.textAlign);
  });

});

describe('Text Area Properties', function () {

  it('Text Area is a text field and accepts multiple lines', function () {
    assert.isTrue(help.isTextArea(sel.text));
  });

  it('Font Family', function () {
    let fontFamily = $(sel.text).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.text).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.text).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let fontColor = $(sel.text).getCSSProperty('color').parsed.hex;
    assert.equal(fontColor, exp.fontColor);
  });

  it('Text Align', function () {
    let textAlign = $(sel.text).getCSSProperty('text-align').value;
    assert.equal(textAlign, exp.textAlign);
  });

});

describe('Assignee Drop-Down List Properties', function () {

  it('Font Family', function () {
    let fontFamily = $(sel.assigneeDropdown).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.assigneeDropdown).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.assigneeDropdown).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let dropdownFontColor = $(sel.assigneeDropdown).getCSSProperty('color').parsed.hex;
    assert.equal(dropdownFontColor, exp.dropdownFontColor);
  });

  it('Text Align', function () {
    let dropdownTextAlign = $(sel.assigneeDropdown).getCSSProperty('text-align').value;
    assert.equal(dropdownTextAlign, exp.dropdownTextAlign);
  });

});

describe('Repro Drop-Down List Properties', function () {

  it('Font Family', function () {
    let fontFamily = $(sel.reproDropdown).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.reproDropdown).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.reproDropdown).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let dropdownFontColor = $(sel.reproDropdown).getCSSProperty('color').parsed.hex;
    assert.equal(dropdownFontColor, exp.dropdownFontColor);
  });

  it('Text Align', function () {
    let dropdownTextAlign = $(sel.reproDropdown).getCSSProperty('text-align').value;
    assert.equal(dropdownTextAlign, exp.dropdownTextAlign);
  });

});

describe('Severity Drop-Down List Properties', function () {

  it('Font Family', function () {
    let fontFamily = $(sel.severityDropdown).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.severityDropdown).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.severityDropdown).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let dropdownFontColor = $(sel.severityDropdown).getCSSProperty('color').parsed.hex;
    assert.equal(dropdownFontColor, exp.dropdownFontColor);
  });

  it('Text Align', function () {
    let dropdownTextAlign = $(sel.severityDropdown).getCSSProperty('text-align').value;
    assert.equal(dropdownTextAlign, exp.dropdownTextAlign);
  });

});

describe('Priority Drop-Down List Properties', function () {

  it('Font Family', function () {
    let fontFamily = $(sel.priorityDropdown).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.priorityDropdown).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.priorityDropdown).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Font Color', function () {
    let dropdownFontColor = $(sel.priorityDropdown).getCSSProperty('color').parsed.hex;
    assert.equal(dropdownFontColor, exp.dropdownFontColor);
  });

  it('Text Align', function () {
    let dropdownTextAlign = $(sel.priorityDropdown).getCSSProperty('text-align').value;
    assert.equal(dropdownTextAlign, exp.dropdownTextAlign);
  });

});

describe('Edit Mode Top Submit Button Appearance Properties', function () {

  it('Background Color', function () {
    $(sel.summary).moveTo();
    browser.pause(200);
    let submitButtonColor = $(sel.submitTop).getCSSProperty('background-color').parsed.hex;
    assert.equal(submitButtonColor, exp.submitButtonColor);
  });

  it('Hover Background Color', function () {
    $(sel.submitTop).moveTo();
    browser.pause(200);
    let submitButtonHoverColor = $(sel.submitTop).getCSSProperty('background-color').parsed.hex;
    assert.equal(submitButtonHoverColor, exp.submitButtonHoverColor);
  });

  it('Font Family', function () {
    let fontFamily = $(sel.submitTop).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.submitTop).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.submitTop).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Text Align', function () {
    let buttonTextAlign = $(sel.submitTop).getCSSProperty('text-align').value;
    assert.equal(buttonTextAlign, exp.buttonTextAlign);
  });

  it('Font Color', function () {
    let buttonFontColor = $(sel.submitTop).getCSSProperty('color').parsed.hex;
    assert.equal(buttonFontColor, exp.buttonFontColor);
  });

  it('Width of the Button is 100% of the Application Width', function () {
    let submitButtonWidth = $(sel.submitTop).getSize('width');
    let containerWidth = $(sel.containerWidth).getSize('width');
    assert.equal(submitButtonWidth, containerWidth);
  });

});

describe('Edit Mode Bottom Submit Button Appearance Properties', function () {

  it('Background Color', function () {
    $(sel.summary).moveTo();
    browser.pause(200);
    let submitButtonColor = $(sel.submitBottom).getCSSProperty('background-color').parsed.hex;
    assert.equal(submitButtonColor, exp.submitButtonColor);
  });

  it('Hover Background Color', function () {
    $(sel.submitBottom).moveTo();
    browser.pause(200);
    let submitButtonHoverColor = $(sel.submitBottom).getCSSProperty('background-color').parsed.hex;
    assert.equal(submitButtonHoverColor, exp.submitButtonHoverColor);
  });

  it('Font Family', function () {
    let fontFamily = $(sel.submitBottom).getCSSProperty('font-family').value;
    assert.equal(fontFamily, exp.fontFamily);
  });

  it('Font Size', function () {
    let fontSize = $(sel.submitBottom).getCSSProperty('font-size').parsed.value;
    assert.equal(fontSize, exp.fontSize);
  });

  it('Font Weight', function () {
    let fontWeight = $(sel.submitBottom).getCSSProperty('font-weight').value;
    assert.equal(fontWeight, exp.fontWeight);
  });

  it('Text Align', function () {
    let buttonTextAlign = $(sel.submitBottom).getCSSProperty('text-align').value;
    assert.equal(buttonTextAlign, exp.buttonTextAlign);
  });

  it('Font Color', function () {
    let buttonFontColor = $(sel.submitBottom).getCSSProperty('color').parsed.hex;
    assert.equal(buttonFontColor, exp.buttonFontColor);
  });

  it('Width of the Button is 100% of the Application Width', function () {
    let submitButtonWidth = $(sel.submitBottom).getSize('width');
    let containerWidth = $(sel.containerWidth).getSize('width');
    assert.equal(submitButtonWidth, containerWidth);
  });

});

describe('Edit Mode Top Submit Button Behavior', function () {

  it('Top Submit Button appears on the top (between Control Bar and Bug Summary) in Edit mode', function () {
    assert.isTrue(help.locationCheck3Elemets(sel.cancel, sel.submitTop, sel.summary));
  });

  it('Top Submit Button disappears in Default Mode', function () {
    $(sel.submitTop).click();
    $(sel.edit).waitForDisplayed(1500);
    assert.equal($(sel.submitTop).isDisplayed(), false);
  });

  it('Top Submit Button switches mode to the Default One', function () {
    assert.isTrue($(sel.edit).isDisplayed());
  });

});

describe('Edit Mode Bottom Submit Button Behavior', function () {

  it('Bottom Submit Button appears at the bottom (between Required text and Footer) in Edit mode', function () {
    $(sel.edit).click();
    $(sel.submitBottom).waitForDisplayed(1500);
    assert.isTrue(help.locationCheck3Elemets(sel.required, sel.submitBottom, sel.footer));
  });

  it('Bottom Submit Button disappears in Default Mode', function () {
    $(sel.submitBottom).click();
    $(sel.edit).waitForDisplayed(1500);
    assert.equal($(sel.submitBottom).isDisplayed(), false);
  });

  it('Bottom Submit Button switches mode to the Default One', function () {
    assert.isTrue($(sel.edit).isDisplayed());
  });

});
