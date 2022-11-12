import test from 'tape'
import {DatalistInterface} from './index.js'

test('#is(value)', function (t) {
  const fish = new DatalistInterface(['shark', 'tuna'])

  t.equal(
    fish.is('shark'),
    true,
    'should return true if a value is in the database'
  )

  t.equal(
    fish.is('unicorn'),
    false,
    'should return false if a value is not in the database'
  )

  t.equal(
    fish.is('unicorn'),
    fish.has('unicorn'),
    '`has` should be an alias for `is`'
  )

  t.end()
})

test('#toString()', function (t) {
  const fish = new DatalistInterface(['shark', 'tuna'])

  t.equal(
    fish.toString(),
    'shark,tuna',
    'should return values delimited by commas'
  )

  t.end()
})

test('#all()', function (t) {
  const mammals = new DatalistInterface(['colugo', 'human'])
  const all = mammals.all()

  t.ok(Array.isArray(all), 'should return an array')

  t.deepEqual(all, ['colugo', 'human'], 'should return all values in context')

  t.test('should be immutable', function (st) {
    all.push('unicorn')

    st.equal(mammals.is('unicorn'), false)
    st.equal(mammals.all().indexOf('unicorn'), -1)
    st.end()
  })

  t.deepEqual(
    mammals.all(),
    mammals.valueOf(),
    '`valueOf` should be an alias for `all`'
  )

  t.deepEqual(
    mammals.all(),
    mammals.toJSON(),
    '`toJSON` should be an alias for `all`'
  )

  t.end()
})

test('#add() and #remove()', function (t) {
  const mammals = new DatalistInterface(['colugo', 'human'])

  t.equal(mammals.add('unicorn'), mammals, '`add` should return self')
  t.equal(mammals.is('unicorn'), true, 'should add values')

  t.equal(mammals.remove('unicorn'), mammals, '`remove` should return self')
  t.equal(mammals.is('unicorn'), false, 'should remove values')

  t.deepEqual(
    mammals.add('unicorn', 'doge').all(),
    ['colugo', 'human', 'unicorn', 'doge'],
    'should add all arguments'
  )

  t.deepEqual(
    mammals.remove('unicorn', 'doge').all(),
    ['colugo', 'human'],
    'should remove all arguments'
  )

  t.deepEqual(
    mammals.remove('unicorn').all(),
    ['colugo', 'human'],
    'should ignore removing non-existing `value`'
  )

  t.end()
})
