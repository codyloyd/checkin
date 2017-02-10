import {auth} from '../lib/firebase'
import Link from 'next/link'

export default() => (
  <div>
    <header>
      <div>This is the header</div>
      <button onClick={() => auth.signIn()}>signin</button>
      <button onClick={() => auth.signOut()}>signout</button>
      <button onClick={() => auth.currentUser()
        ? console.log(auth.currentUser().displayName, auth.currentUser().uid)
        : console.log('not logged in')}>user</button>
        <Link href="/"><a>Dashboard</a></Link>
        <Link href="/newTeam"><a>New Team</a></Link>
        <Link href="/joinTeam"><a>Join Team</a></Link>
    </header>
    <style>
      {
        ` header {
          width: 100%;
          border: solid black 1px;
          padding: 10px;
          }

          a {
            padding-left: 10px;
          }
         `
      }</style>
  </div>
)
