import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
// import moment from 'moment'
import withRedux from 'next-redux-wrapper'
import {db, auth} from '../../lib/firebase'

import configureApp from '../../lib/configureApp'

import SignInMessage from '../../components/signInMessage'
import Layout from '../../components/layout'
import TeamDetails from './TeamDetails'
import ManagementTools from './ManagementTools'
import Member from './Member'
import Checkin from './Checkin'

class ManageTeam extends React.Component {
  static async getInitialProps ({req, query: {id}}) {
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
    db
      .getRecentCheckins(this.props.id)
      .then(data => {
        if (data.val()) {
          this.setState({checkins: data.val()})
        }
      })
      .catch(e => console.log(e))
  }
  render () {
    console.log(this.props)
    if (this.props.currentUser) {
      return (
        <Layout>
          <TeamDetails {...this.state} />
          <ManagementTools
            visible={this.state.currentUser === this.state.owner}
            teamId={this.props.id}
          />
          <div className="section">
            <div className="container">
              <div className="columns">
                <div className="column is-3-desktop is-3-tablet">
                  <p className="has-text-centered">
                    <Link href={`/checkIn?id=${this.props.id}`}>
                      <a className="button is-primary is-medium">CHECK IN</a>
                    </Link>
                  </p>
                  <div className="section is-hidden-mobile">
                    <p className="title has-text-centered">Members:</p>
                    {this.state.members.map(member => (
                      <Member
                        key={member}
                        member={member}
                        lastCheckin={Object.values(this.state.checkins)
                          .sort((a, b) => a.time < b.time)
                          .find(c => c.userName === member)}
                      />
                    ))}
                  </div>
                </div>
                <div className="column is-9-desktop is-9-tablet">
                  <p className="title has-text-centered">Recent Checkins:</p>
                  {Object.values(this.state.checkins).reverse().map(checkin => {
                    return <Checkin key={checkin.time} checkin={checkin} />
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="section has-text-centered">
            <p
              className="button is-danger is-inverted"
              onClick={e => {
                db.removeUserFromTeam({
                  userId: auth.currentUser().uid,
                  teamId: this.props.id
                })
                db
                  .removeTeamFromUser({
                    userId: auth.currentUser().uid,
                    teamId: this.props.id
                  })
                  .then(Router.push('/'))
              }}
            >
              Leave Team 😞
            </p>
          </div>
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

ManageTeam = withRedux(configureApp, state => state)(ManageTeam)

export default ManageTeam
