import React from 'react'
import Router from 'next/router'
import firebase from 'firebase'

import SignInMessage from '../components/signInMessage'
import Layout from '../components/layout'
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
      <Layout title="Join Team">
        <h1>Join Team</h1>
        <p>Enter the code your team manager gives you to join a team!</p>
        <JoinForm />
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

class JoinForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {code: ''}
    this.handleCodeChange = this.handleCodeChange.bind(this)
  }
  handleCodeChange (event) {
    this.setState({code: event.target.value})
  }
  render () {
    return (
      <div>
        <input value={this.state.code} onChange={this.handleCodeChange} placeholder="enter code here"/>
        <input
          type="submit"
          onClick={() => {
            db.joinTeam(this.state.code).then(teamId => {
              Router.push(`/manageTeam?id=${teamId}`)
            }).catch(e => console.log('SOMETHING WENT WRONG'))
          }
          }
        />
      </div>
    )
  }
}
