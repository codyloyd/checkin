import {db} from '../lib/firebase'

export default class TeamList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const teamsRef = db.teamsRef
    // Added this check to avoid error: setState(…): Can only update a mounted or mounting component
    // http://stackoverflow.com/questions/34544314/setstate-can-only-update-a-mounted-or-mounting-component-this-usually-mea
    // I'm confused by this one.. why wouldn't it be mounted?
    // this code _should_ only be run after the component has mounted.
    if (this.refs.listOfTeams) {
      teamsRef.on('value', teamsnap => {
        db.filteredTeams(teamsnap.val())
          .then(filteredTeams => this.setState(filteredTeams))
      })
    }
  }

  render () {
    return (
      <ul ref="listOfTeams">
        {Object.entries(this.state).map(team => {
          console.log(team)
          return (
          <ListItem
            key={team[0]}
            name={team[1].name}
            owner={team[1].owner}
            members={team[1].members.join(', ')}
          />
          )
        })}
      </ul>
    )
  }
}

const ListItem = ({teamId, name, owner, members, onClick}) =>
  <li>{name} - {owner} - {members}</li>
