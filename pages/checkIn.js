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
        <CheckInForm />
      </Layout>
    )
  }
}

const CheckInForm = props => {
  return (
    <input type='text' placeholder='still gotta build the form'/>
  )
}
