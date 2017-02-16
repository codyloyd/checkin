import React from 'react'
import Link from 'next/link'

import {db, auth} from '../lib/firebase'

export default class TeamList extends React.Component {
  constructor (props) {
    super(props)
    this.state
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
    if (this.state) {
      return (
        <div className='columns is-multiline'>
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
    } else {
      return (
        <div>
          <h5>You need to <Link href={'/joinTeam'}><a href="">join</a></Link> or <Link href={'/newTeam'}><a href="">create</a></Link> a new team</h5>
          <h5>If this is your first time here, feel free to join the sample team with the code <span className='extra-bold'>'testing'</span></h5>
        </div>
      )
    }
  }
}

const ListItem = ({teamId, name, owner, members, onClick, joinCode}) => {
  return (
    <div className="column is-half-desktop is-half-tablet">
      <div className='card'>
          <div className="card-header">
            <p className='card-header-title'>{name}</p>
          </div>
        <div className="card-content">
          <p className="content">
          Team Owner: {owner}<br/>
          Team Members: {members}<br/>
          Join Key: {joinCode}
          </p>
        </div>
          <div className="card-footer">
            <Link href={`/manageTeam?id=${teamId}`}><a className='card-footer-item' href="#">GO TO TEAM</a></Link>
            <Link href={`/checkIn?id=${teamId}`}><a className='card-footer-item' href="#">CHECK IN</a></Link>
          </div>
      </div>
    </div>
  )
}
