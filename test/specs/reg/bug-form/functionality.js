import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-form';
import exp from '../../../expected/bug-form';

describe('text-fields', function () {

    describe('summary', function () {

        it('field accepts any text', function () {
            help.login();
            $(sel.btnNewBug).click();
            let checkStr = help.generateRandomStringWithSpesChar();
            let element = $(sel.summaryField);
            element.setValue(checkStr);
            assert.equal(element.getValue(), checkStr.substr(0,100));
        });

        it('field is a single line', function () {
            let element = $(sel.summaryField);
            let strWithBr = help.generateRandomStringWithBreak();
            element.setValue(strWithBr);
            assert.equal(element.getValue().includes('\n'), false);
        });

        it('field accepts any text', function () {
            let element = $(sel.summaryField);
            element.setValue(help.generateRandomStringWithSpesChar());
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });

    describe('actual', function () {

        it('field accepts any text', function () {
            let checkStr = help.generateRandomStringWithSpesChar();
            let element = $(sel.actualField);
            element.setValue(checkStr);
            assert.equal(element.getValue(), checkStr.substr(0,100));
        });

        it('field is a single line', function () {
            let element = $(sel.summaryField);
            let strWithBr = help.generateRandomStringWithBreak();
            element.setValue(strWithBr);
            assert.equal(element.getValue().includes('\n'), false);
        });

        it('field accepts any text', function () {
            let element = $(sel.actualField);
            element.setValue(help.generateRandomStringWithSpesChar());
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });

    describe('expected', function () {

        it('field accepts any text', function () {
            let checkStr = help.generateRandomStringWithSpesChar();
            let element = $(sel.expectedField);
            element.setValue(checkStr);
            assert.equal(element.getValue(), checkStr.substr(0,100));
        });

        it('field is a single line', function () {
            let element = $(sel.expectedField);
            let strWithBr = help.generateRandomStringWithBreak();
            element.setValue(strWithBr);
            assert.equal(element.getValue().includes('\n'), false);
        });

        it('field accepts any text', function () {
            let element = $(sel.expectedField);
            element.setValue(help.generateRandomStringWithSpesChar());
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });

    describe('attachment', function () {

        it('field accepts any text', function () {
            let checkStr = help.generateRandomStringWithSpesChar();
            let element = $(sel.attachmentField);
            element.setValue(checkStr);
            assert.equal(element.getValue(), checkStr.substr(0,100));
        });

        it('field is a single line', function () {
            let element = $(sel.attachmentField);
            let strWithBr = help.generateRandomStringWithBreak();
            element.setValue(strWithBr);
            assert.equal(element.getValue().includes('\n'), false);
        });

        it('field accepts any text', function () {
            let element = $(sel.attachmentField);
            element.setValue(help.generateRandomStringWithSpesChar());
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });

    describe('version', function () {

        it('field accepts any text', function () {
            let checkStr = help.generateRandomStringWithSpesChar();
            let element = $(sel.versionField);
            element.setValue(checkStr);
            assert.equal(element.getValue(), checkStr.substr(0,100));
        });

        it('field is a single line', function () {
            let element = $(sel.versionField);
            let strWithBr = help.generateRandomStringWithBreak();
            element.setValue(strWithBr);
            assert.equal(element.getValue().includes('\n'), false);
        });

        it('field accepts any text', function () {
            let element = $(sel.versionField);
            element.setValue(help.generateRandomStringWithSpesChar());
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });
});
