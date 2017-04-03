import React from 'react'
import withRedux from 'next-redux-wrapper'

import configureApp from '../../lib/configureApp'
import {fetchUserTeams} from '../../reducers/teams'

import Layout from '../../components/layout'
import SignInMessage from '../../components/signInMessage'
import Loading from '../../components/Loading'
import TeamList from './teamlist'

class Page extends React.Component {
  componentDidMount () {
    if (this.props.currentUser) {
      this.props.fetchUserTeams(this.props.currentUser)
    }
  }
  componentDidUpdate (prevProps) {
    if (this.props.currentUser && prevProps.teams === this.props.teams) {
      this.props.fetchUserTeams(this.props.currentUser)
    }
  }
  render () {
    if (this.props.currentUser) {
      return this.props.isFetching
        ? <Loading />
        : <Layout>
            <Dashboard teams={this.props.teams} />
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
  return {
    currentUser: state.currentUser,
    teams: state.teams.byId,
    isFetching: state.teams.isFetching
  }
};

Page = withRedux(configureApp, state => mapStateToProps, {fetchUserTeams})(
  Page
)

export default Page

const Title = ({title}) => <h1 className="title">{title}</h1>

const Dashboard = props => {
  return (
    <div>
      <div className="hero is-primary">
        <div className="hero-body">
          <div className="container is-fluid">
            <Title title="Dashboard" />
          </div>
        </div>
      </div>
      <div className="section">
        <TeamList teams={props.teams} />
      </div>
    </div>
  )
};
