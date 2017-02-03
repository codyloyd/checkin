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


//we can refactor these out into their own files later.. 
//for now it's easier if we keep it all together
//Eric would yell at us for using classes here....
//I'd like to get around it, but I don't think there is a way with firebase
class TeamForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '',members:''};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleMembersChange = this.handleMembersChange.bind(this);
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  handleMembersChange(event) {
    this.setState({members: event.target.value});
  }
  parseMembersInput(members){
    return members.split(" ")
  }
  render() {
    return (
      <div>
        <input value={this.state.name} onChange={this.handleNameChange} placeholder="name"/>
        <input value={this.state.members} onChange={this.handleMembersChange} placeholder="members"/>
        <input 
          type="submit" 
          onClick={() => 
            Fb.db.createTeam(this.state.name,this.parseMembersInput(this.state.members))
          }
        />
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
      this.setState(snap.val())
    })
  }
  render(){
    return(
      <ul>
        {Object.entries(this.state).map(team => {
          return (
          <ListItem 
            teamId={team[0]}
            name={team[1].name}
            onClick={Fb.db.editTeam}
          />
          )
        })}
      </ul>
    )
  }
} 

const ListItem = ({teamId, name, onClick}) => 
  <li onClick={() => onClick(teamId,["a","b","c","d","e"])}>{name}</li>