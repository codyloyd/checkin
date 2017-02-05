import firebase from 'firebase'
// Add isomorphic-fetch per recommendation in this Medium article:
// https://blog.agent.sh/next-js-the-new-way-to-build-websites-c66d10df2ae5
// Also is used in the Zeit examples for next.js:
// https://github.com/zeit/next.js/blob/master/examples/data-fetch/pages/preact.js#L4
// And gets rid of linting error for no definition of fetch further down
import fetch from 'isomorphic-fetch'

// Comment out the config that is not yours and activate your own

// codyloyd
// var config = {
//   apiKey: 'AIzaSyDoOk8JlYLxdYeQlA-zpnpRRRyNBC2amK0',
//   authDomain: 'checkin-a2355.firebaseapp.com',
//   databaseURL: 'https://checkin-a2355.firebaseio.com',
//   storageBucket: 'checkin-a2355.appspot.com',
//   messagingSenderId: '62441433911'
// }

// thoragio
var config = {
  apiKey: 'AIzaSyBzmnpiwOou_Dg3F-WlooPT3RpbksKwERg',
  authDomain: 'checkit-bc64f.firebaseapp.com',
  databaseURL: 'https://checkit-bc64f.firebaseio.com',
  storageBucket: 'checkit-bc64f.appspot.com',
  messagingSenderId: '103433063233'
}

try {
  firebase.initializeApp(config)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

// this waits for a change in Auth state.. i.e. user logs in
// then it calls the getUserTeams function, which for now just
// logs the array to the console.
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    firebase.database().ref('users/' + user.uid)
      .once('value')
      .then(snap => getUserTeams(snap.val(), user))
  } else {
  }
})

const getUserTeams = (userData, user) => {
  let username = ''
  if (userData) username = userData.username
  firebase.database().ref('teams')
    .once('value')
    .then(snap => Object.keys(snap.val())
        .filter(teamid => {
          return snap.val()[teamid].members.indexOf(username) >= 0 ||
            snap.val()[teamid].owner === user.displayName
        })
    )
    .then(data => writeTeamstoDB(data, user))
}

const writeTeamstoDB = (teamsArray, user) => {
  firebase.database().ref('users/' + user.uid + '/teams').set(teamsArray)
}

const provider = new firebase.auth.GithubAuthProvider()
const teamsRef = firebase.database().ref('teams')

const fetchGithubUsername = (id) => {
  return fetch(`https://api.github.com/user/${id}`)
      .then(result => result.json())
      .then(json => json.login)
}

const saveGithubUsername = (username) => {
  const uid = firebase.auth().currentUser.uid
  firebase.database().ref('users/' + uid).set({
    username
  })
}

export const auth = {
  signIn () {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log(`${result.user.displayName} signed in`)
      // so far I can only see how to do this on logging in.
      // I am not sure if I can check that a user is a new user
      // for now it works.. If we can figure out how to check if a user is new
      // we should move this stuff
      fetchGithubUsername(result.user.providerData[0].uid)
        .then(saveGithubUsername)
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
  filteredTeams (teamsnap) {
    const user = firebase.auth().currentUser
    return firebase.database().ref('users/' + user.uid)
      .once('value')
      .then(usersnap => usersnap.val().teams)
      .then(teams => Object.keys(teamsnap)
                      .filter(key => teams.indexOf(key) >= 0)
                      .reduce((obj, key) => {
                        obj[key] = teamsnap[key]
                        return obj
                      }, {}))
  },
  teamsRef
}
