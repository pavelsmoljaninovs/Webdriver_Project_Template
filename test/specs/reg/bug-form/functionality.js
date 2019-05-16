import {assert} from 'chai';
import help from '../../../helpers/helpers';
import sel from '../../../selectors/bug-form';
import exp from '../../../expected/bug-form';
import data from "../../../data/bug-form";

describe('text-fields', function () {

    describe('summary', function () {

        it('field accepts any text', function () {

            help.login();
            $(sel.btnNewBug).click();
            let element = $(sel.summaryField);
            element.setValue(data.specialCharactess);
            assert.equal(element.getValue(), data.specialCharactess);
        });

        it('field is a single line', function () {

            let element = $(sel.summaryField);
            element.setValue(data.stringWitnLinebraker);
            assert.equal(element.getValue().includes(' '), false);
        });

        it('field accepts any text', function () {

            let element = $(sel.summaryField);
            element.setValue(data.stringLong);
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });

    describe('actual', function () {

        it('field accepts any text', function () {

            let element = $(sel.actualField);
            element.setValue(data.specialCharactess);
            assert.equal(element.getValue(), data.specialCharactess);
        });

        it('field is a single line', function () {

            let element = $(sel.actualField);
            element.setValue(data.stringWitnLinebraker);
            assert.equal(element.getValue().includes(' '), false);
        });

        it('field accepts any text', function () {

            let element = $(sel.actualField);
            element.setValue(data.stringLong);
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });

    describe('expected', function () {

        it('field accepts any text', function () {

            let element = $(sel.expectedField);
            element.setValue(data.specialCharactess);
            assert.equal(element.getValue(), data.specialCharactess);
        });

        it('field is a single line', function () {

            let element = $(sel.expectedField);
            element.setValue(data.stringWitnLinebraker);
            assert.equal(element.getValue().includes(' '), false);
        });

        it('field accepts any text', function () {

            let element = $(sel.expectedField);
            element.setValue(data.stringLong);
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });

    describe('attachment', function () {

        it('field accepts any text', function () {

            let element = $(sel.attachmentField);
            element.setValue(data.specialCharactess);
            assert.equal(element.getValue(), data.specialCharactess);
        });

        it('field is a single line', function () {

            let element = $(sel.attachmentField);
            element.setValue(data.stringWitnLinebraker);
            assert.equal(element.getValue().includes(' '), false);
        });

        it('field accepts any text', function () {

            let element = $(sel.attachmentField);
            element.setValue(data.stringLong);
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });

    describe('version', function () {

        it('field accepts any text', function () {

            let element = $(sel.versionField);
            element.setValue(data.specialCharactess);
            assert.equal(element.getValue(), data.specialCharactess);
        });

        it('field is a single line', function () {

            let element = $(sel.versionField);
            element.setValue(data.stringWitnLinebraker);
            assert.equal(element.getValue().includes(' '), false);
        });

        it('field accepts any text', function () {

            let element = $(sel.versionField);
            element.setValue(data.stringLong);
            assert.equal(element.getValue().length, exp.summaryFieldLength);
        });

    });
});
