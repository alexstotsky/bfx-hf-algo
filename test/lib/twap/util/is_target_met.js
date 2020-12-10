/* eslint-env mocha */
'use strict'

const assert = require('assert')
const isTargetMet = require('../../../../lib/twap/util/is_target_met')

describe('twap:util:is_target_met', () => {
  it('verifies that the price target is met', () => {
    assert.ok(isTargetMet({ priceTarget: 1, priceDelta: 0 }, 1))
    assert.ok(isTargetMet({ priceTarget: 1, priceDelta: 0.2 }, 1.2))
    assert.ok(!isTargetMet({ priceTarget: 1, priceDelta: 0.2 }, 1.3))
  })

  it('verifies that the price target is met, floats', () => {
    assert.ok(isTargetMet({ priceTarget: 2.4, priceDelta: 0 }, 2.4))
    assert.ok(isTargetMet({ priceTarget: 2.4, priceDelta: 2.3 }, 4.7))
    assert.ok(!isTargetMet({ priceTarget: 2.4, priceDelta: 2.3 }, 4.8))
  })
})
