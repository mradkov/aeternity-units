var assert = require('assert')
var Units = require('../')

describe('convert', function () {
  it('should work for big unit to small unit', function () {
    assert.equal(Units.convert('1', 'AE', 'aetto'), '1000000000000000000')
    assert.equal(Units.convert('42', 'femtoae', 'aetto'), '42000')
    assert.equal(Units.convert('42.05', 'picoae', 'aetto'), '42050000')
    assert.equal(Units.convert('42.005', 'nanoae', 'aetto'), '42005000000')
    assert.equal(Units.convert('42.0005', 'microae', 'aetto'), '42000500000000')
    assert.equal(Units.convert('1', 'milliae', 'aetto'), '1000000000000000')
  })
})