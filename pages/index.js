import React from 'react'
import firebase from 'firebase'

import Layout from '../components/layout'
import TeamList from '../components/teamlist'
import SignInMessage from '../components/signInMessage'

const Title = ({title}) => <h1>{title}</h1>

export default class extends React.Component {
  constructor () {
    super()
    this.state = {currentUser: null}
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
        <Layout>
          <Dashboard />
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

const Dashboard = props => {
  return (
  <div>
    <Title title="Dashboard" />
    <TeamList />
  </div>
  )
}
