import React from 'react'
import {db} from '../lib/firebase'

export default class TeamList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const teamsRef = db.teamsRef
    if (this.refs.listOfTeams) {
      teamsRef.on('value', teamsnap => {
        db.filteredTeams(teamsnap.val())
          .then(filteredTeams => this.setState(filteredTeams))
      })
    }
  }

  render () {
    return (
      <ul ref="listOfTeams">
        {Object.entries(this.state).map(team => {
          console.log(team)
          return (
          <ListItem
            key={team[0]}
            name={team[1].name}
            owner={team[1].owner}
            members={team[1].members.join(', ')}
            onClick={db.editTeam}
          />
          )
        })}
      </ul>
    )
  }
}

const ListItem = ({teamId, name, owner, members, onClick}) =>
  <li onClick={() => onClick(teamId, ['asdfasd', 'fdf', 'sfddsa'])}>{name} - {owner} - {members}</li>
