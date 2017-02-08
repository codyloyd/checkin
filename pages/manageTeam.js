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
    console.log(this.props.id)
    return (
      <Layout>
        <h1>Manage Team</h1>
        <p>team name: {this.state.name}</p>
        <p>team owner: {this.state.owner}</p>
        <p>member join code: {this.state.joinCode}</p>
      </Layout>
    )
  }
}
