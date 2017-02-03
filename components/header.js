import {auth} from '../lib/firebase'

export default() => (
  <div>
    <header>
      <div>This is the header</div>
      <button onClick={() => auth.signIn()}>signin</button>
      <button onClick={() => auth.signOut()}>signout</button>
      <button onClick={() => auth.currentUser()
        ? console.log(auth.currentUser().displayName, auth.currentUser().uid)
        : console.log('not logged in')}>user</button>
    </header>
    <style>
      {
        ` header {
          width: 100%;
          border: solid black 1px;
          padding: 10px;
        }
         `
      }</style>
  </div>
)

