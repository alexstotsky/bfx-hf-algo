/* eslint-env mocha */
'use strict'

const assert = require('assert')
const processParams = require('../../../../lib/ococo/meta/process_params')

const params = {
  _symbol: 'tLEOUSD',
  _future: false,

  cancelDelaySec: 1,
  submitDelaySec: 1,
  action: 'Sell',
  ocoAction: 'Sell',
  lev: 3.3,

  amount: 6,
  ocoAmount: 6
}

describe('ococo:meta:process_params', () => {
  it('process params correctly', () => {
    assert.strictEqual(processParams(params).symbol, 'tLEOUSD')
    assert.ok(!processParams(params).lev)
    assert.strictEqual(processParams(params).cancelDelay, 1000)
    assert.strictEqual(processParams(params).submitDelay, 1000)
    assert.strictEqual(processParams({ ...params, cancelDelaySec: null }).cancelDelay, 1000)
    assert.strictEqual(processParams({ ...params, submitDelaySec: null }).submitDelay, 2000)
    assert.strictEqual(processParams({ ...params, action: 'Buy' }).amount, 6)
    assert.strictEqual(processParams({ ...params, ocoAction: 'Buy' }).ocoAmount, 6)
    assert.strictEqual(processParams(params).amount, -6)
    assert.strictEqual(processParams(params).ocoAmount, -6)
  })
})
