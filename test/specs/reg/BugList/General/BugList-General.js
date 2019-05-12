import {assert} from 'chai';
import help from '../../../../helpers/helpers';
import sel from '../../../../selectors/bugList';
import exp from '../../../../expected/bugList';

// BugList page regression tests

describe('BugList', function () {

    describe('BugList-General', function () {

        describe('First column', function () {

            it('Name = Bug Summary', function () {
                help.login();
                let text = $(sel.FirstTableColumn);
                let ColumnName = text.getText();
                assert.equal(ColumnName, exp.FirstTableColumnName);
            });

            it('Text align = left', function () {
                let text = $(sel.FirstTableColumn);
                let textAling = text.getCSSProperty('text-align').value;
                assert.equal(textAling, exp.textAlignCenter);
            });

            it('Font Weight = 700', function () {
                let text = $(sel.FirstTableColumn);
                let fontWeight = text.getCSSProperty('font-weight').value;
                assert.equal(fontWeight, exp.FontWeight700);
            });

            it('Font family = Segoe UI', function () {
                let text = $(sel.FirstTableColumn);
                let fontfamily = text.getCSSProperty('font-family').value;
                assert.equal(fontfamily, exp.FontFamilySegoeUI);
            });

            it('Font size = 12px', function () {
                let text = $(sel.FirstTableColumn);
                let fontsize = text.getCSSProperty('font-size').value;
                assert.equal(fontsize, exp.FontSize12px);
            });

            it('Font color = #212529', function () {
                let text = $(sel.FirstTableColumn);
                let fontColor = text.getCSSProperty('color').parsed.hex;
                assert.equal(fontColor, exp.FontcolorHex212529);
            });
        });

        describe('Second column', function () {

            it('Name = Bug Summary', function () {
                // help.login();
                let text = $(sel.SecondTableColumn);
                let getColumnName = text.getText();
                assert.equal(getColumnName, exp.SecondTableColumnName);
            });

            it('Font Weight = 700', function () {
                let text = $(sel.SecondTableColumn);
                let textAling = text.getCSSProperty('text-align').value;
                assert.equal(textAling, exp.textAlignCenter);
            });

            it('Font Weight = 700', function () {
                let text = $(sel.SecondTableColumn);
                let fontWeight = text.getCSSProperty('font-weight').value;
                assert.equal(fontWeight, exp.FontWeight700);
            });

            it('Font family = Segoe UI', function () {
                let text = $(sel.SecondTableColumn);
                let fontfamily = text.getCSSProperty('font-family').value;
                assert.equal(fontfamily, exp.FontFamilySegoeUI);
            });

            it('Font size = 12px', function () {
                let text = $(sel.SecondTableColumn);
                let fontsize = text.getCSSProperty('font-size').value;
                assert.equal(fontsize, exp.FontSize12px);
            });

            it('Font color = #212529', function () {
                let text = $(sel.SecondTableColumn);
                let fontColor = text.getCSSProperty('color').parsed.hex;
                assert.equal(fontColor, exp.FontcolorHex212529);
            });
        });

        describe('Third column', function () {

            it('Name = Bug Summary', function () {
                // help.login();
                let text = $(sel.ThirdTableColumn);
                let getColumnName = text.getText();
                assert.equal(getColumnName, exp.ThirdTableColumnName);
            });

            it('Font Weight = 700', function () {
                let text = $(sel.SecondTableColumn);
                let textAling = text.getCSSProperty('text-align').value;
                assert.equal(textAling, exp.textAlignCenter);
            });

            it('Font Weight = 700', function () {
                let text = $(sel.SecondTableColumn);
                let fontWeight = text.getCSSProperty('font-weight').value;
                assert.equal(fontWeight, exp.FontWeight700);
            });

            it('Font family = Segoe UI', function () {
                let text = $(sel.SecondTableColumn);
                let fontfamily = text.getCSSProperty('font-family').value;
                assert.equal(fontfamily, exp.FontFamilySegoeUI);
            });

            it('Font size = 12px', function () {
                let text = $(sel.SecondTableColumn);
                let fontsize = text.getCSSProperty('font-size').value;
                assert.equal(fontsize, exp.FontSize12px);
            });

            it('Font color = #212529', function () {
                let text = $(sel.SecondTableColumn);
                let fontColor = text.getCSSProperty('color').parsed.hex;
                assert.equal(fontColor, exp.FontcolorHex212529);
            });
        });

        describe('Fourth column', function () {

            it('Name = Bug Summary', function () {
                // help.login();
                let text = $(sel.FourthTableColumn);
                let getColumnName = text.getText();
                assert.equal(getColumnName, exp.FourthTableColumnName);
            });

            it('Font Weight = 700', function () {
                let text = $(sel.SecondTableColumn);
                let textAling = text.getCSSProperty('text-align').value;
                assert.equal(textAling, exp.textAlignCenter);
            });

            it('Font Weight = 700', function () {
                let text = $(sel.SecondTableColumn);
                let fontWeight = text.getCSSProperty('font-weight').value;
                assert.equal(fontWeight, exp.FontWeight700);
            });

            it('Font family = Segoe UI', function () {
                let text = $(sel.SecondTableColumn);
                let fontfamily = text.getCSSProperty('font-family').value;
                assert.equal(fontfamily, exp.FontFamilySegoeUI);
            });

            it('Font size = 12px', function () {
                let text = $(sel.SecondTableColumn);
                let fontsize = text.getCSSProperty('font-size').value;
                assert.equal(fontsize, exp.FontSize12px);
            });

            it('Font color = #212529', function () {
                let text = $(sel.SecondTableColumn);
                let fontColor = text.getCSSProperty('color').parsed.hex;
                assert.equal(fontColor, exp.FontcolorHex212529);
            });
        });
    });

    describe('Bug Summary Column', function () {

        it('Text align = left', function () {
            let text = $(sel.SummaryColumn);
            let textAling = text.getCSSProperty('text-align').value;
            assert.equal(textAling, exp.textAlignLeft);
        });

        it('Font color = #007bff', function () {
            let text = $(sel.SummaryColumn);
            let fontColor = text.getCSSProperty('color').parsed.hex;
            assert.equal(fontColor, exp.FontcolorHex007bff);
        });
        it('Font Weight = 400', function () {
            let text = $(sel.SummaryColumn);
            let fontWeight = text.getCSSProperty('font-weight').value;
            assert.equal(fontWeight, exp.FontWeight400);
        });

        it('Font family = Segoe UI', function () {
            let text = $(sel.SummaryColumn);
            let fontfamily = text.getCSSProperty('font-family').value;
            assert.equal(fontfamily, exp.FontFamilySegoeUI);
        });

        it('Font size = 12px', function () {
            let text = $(sel.SummaryColumn);
            let fontsize = text.getCSSProperty('font-size').value;
            assert.equal(fontsize, exp.FontSize12px);
        });

    });

    describe('Priority-column', function () {

        it('Text align = center', function () {
            let text = $(sel.PriorityColumn);
            let textAling = text.getCSSProperty('text-align').value;
            console.log(textAling);
            assert.equal(textAling, exp.textAlignCenter);
        });

        it('Font color = #212529', function () {
            let text = $(sel.PriorityColumn);
            let fontColor = text.getCSSProperty('color').parsed.hex;
            assert.equal(fontColor, exp.FontcolorHex212529);
        });

        it('Font Weight = 400', function () {
            let text = $(sel.PriorityColumn);
            let fontWeight = text.getCSSProperty('font-weight').value;
            assert.equal(fontWeight, exp.FontWeight400);
        });

        it('Font family = Segoe UI', function () {
            let text = $(sel.PriorityColumn);
            let fontfamily = text.getCSSProperty('font-family').value;
            assert.equal(fontfamily, exp.FontFamilySegoeUI);
        });

        it('Font size = 12px', function () {
            let text = $(sel.PriorityColumn);
            let fontsize = text.getCSSProperty('font-size').value;
            assert.equal(fontsize, exp.FontSize12px);
        });
    });

    describe('Status-column', function () {

        it('Text align = center', function () {
            let text = $(sel.StatusColumn);
            let textAling = text.getCSSProperty('text-align').value;
            assert.equal(textAling, exp.textAlignCenter);
        });

        it('Font color = #212529', function () {
            let text = $(sel.StatusColumn);
            let fontColor = text.getCSSProperty('color').parsed.hex;
            assert.equal(fontColor, exp.whiteColor);
        });

        it('Font Weight = 400', function () {
            let text = $(sel.StatusColumn);
            let fontWeight = text.getCSSProperty('font-weight').value;
            assert.equal(fontWeight, exp.FontWeight400);
        });

        it('Font family = Segoe UI', function () {
            let text = $(sel.StatusColumn);
            let fontfamily = text.getCSSProperty('font-family').value;
            assert.equal(fontfamily, exp.FontFamilySegoeUI);
        });

        it('Font size = 12px', function () {
            let text = $(sel.StatusColumn);
            let fontsize = text.getCSSProperty('font-size').value;
            assert.equal(fontsize, exp.FontSize12px);
        });

        it('backGRDColor = #343a40', function () {
            let text = $(sel.StatusColumn);
            let backGRDColor = text.getCSSProperty('background-color').parsed.hex;
            assert.equal(backGRDColor, exp.StatusBackcolorHex343a40);
        });
    });

    describe('Assignee-column', function () {

        it('Text align = center', function () {
            let text = $(sel.AssigneeColumn);
            let textAling = text.getCSSProperty('text-align').value;
            console.log(textAling);
            assert.equal(textAling, exp.textAlignCenter);
        });

        it('Font color = #212529', function () {
            let text = $(sel.AssigneeColumn);
            let fontColor = text.getCSSProperty('color').parsed.hex;
            assert.equal(fontColor, exp.FontcolorHex212529);
        });

        it('Font Weight = 400', function () {
            let text = $(sel.AssigneeColumn);
            let fontWeight = text.getCSSProperty('font-weight').value;
            assert.equal(fontWeight, exp.FontWeight400);
        });

        it('Font family = Segoe UI', function () {
            let text = $(sel.AssigneeColumn);
            let fontfamily = text.getCSSProperty('font-family').value;
            assert.equal(fontfamily, exp.FontFamilySegoeUI);
        });

        it('Font size = 12px', function () {
            let text = $(sel.AssigneeColumn);
            let fontsize = text.getCSSProperty('font-size').value;
            assert.equal(fontsize, exp.FontSize12px);
        });
    });
});
