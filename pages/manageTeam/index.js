import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
// import moment from 'moment'
import withRedux from 'next-redux-wrapper'
import {db, auth} from '../../lib/firebase'

import configureApp from '../../lib/configureApp'
import {fetchTeam} from '../../reducers/teams'
import {fetchCheckins} from '../../reducers/checkins'

import SignInMessage from '../../components/signInMessage'
import Layout from '../../components/layout'
import Loading from '../../components/Loading'
import TeamDetails from './TeamDetails'
import ManagementTools from './ManagementTools'
import Member from './Member'
import Checkin from './Checkin'

class ManageTeam extends React.Component {
  static async getInitialProps ({req, query: {id}}) {
    return {id}
  }
  componentDidMount () {
    this.props.fetchTeam(this.props.id)
    this.props.fetchCheckins(this.props.id)
  }
  render () {
    const {currentUser, team, checkins, isFetching} = this.props
    if (currentUser) {
      return isFetching
        ? <Loading />
        : <Layout>
            <TeamDetails {...team} />
            <ManagementTools
              visible={currentUser === team.owner}
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
                      {team.members.map(member => (
                        <Member
                          key={member}
                          member={member}
                          lastCheckin={Object.values(checkins)
                            .sort((a, b) => a.time < b.time)
                            .find(c => c.userName === member)}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="column is-9-desktop is-9-tablet">
                    <p className="title has-text-centered">Recent Checkins:</p>
                    {Object.values(checkins).reverse().map(checkin => {
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
    } else {
      return (
        <Layout>
          <SignInMessage />
        </Layout>
      )
    }
  }
}
const mapStateToProps = (state, ownProps) => {
  const {id} = ownProps
  const team = state.teams.byId[id]
  return {
    currentUser: state.currentUser,
    team: team || {},
    checkins: state.checkins.byId,
    isFetching: state.checkins.isFetching
  }
};

ManageTeam = withRedux(configureApp, state => mapStateToProps, {
  fetchTeam,
  fetchCheckins
})(ManageTeam)

export default ManageTeam
