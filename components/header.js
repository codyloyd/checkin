import Fb from '../lib/firebase'


export default () => (
<div>
  <header>
    <p>This is the header.. </p>
  <button onClick={() => Fb.auth.signIn()} >signin</button>
  <button onClick={() => Fb.auth.signOut()} >signout</button>
  <button onClick={() => console.log(Fb.auth.currentUser().displayName)} >user</button>
  </header>
  <style jsx>{`
  header {
    width: 100%;
    height: 50px;
    border: solid black 1px;
    padding: 10px;
  }
  `}</style>
</div>
)