import {db, auth} from '../lib/firebase'
import firebase from 'firebase'

export default class TeamList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const teamsRef = db.teamsRef
    // Added this check to avoid error: setState(…): Can only update a mounted or mounting component
    // http://stackoverflow.com/questions/34544314/setstate-can-only-update-a-mounted-or-mounting-component-this-usually-mea
    if (this.refs.listOfTeams) {
      teamsRef.on('value', teamsnap => {
        const user = auth.currentUser()
        firebase.database().ref('users/' + user.uid)
          .once('value')
          .then(usersnap => usersnap.val().teams)
          .then(teams => Object.keys(teamsnap.val())
                          .filter(key => teams.indexOf(key) >= 0)
                          .reduce((obj, key) => {
                            obj[key] = teamsnap.val()[key]
                            return obj
                          }, {}))
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
            onClick={db.editTeam}
          />
          )
        })}
      </ul>
    )
  }
}

const ListItem = ({teamId, name, owner, members, onClick}) =>
  <li onClick={() => onClick(teamId, ['asdfasd', 'fdf', 'sfddsa'])}>{name} - {owner} - {members}</li>
