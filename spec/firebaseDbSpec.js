import test from 'tape'
import {db} from '../lib/firebase'

test('fetch single team with Key', assert => {
  const teamId = 'testing'
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
  const teams = ['testing', 'testing2']
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

test('fetch user data from DB', assert => {
  const userId = 'xnQTknyqsGgswUEiL4xpcQlYv0v1'
  const expected = {teams: ['testing', 'testing2'], username: 'codyloyd'}
  db.fetchUserData(userId).then(data => {
    const actual = data.val()
    assert.deepEqual(actual, expected, 'fetchUserData should return correct user data')
    assert.end()
  })
})

test('fetch team with teamCode', assert => {
  const joinCode = 'testing'
  const expected = {
    testing: {
      joinCode: 'testing',
      name: 'test team',
      owner: 'test owner',
      members: ['foo', 'bar', 'baz']
    }
  }
  db.fetchTeamWithCode(joinCode).then(data => {
    const actual = data.val()
    assert.deepEqual(actual, expected, 'fetchTeamWithCode should fetch a team')
    assert.end()
  })
  .catch(e => console.log(e))
})
