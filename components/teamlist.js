import React from 'react'
import Link from 'next/link'
import {db} from '../lib/firebase'

export default class TeamList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const teamsRef = db.teamsRef
    if (this.refs.listOfTeams) {
      teamsRef.on('value', snap => {
        this.setState(snap.val())
      })
    }
  }
  componentWillUnmount () {
    db.teamsRef.off('value', snap => {
        this.setState(snap.val())
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
            joinKey={team[1].joinKey}
            members={team[1].members.join(', ')}
          />
          )
        })}
      </ul>
    )
  }
}

const ListItem = ({teamId, name, owner, members, onClick, joinKey}) =>
  <li><Link href={`/manageTeam?id=${teamId}`}>{name}</Link> - {owner} - {members} - Join Key: {joinKey}</li>
