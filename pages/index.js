import Layout from '../components/layout'
import TeamList from '../components/teamlist'
import firebase from 'firebase'

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
          <Welcome />
        </Layout>
      )
    }
  }
}

const Dashboard = props => (
  <div>
    <Title title="Dashboard" />
    <TeamList />
  </div>
)

const Welcome = props => (
  <div>
    <Title title="YOU SHOULD SIGN IN NOW" />
  </div>
)
