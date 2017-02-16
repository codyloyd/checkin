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
    this.state = {
      code: '',
      invalidCode: false
    }
    this.handleCodeChange = this.handleCodeChange.bind(this)
    this.handleError = this.handleError.bind(this)
  }
  handleCodeChange (event) {
    this.setState({code: event.target.value})
  }
  handleError (e) {
    this.setState({invalidCode: true})
    console.log('Invalid join code', e)
  }
  render () {
    const invalidCode = this.state.invalidCode
    return (
      <div>
        <input className={invalidCode ? 'red' : ''} value={this.state.code} onChange={this.handleCodeChange} placeholder="enter code here"/>
        {invalidCode &&
          <div style={{color: 'red'}}>Please enter a valid code<br /><br /></div>
        }
        <input
          className='btn green lighten-2 hoverable'
          type="submit"
          onClick={() => {
            db.joinTeam(this.state.code).then(teamId => {
              Router.push(`/manageTeam?id=${teamId}`)
            }).catch(e => this.handleError(e))
          }
          }
        />
      </div>
    )
  }
}
