const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('should return 4 when inputs are 1 and 3', function () {
    const res = calculateNumber(1, 3);
    assert.strictEqual(res, 4);
  });

  it('checks case for first number rounded', function () {
    const res = calculateNumber(1.2, 3);
    assert.strictEqual(res, 4);
  });

  it('checks case for second number rounded', function () {
    const res = calculateNumber(1, 3.7);
    assert.strictEqual(res, 5);
  });

  it('checks case for both numbers rounded', function () {
    const res = calculateNumber(1.2, 3.7);
    assert.strictEqual(res, 5);
  });

  it('checks case for zero', function () {
    const res = calculateNumber(0.0, 0.0);
    assert.strictEqual(res, 0);
  });

  it('checks case for both negative numbers rounded', function () {
    const res = calculateNumber(-2.7, -3.8);
    assert.strictEqual(res, -7);
  });
});
