import { assert } from 'chai';
import exp from '../../../expected/filter-bar'
import sel from '../../../selectors/filter-bar';
import help from '../../../helpers/helpers';

describe('filter-bar general',()=>{

  it('filter exist', ()=>{
    help.login();
    assert.exists($$(sel.filterBar)[1]);
  })

  it('Filter Bar has Assigned To Me button',()=>{
    assert($(sel.btnToMe).isDisplayed());
  })

  it('Assigned To Me button has text-align: center',()=>{
    assert.equal($(sel.btnToMe).getCSSProperty('text-align').value, exp.textAlign);
  })

  it('Assigned To Me button has background-color: #f8f9fa',()=>{
    assert.equal($(sel.btnToMe).getCSSProperty('background-color').parsed.hex, exp.backgroundColor);
  })

  it('Assigned To Me button has font-size: 1rem (16px)',()=>{
    assert.equal($(sel.btnToMe).getCSSProperty('font-size').value ,exp.fontSize);
  })

  it('Assigned To Me button has font-family: Segoe UI, sans-serif',()=>{
    assert.equal($(sel.btnToMe).getCSSProperty('font-family').value ,exp.fontFamily);
  })

  it('Assigned To Me button has font-weight: 400',()=>{
    assert($(sel.btnToMe).isDisplayed());
  })

  it('Assigned To Me button has text-align: center',()=>{
    assert.equal($(sel.btnToMe).getCSSProperty('text-align').value, exp.textAlign);
  })

  it('Assigned To Me button has background-color: #f8f9fa',()=>{
    assert.equal($(sel.btnToMe).getCSSProperty('background-color').parsed.hex, exp.backgroundColor);
  })

  it('Assigned To Me button has font-size: 1rem (16px)',()=>{
    assert.equal($(sel.btnToMe).getCSSProperty('font-size').value ,exp.fontSize);
  })

  it('Assigned To Me button has font-family: Segoe UI, sans-serif',()=>{
    assert.equal($(sel.btnToMe).getCSSProperty('font-family').value ,exp.fontFamily);
  })
  it('Assigned To Me button has color: #212529',()=>{
    assert.equal($(sel.btnToMe).getCSSProperty('color').parsed.hex ,exp.color);
  })

  it('Filter Bar has Open button',()=>{
    assert($(sel.btnOpen).isDisplayed());
  })

  it('Open button has text-align: center',()=>{
    assert.equal($(sel.btnOpen).getCSSProperty('text-align').value, exp.textAlign);
  })

  it('Open button has background-color: #f8f9fa',()=>{
    assert.equal($(sel.btnOpen).getCSSProperty('background-color').parsed.hex, exp.backgroundColor);
  })

  it('Open button has font-size: 1rem (16px)',()=>{
    assert.equal($(sel.btnOpen).getCSSProperty('font-size').value ,exp.fontSize);
  })

  it('Open button has font-family: Segoe UI, sans-serif',()=>{
    assert.equal($(sel.btnOpen).getCSSProperty('font-family').value ,exp.fontFamily);
  })
  it('Open button has color: #212529',()=>{
    assert.equal($(sel.btnOpen).getCSSProperty('color').parsed.hex ,exp.color);
  })

  it('Filter Bar has Closed button',()=>{
    assert($(sel.btnClosed).isDisplayed());
  })

  it('Closed button has text-align: center',()=>{
    assert.equal($(sel.btnClosed).getCSSProperty('text-align').value, exp.textAlign);
  })

  it('Closed button has background-color: #f8f9fa',()=>{
    assert.equal($(sel.btnClosed).getCSSProperty('background-color').parsed.hex, exp.backgroundColor);
  })

  it('Closed button has font-size: 1rem (16px)',()=>{
    assert.equal($(sel.btnClosed).getCSSProperty('font-size').value ,exp.fontSize);
  })

  it('Closed button has font-family: Segoe UI, sans-serif',()=>{
    assert.equal($(sel.btnClosed).getCSSProperty('font-family').value ,exp.fontFamily);
  })
  it('Closed button has color: #212529',()=>{
    assert.equal($(sel.btnClosed).getCSSProperty('color').parsed.hex ,exp.color);
  })
})