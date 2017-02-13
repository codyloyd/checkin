import React from 'react'

import Layout from '../components/layout'
import {db} from '../lib/firebase'

export default () => (
  <Layout title="Join Team">
    <h1>Join Team</h1>
    <p>Enter the code your team manager gives you to join a team!</p>
    <JoinForm />
  </Layout>
)

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
          onClick={() =>
            db.joinTeam(this.state.code)
          }
        />
      </div>
    )
  }
}
