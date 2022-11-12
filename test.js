import assert from 'node:assert/strict'
import test from 'node:test'
import {DatalistInterface} from './index.js'

test('#is(value)', function () {
  const fish = new DatalistInterface(['shark', 'tuna'])

  assert.equal(
    fish.is('shark'),
    true,
    'should return true if a value is in the database'
  )

  assert.equal(
    fish.is('unicorn'),
    false,
    'should return false if a value is not in the database'
  )

  assert.equal(
    fish.is('unicorn'),
    fish.has('unicorn'),
    '`has` should be an alias for `is`'
  )
})

test('#toString()', function () {
  const fish = new DatalistInterface(['shark', 'tuna'])

  assert.equal(
    fish.toString(),
    'shark,tuna',
    'should return values delimited by commas'
  )
})

test('#all()', async function (t) {
  const mammals = new DatalistInterface(['colugo', 'human'])
  const all = mammals.all()

  assert.ok(Array.isArray(all), 'should return an array')

  assert.deepEqual(
    all,
    ['colugo', 'human'],
    'should return all values in context'
  )

  await t.test('should be immutable', function () {
    all.push('unicorn')

    assert.equal(mammals.is('unicorn'), false)
    assert.equal(mammals.all().indexOf('unicorn'), -1)
  })

  assert.deepEqual(
    mammals.all(),
    mammals.valueOf(),
    '`valueOf` should be an alias for `all`'
  )

  assert.deepEqual(
    mammals.all(),
    mammals.toJSON(),
    '`toJSON` should be an alias for `all`'
  )
})

test('#add() and #remove()', function () {
  const mammals = new DatalistInterface(['colugo', 'human'])

  assert.equal(mammals.add('unicorn'), mammals, '`add` should return self')
  assert.equal(mammals.is('unicorn'), true, 'should add values')

  assert.equal(
    mammals.remove('unicorn'),
    mammals,
    '`remove` should return self'
  )
  assert.equal(mammals.is('unicorn'), false, 'should remove values')

  assert.deepEqual(
    mammals.add('unicorn', 'doge').all(),
    ['colugo', 'human', 'unicorn', 'doge'],
    'should add all arguments'
  )

  assert.deepEqual(
    mammals.remove('unicorn', 'doge').all(),
    ['colugo', 'human'],
    'should remove all arguments'
  )

  assert.deepEqual(
    mammals.remove('unicorn').all(),
    ['colugo', 'human'],
    'should ignore removing non-existing `value`'
  )
})
