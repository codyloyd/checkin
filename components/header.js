import Fb from '../lib/firebase'
import firebase from 'firebase'

const user = firebase.auth().onAuthStateChanged(user => user)

export default () => (
<div>
  <header>
    <p>HEADER</p>
  <button onClick={() => Fb.auth.signIn()} >signin</button>
  <button onClick={() => Fb.auth.signOut()} >signout</button>
  <button onClick={() => Fb.auth.currentUser() ? console.log(Fb.auth.currentUser().displayName) : console.log('not logged in')} >user</button>
  </header>
  <style>{`
  header {
    width: 100%;
    height: 50px;
    border: solid black 1px;
    padding: 10px;
  }
  `}</style>
</div>
)

