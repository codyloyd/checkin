import test from 'tape'
import {db} from '../lib/firebase'

test('fetch single team with Key', assert => {
  const teamId = '-KcTJlYb35AN3NvaAn10'
  const expected = {
    joinCode: 'testing',
    name: 'test team',
    owner: 'test owner',
    members: ['foo', 'bar', 'baz']
  }
  db.fetchTeamWithId(teamId).then(data => {
    const actual = data.val()
    assert.deepEqual(actual, expected, 'fetchTeamWithId should fetch a team')
    assert.end()
  })
  .catch(e => console.log(e))
})
