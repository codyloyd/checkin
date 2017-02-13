import React from 'react'

import Layout from '../components/layout'
import {db} from '../lib/firebase'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    return {id}
  }
  constructor () {
    super()
    this.state = {
      name: '',
      owner: ''
    }
  }
  componentDidMount () {
    db.fetchTeamWithId(this.props.id).then(data => {
      const {name, owner, joinCode} = data.val()
      this.setState({name, owner, joinCode})
    })
  }
  render () {
    return (
      <Layout>
        <h1>Check in to <span className="blue-text extra-bold">{this.state.name}</span></h1>
        <CheckInForm teamId={this.props.id}/>
      </Layout>
    )
  }
}

class CheckInForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      teamId: this.props.teamId,
      q1: '',
      q2: '',
      q3: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    const name = event.target.name
    this.setState({
      [name]: event.target.value
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state)
    db.addCheckIn(this.state)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <p className='blue-text text-darken-3'>What did you do on the last workday?</p>
        <input onChange={this.handleChange} name='q1' type='text' placeholder='What did you do on the last workday?'/>
        <p className='blue-text text-darken-3'>What are you doing today?</p>
        <input onChange={this.handleChange} name='q2' type='text' placeholder='What are you doing today?'/>
        <p className='blue-text text-darken-3'>Is there anything blocking you?</p>
        <input onChange={this.handleChange} name='q3' type='text' placeholder='Is there anything blocking you?'/>
        <button type='submit' className='btn green waves-effect waves-light'>Submit</button>
      </form>
    )
  }
}
