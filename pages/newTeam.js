import React from 'react'
import Router from 'next/router'

import Layout from '../components/layout'
import {db} from '../lib/firebase'
import TeamList from '../components/teamlist'

export default () => (
  <Layout title="New Team">
    <h1>New Team</h1>
    <TeamForm />
  </Layout>
)

class TeamForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {name: '', members: ''}
    this.handleNameChange = this.handleNameChange.bind(this)
  }
  handleNameChange (event) {
    this.setState({name: event.target.value})
  }
  render () {
    return (
      <div>
      <div className="input-field">
        <input id='name' value={this.state.name} onChange={this.handleNameChange} placeholder='Team Name'/>
      </div>
        <input
          className='btn green'
          type="submit"
          onClick={() =>
            db.createTeam(this.state.name).then(teamId =>
              Router.push(`/manageTeam?id=${teamId}`)
            )
          }
        />
      </div>
    )
  }
}
