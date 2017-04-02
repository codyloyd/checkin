import React from 'react'

class ManagementTools extends React.Component {
  constructor () {
    super()
    this.state = {input: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.setState({input: event.target.value})
  }
  render () {
    if (this.props.visible) {
      return (
        <div className="section has-text-centered">
          <p className="heading">MANAGEMENT TOOLS</p>
          <div className="level">
            <div className="level-item">
              <input
                type="text"
                className="input"
                onChange={this.handleChange}
                placeholder="username to remove"
              />
              <p
                className="button"
                onClick={e => {
                  db.removeUserFromTeam({
                    displayName: this.state.input,
                    teamId: this.props.teamId
                  })
                  db.removeTeamFromUser({
                    displayName: this.state.input,
                    teamId: this.props.teamId
                  })
                }}
              >
                Remove User
              </p>
            </div>
            <div className="level-item">
              <p
                className="button"
                onClick={e => {
                  db.deleteTeam(this.props.teamId).then(Router.push('/'))
                }}
              >
                DELETE TEAM
              </p>
            </div>
          </div>
        </div>
      )
    } else {
      return <div />
    }
  }
}

export default ManagementTools
