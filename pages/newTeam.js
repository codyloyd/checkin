import React from 'react'

import Layout from '../components/layout'
import {db} from '../lib/firebase'
import TeamList from '../components/teamlist'

export default () => (
  <Layout title="New Team">
    <h1>New Team</h1>
    <h2>Setup a new team here</h2>
    <TeamForm />
    <p>List of teams (for testing)</p>
    <TeamList />
  </Layout>
)

// we can refactor these out into their own files later..
// for now it's easier if we keep it all together
// Eric would yell at us for using classes here....
// I'd like to get around it, but I don't think there is a way with firebase
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
        <label htmlFor="name">Team Name</label>
        <input id='name' value={this.state.name} onChange={this.handleNameChange} />
      </div>
        <input
          type="submit"
          onClick={() =>
            db.createTeam(this.state.name)
          }
        />
      </div>
    )
  }
}
