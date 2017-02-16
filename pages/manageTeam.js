import React from 'react'
import Link from 'next/link'
import moment from 'moment'
import firebase from 'firebase'

import SignInMessage from '../components/signInMessage'
import Layout from '../components/layout'
import {db} from '../lib/firebase'

export default class extends React.Component {
  static async getInitialProps ({ req, query: { id } }) {
    return {id}
  }
  constructor () {
    super()
    this.state = {
      checkins: {},
      name: '',
      owner: ''
    }
  }
  componentDidMount () {
    db.fetchTeamWithId(this.props.id).then(data => {
      const {name, owner, joinCode} = data.val()
      this.setState({name, owner, joinCode})
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
    if (this.state.currentUser){
      return (
        <Layout>
          <h1 className='blue-text extra-bold'>{this.state.name}</h1>
          <p>team owner: {this.state.owner}</p>
          <p>member join code: {this.state.joinCode}</p>
          <Link href={`/checkIn?id=${this.props.id}`}><a className='btn green lighten-2 hoverable'>CHECK IN</a></Link>
          
          <h3>Recent Checkins:</h3>
          {Object.values(this.state.checkins).reverse().map(checkin => {
            return (
              <Checkin key={checkin.time} checkin={checkin} />
            )
          })}
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

const Checkin = ({checkin}) => {
  return (
    <div className="row">
      <div className="card z-depth-2 grey lighten-5">
        <div className="card-content">
          <div className="card-title">Check In from {checkin.userName} <br/> {moment(checkin.time).format('ddd, MMM D')}</div>
          <ul>
            <li><span className="blue-text darken-2 extra-bold">Previous Day: </span>{checkin.q1}</li>
            <li><span className="blue-text darken-2 extra-bold">Today: </span>{checkin.q2}</li>
            <li><span className="blue-text darken-2 extra-bold">Blockers: </span>{checkin.q3}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
