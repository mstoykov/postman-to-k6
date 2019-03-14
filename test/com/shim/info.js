/* global postman pm iteration */

import test from 'ava'
import 'shim/core'

const Reset = Symbol.for('reset')
const Initial = Symbol.for('initial')
const Request = Symbol.for('request')

test.beforeEach(t => {
  postman[Reset]()
})

test('iteration', t => {
  global.__ITER = 7
  t.is(iteration, 7)
})

test('pm.info.eventName pre', t => {
  postman[Request]([], () => {
    t.is(pm.info.eventName, 'prerequest')
  })
})

test('pm.info.eventName post', t => {
  postman[Request]([], null, () => {
    t.is(pm.info.eventName, 'test')
  })
})

test('pm.info.iteration', t => {
  global.__ITER = 5
  t.is(pm.info.iteration, 5)
})

test('pm.info.iterationCount default', t => {
  t.is(pm.info.iterationCount, 1)
})

test('pm.info.iterationCount custom', t => {
  postman[Initial]({ iterations: 25 })
  t.is(pm.info.iterationCount, 25)
})
