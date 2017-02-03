import React from 'react'
import Layout from '../components/layout'
import {db} from '../lib/firebase'
import TeamList from '../components/teamlist'

export default () => (
    <Layout title="New Team">
      <h1>New Team</h1>
      <h2>Setup a new team here</h2>
      <TeamForm />
      <h2>List of teams</h2>
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
    this.handleMembersChange = this.handleMembersChange.bind(this)
  }
  handleNameChange (event) {
    this.setState({name: event.target.value})
  }
  handleMembersChange (event) {
    this.setState({members: event.target.value})
  }
  parseMembersInput (members) {
    return members.split(' ')
  }
  render () {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleNameChange} placeholder="name"/>
        <input value={this.state.members} onChange={this.handleMembersChange} placeholder="members"/>
        <input
          type="submit"
          onClick={() =>
            db.createTeam(this.state.name, this.parseMembersInput(this.state.members))
          }
        />
      </div>
    )
  }
}
