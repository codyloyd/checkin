import React from 'react'
import Link from 'next/link'

export default class TeamList extends React.Component {
  render () {
    if (this.props.teams) {
      return (
        <div className="columns is-multiline">
          {Object.entries(this.props.teams).map(team => {
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
        <div className="container">
          <p className="title">WELCOME</p>
          <p>
            To get started,
            {' '}
            <Link href={'/joinTeam'}><a href="">join</a></Link>
            {' '}
            or
            {' '}
            <Link href={'/newTeam'}><a href="">create</a></Link>
            {' '}
            a new team.
          </p>
          <h5>
            If this is your first time here, feel free to join the sample team with the code
            {' '}
            <span className="heading">'testing'</span>
            {' '}
            to see what it's all about.
          </h5>
        </div>
      )
    }
  }
}

const ListItem = ({teamId, name, owner, members, onClick, joinCode}) => {
  return (
    <div className="column is-half-desktop is-half-tablet">
      <div className="card">
        <div className="card-header">
          <p className="card-header-title">{name}</p>
        </div>
        <div className="card-content">
          <p className="content">
            Team Owner: {owner}<br />
            Team Members: {members}<br />
            Join Key: {joinCode}
          </p>
        </div>
        <div className="card-footer">
          <Link prefetch href={`/manageTeam?id=${teamId}`}>
            <a className="card-footer-item" href="#">GO TO TEAM</a>
          </Link>
          <Link prefetch href={`/checkIn?id=${teamId}`}>
            <a className="card-footer-item" href="#">CHECK IN</a>
          </Link>
        </div>
      </div>
    </div>
  )
};
