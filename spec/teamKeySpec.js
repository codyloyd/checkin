import test from 'tape'
import teamCode from '../lib/teamKey'

test('teamCode', (assert) => {
  const actual = teamCode()
  assert.equal(actual.length, 4,
    'key should be 4 characters long')
  assert.end()
})


// I wanted to test if the key matched a regex.. 
// This might not be the best way to accomplish that.
test('teamCode', (assert) => {
  const actual = teamCode()
  const expected = actual.match(/[a-z]{4}/)[0]
  assert.equal(expected, actual,
    'key should be 4 lowercase letters')
  assert.end()
})
