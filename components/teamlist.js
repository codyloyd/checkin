import React from 'react'
import Link from 'next/link'
import {db, auth} from '../lib/firebase'

export default class TeamList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    db.fetchUserData(auth.currentUser().uid).then(userData => {
      const teams = userData.val().teams
      db.fetchTeams(teams).then(teams => this.setState(teams))
    })
  }
  render () {
    return (
      <ul ref="listOfTeams">
        {Object.entries(this.state).map(team => {
          console.log(team)
          return (
          <ListItem
            key={team[0]}
            teamId={team[0]}
            name={team[1].name}
            owner={team[1].owner}
            joinCode={team[1].joinCode}
            members={team[1].members.join(', ')}
          />
          )
        })}
      </ul>
    )
  }
}

const ListItem = ({teamId, name, owner, members, onClick, joinCode}) =>
  <li><Link href={`/manageTeam?id=${teamId}`}>{name}</Link> - {owner} - {members} - Join Key: {joinCode}</li>
