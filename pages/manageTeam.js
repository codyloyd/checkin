import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import moment from 'moment'
import firebase from 'firebase'

import SignInMessage from '../components/signInMessage'
import Layout from '../components/layout'
import {db, auth} from '../lib/firebase'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    return {id}
  }
  constructor () {
    super()
    this.state = {
      checkins: {},
      name: '',
      owner: '',
      members: []
    }
  }
  componentDidMount () {
    db.fetchTeamWithId(this.props.id).then(data => {
      const {name, owner, joinCode, members} = data.val()
      this.setState({name, owner, joinCode, members})
    })
    db.getRecentCheckins(this.props.id).then(data => {
      if (data.val()) {
        this.setState({checkins: data.val()})
      }
    }).catch(e => console.log(e))
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
            <div className="hero is-primary">
              <div className="hero-body">
                <div className="title has-text-centered is-hidden-tablet">{this.state.name}</div>
                <div className="level is-hidden-mobile">
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">team name</p>
                    <p className='title'>{this.state.name}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">team owner</p>
                    <p className='title'>{this.state.owner}</p>
                  </div>
                </div>
                <div className="level-item has-text-centered">
                  <div>
                    <p className="heading">join code</p>
                    <p className='title'>{this.state.joinCode}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <ManagementTools
            visible={this.state.currentUser.displayName === this.state.owner}
            teamId = {this.props.id}
          />
          <div className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-3-desktop is-3-tablet">
                    <p className="has-text-centered">
                      <Link href={`/checkIn?id=${this.props.id}`}><a className='button is-primary is-medium'>CHECK IN</a></Link>
                    </p>
                  <div className="section is-hidden-mobile">
                    <p className="title has-text-centered">Members:</p>
                    {this.state.members.map(member => <Member key={member} member={member}/>)}
                  </div>
                </div>
                <div className="column is-9-desktop is-9-tablet">
                  <p className='title has-text-centered'>Recent Checkins:</p>
                  {Object.values(this.state.checkins).reverse().map(checkin => {
                    return (
                      <Checkin key={checkin.time} checkin={checkin} />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="section has-text-centered">
            <p className='button is-danger is-inverted' onClick={e => {
              db.removeUserFromTeam({userId: auth.currentUser().uid, teamId: this.props.id})
              db.removeTeamFromUser({userId: auth.currentUser().uid, teamId: this.props.id}).then(Router.push('/'))
            }
            }>Leave Team 😞</p>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <SignInMessage/>
        </Layout>
      )
    }
  }
}

const Member = ({member}) => <div className='has-text-centered subtitle'>{member}</div>

class ManagementTools extends React.Component {
  constructor () {
    super()
    this.state = {input: ''}
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange (event) {
    this.setState({input: event.target.value})
  }
  render () {
    if (this.props.visible) {
      return (
        <div className='section has-text-centered'>
          <p className='heading'>MANAGEMENT TOOLS</p>
          <div className="level">
            <div className="level-item">
              <input type="text" className='input' onChange={this.handleChange} placeholder='username to remove'/>
              <p className='button' onClick={e => {
                db.removeUserFromTeam({displayName: 'odin-bot', teamId: this.props.teamId})
                db.removeTeamFromUser({displayName: 'odin-bot', teamId: this.props.teamId})
              }
              }>Remove User</p>
            </div>
            <div className="level-item">
              <p className='button' onClick={e => {
                db.deleteTeam(this.props.teamId).then(Router.push('/'))
              }
              }>DELETE TEAM</p>
            </div>
          </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
}

const Checkin = ({checkin}) => {
  return (
    <div className="columns">
    <div className="column is-10 is-offset-1">
      <div className="card">
          <div className="card-header">
            <div className="card-header-title">
            Check In from {checkin.userName} <br/> {moment(checkin.time).format('ddd, MMM D')}
            </div>
          </div>
        <div className="card-content">
          <ul>
            <li><span className="heading">Previous Day: </span>{checkin.q1}</li>
            <li><span className="heading">Today: </span>{checkin.q2}</li>
            <li><span className="heading">Blockers: </span>{checkin.q3}</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
