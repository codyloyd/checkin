import React from 'react'
import Router from 'next/router'

import SignInMessage from '../components/signInMessage'
import Layout from '../components/layout'
import firebase from 'firebase'
import {db} from '../lib/firebase'

export default class extends React.Component {
  constructor () {
    super()
    this.state = {
      currentUser: null
    }
  }
  componentDidMount () {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({currentUser: user})
      } else {
        this.setState({currentUser: null})
      }
    }).bind(this)
  }
  render () {
    if (this.state.currentUser) {
      return (
        <Layout title="New Team">
          <h1>New Team</h1>
          <TeamForm />
        </Layout>
      )
    } else {
      return (
        <Layout>
          <SignInMessage />
        </Layout>
      )
    }
  }
}

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
