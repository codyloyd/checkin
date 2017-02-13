import Link from 'next/link'

import {auth} from '../lib/firebase'

export default() => (
  <div className="navbar-fixed">
    <nav>
      <div className="nav-wrapper blue">
        <div className="brand-logo"><i className="large material-icons">done</i>CheckIt</div>
        <ul className="right hide-on-med-and-down">
          <li><Link href="/"><a>Dashboard</a></Link></li>
          <li><Link href="/newTeam"><a>New Team</a></Link></li>
          <li><Link href="/joinTeam"><a>Join Team</a></Link></li>
          <li><SignInButton currentUser={auth.currentUser()}/></li>
        </ul>
      </div>
    </nav>
  </div>
)

const SignInButton = ({currentUser}) => {
  if (!currentUser) {
    return <a className="btn green waves-effect waves-light" onClick={() => auth.signIn()}>sign in</a>
  }
  return <a className="btn green" onClick={() => auth.signOut()}>signout</a>
}
