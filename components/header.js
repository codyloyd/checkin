import Link from 'next/link'

import {auth} from '../lib/firebase'
import firebase from 'firebase'

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
    return (
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper blue">
            <div className="brand-logo"><i className="large material-icons">done</i>CheckIt</div>
            <ul className="right hide-on-med-and-down">
              <li><Link href="/"><a>Dashboard</a></Link></li>
              <li><Link href="/newTeam"><a>New Team</a></Link></li>
              <li><Link href="/joinTeam"><a>Join Team</a></Link></li>
              <li><SignInButton currentUser={this.state.currentUser}/></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

const SignInButton = ({currentUser}) => {
  if (!currentUser) {
    return <a className="btn green waves-effect waves-light" onClick={() => auth.signIn()}>sign in with <span className='extra-bold'>GitHub</span></a>
  }
  return <a className="btn green" onClick={() => auth.signOut()}>signout</a>
}
