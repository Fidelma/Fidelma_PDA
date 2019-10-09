var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should add one number to another', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    const result = calculator.runningTotal;
    assert.equal(result, 5)
  })

  it('it should subtract one number from another', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    const result = calculator.runningTotal;
    assert.equal(result, 3)
  })

  it('it should multiply one number by another', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    const result = calculator.runningTotal;
    assert.equal(result, 15);
  })

  it('it should divide one number by another', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    const result = calculator.runningTotal;
    assert.equal(result, 3);
  })

  it('it should concatenate multiple number button clicks', function(){
    calculator.numberClick(1);
    calculator.numberClick(2);
    const result = calculator.runningTotal;
    assert.equal(result, 12);
  })

  it('it should chain multiple operations together', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=')
    const result = calculator.runningTotal;
    assert.equal(result, 6);
  })

  it('it should be able to clar the running total without affecting the calculation', function(){
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('+');
    calculator.numberClick(3);
    calculator.operatorClick('=');
    const result = calculator.runningTotal;
    assert.equal(result, 6);
  })


});
