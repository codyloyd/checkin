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
      <div className='section'>
      <div className="container">
        <p className="title">Join Team</p>
        <p className="subtitle">Enter the code your team manager has provided you.</p>
        <p className="control">
          <input className={invalidCode ? 'input is-danger' : 'input'} value={this.state.code} onChange={this.handleCodeChange} placeholder="enter code here"/>
          {invalidCode &&
            <p className='help is-danger'>Please enter a valid code<br /><br /></p>
          }
        </p>
        <p className="control">
          <input
            className='button is-primary'
            type="submit"
            onClick={() => {
              db.joinTeam(this.state.code).then(teamId => {
                Router.push(`/manageTeam?id=${teamId}`)
              }).catch(e => this.handleError(e))
            }
            }
          />
        </p>
      </div>
      </div>
    )
  }
}
