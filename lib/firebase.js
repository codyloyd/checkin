import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDoOk8JlYLxdYeQlA-zpnpRRRyNBC2amK0",
  authDomain: "checkin-a2355.firebaseapp.com",
  databaseURL: "https://checkin-a2355.firebaseio.com",
  storageBucket: "checkin-a2355.appspot.com",
  messagingSenderId: "62441433911"
};

try {
  firebase.initializeApp(config)
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const provider = new firebase.auth.GithubAuthProvider();

const fetchGithubUsername = (id) => {
  return fetch(`https://api.github.com/user/${id}`)
      .then(result => result.json())
      .then(json => json.login)
}

const saveGithubUsername = (username) => {
  //fetching the uname works.. now to save it
  console.log(username)
}

const auth = {
  signIn() {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log(result.user.providerData[0].uid)
      fetchGithubUsername(result.user.providerData[0].uid)
        .then(x => saveGithubUsername(x))
     })
    .catch(err => console.log(err))
  },
  signOut() {
    firebase.auth().signOut()
    console.log("out!")
  },
  currentUser() {
    return firebase.auth().currentUser
  },
  onAuthStateChanged: firebase.auth().onAuthStateChanged
}

const db = {
  createTeam(name,members=[]) {
    firebase.database().ref('teams').push({
      name,
      members,
      ownerID: auth.currentUser().uid
    })
  },
  editTeam(teamId,members=[]){
    firebase.database().ref('teams/' + teamId).update({
      members
    })
  },
  teamsRef: firebase.database().ref('teams')
}


module.exports = {auth,db}