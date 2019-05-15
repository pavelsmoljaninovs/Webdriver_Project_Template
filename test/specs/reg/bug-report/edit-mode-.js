import {assert} from 'chai';
import sel from '../../../selectors/bug-report';
import exp from '../../../expected/bug-report';
import help from '../../../helpers/helpers';

describe('Summary Input Field Properties', function () {

    it('Summary Input Field is a text filed and accepts only one line', function () {
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

    it('Actual Input Field is a text filed and accepts only one line', function () {
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

    it('Expected Input Field is a text filed and accepts only one line', function () {
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

    it('Attach Input Field is a text filed and accepts only one line', function () {
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
