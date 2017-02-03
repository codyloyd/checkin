import firebase from 'firebase'

// Comment out the config that is not yours and activate your own

// codyloyd
var config = {
  apiKey: "AIzaSyDoOk8JlYLxdYeQlA-zpnpRRRyNBC2amK0",
  authDomain: "checkin-a2355.firebaseapp.com",
  databaseURL: "https://checkin-a2355.firebaseio.com",
  storageBucket: "checkin-a2355.appspot.com",
  messagingSenderId: "62441433911"
};

// thoragio
// var config = {
//   apiKey: 'AIzaSyBzmnpiwOou_Dg3F-WlooPT3RpbksKwERg',
//   authDomain: 'checkit-bc64f.firebaseapp.com',
//   databaseURL: 'https://checkit-bc64f.firebaseio.com',
//   storageBucket: 'checkit-bc64f.appspot.com',
//   messagingSenderId: '103433063233'
// }

try {
  firebase.initializeApp(config)
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

const provider = new firebase.auth.GithubAuthProvider()
const teamsRef = firebase.database().ref('teams')

const fetchGithubUsername = (id) => {
  return fetch(`https://api.github.com/user/${id}`)
      .then(result => result.json())
      .then(json => json.login)
}

const saveGithubUsername = (username) => {
  //fetching the uname works.. now to save it
  console.log(username)
}

export const auth = {
  signIn () {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log(`${result.user.displayName} signed in`)
      fetchGithubUsername(result.user.providerData[0].uid)
        .then(x => saveGithubUsername(x))
     })
    })
    .catch(err => console.log(err))
  },
  signOut () {
    firebase.auth().signOut()
    console.log('signed out')
  },
  currentUser () {
    return firebase.auth().currentUser
  },
  onAuthStateChanged: firebase.auth().onAuthStateChanged
}

export const db = {
  createTeam (name, members = []) {
    teamsRef.push({
      name,
      members,
      owner: auth.currentUser().displayName
    })
  },
  editTeam (teamId, members = []) {
    firebase.database().ref('teams/' + teamId).update({
      members
    })
  },
  teamsRef
}
