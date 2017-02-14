import React from 'react'
import Link from 'next/link'

import {db, auth} from '../lib/firebase'

export default class TeamList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    if (auth.currentUser()) {
      db.currentUserRef().on('value', snap => {
        db.fetchUserData(auth.currentUser().uid).then(userData => {
          const teams = userData.val().teams
          if (teams) {
            db.fetchTeams(teams).then(teams => this.setState(teams))
          }
        })
      })
    }
  }
  render () {
    return (
      <div>
        {Object.entries(this.state).map(team => {
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
      </div>
    )
  }
}

const ListItem = ({teamId, name, owner, members, onClick, joinCode}) => {
  return (
    <div className="row">
      <div className="card z-depth-2 grey lighten-5 hoverable">
        <div className="card-content">
          <div className="card-title">
            {name}
          </div>
          <p className="flow-text">
          Team Owner: {owner}
          </p>
          <p className="flow-text">
          Team Members: {members}
          </p>
          <p className="flow-text">
          Join Key: {joinCode}
          </p>
        </div>
          <div className="card-action">
            <Link href={`/manageTeam?id=${teamId}`}><a href="#">GO TO TEAM</a></Link>
            <Link href={`/checkIn?id=${teamId}`}><a href="#">CHECK IN</a></Link>
          </div>
      </div>
    </div>
  )
}
