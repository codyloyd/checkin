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

test('fetch teams from array', assert => {
  const teams = ['-KcTJlYb35AN3NvaAn10', '-KcU5trhklFfqbepyGY9']
  const expected = [
    {
      joinCode: 'testing',
      name: 'test team',
      owner: 'test owner',
      members: ['foo', 'bar', 'baz']
    },
    {
      joinCode: 'testing2',
      name: 'test team 2',
      owner: 'test owner',
      members: ['foo', 'bar', 'baz']
    }
  ]
  db.fetchTeams(teams).then(data => {
    const actual = data
    assert.deepEqual(actual, expected, 'fetchTeams should return an array of teams')
    assert.end()
  })
})
