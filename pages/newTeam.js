import Layout from '../components/layout'
import Fb from '../lib/firebase'

export default () => (
    <Layout title="New Team">
      <h1>NEW TEAM</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint officia cumque quas soluta, quae earum ea, quam exercitationem saepe veritatis fuga voluptatum dolor animi nesciunt voluptas eaque, consectetur porro!</p>
      <TeamForm />
      <TeamList />
    </Layout>
)

class TeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={this.handleChange} />
        <input type="submit" onClick={() => Fb.db.createTeam(this.state.value)}/>
      </div>
    )
  } 
}

class TeamList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    const teamsRef = Fb.db.teamsRef
    teamsRef.on('value', snap =>{
      console.log(snap.val())
      this.setState(snap.val())
    })
  }
  render(){
    return(
      <ul>
        {Object.values(this.state).map(team => <li>{team.name}</li>)}
      </ul>
    )
  }
} 