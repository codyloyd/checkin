import React from 'react'
import Layout from '../components/layout'
import {db} from '../lib/firebase'
import TeamList from '../components/teamlist'

export default () => (
    <Layout title="New Team">
      <h1>New Team</h1>
      <h2>Setup a new team here</h2>
      <TeamForm />
      <h2>List of teams... we don't really need this list, but it's useful for testing and debugging.  It will likely disappear when we nail down the UI later</h2>
      <TeamList />
      <p>Agreed. We should have a toast or some kind of pop up confirming the team has been created (or error), then redirect them to the Dashboard (index.js) where they will see the new team listed.</p>
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
        <input value={this.state.name} onChange={this.handleNameChange} placeholder="name"/>
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
