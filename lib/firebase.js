import firebase from 'firebase'
import fetch from 'isomorphic-fetch'
import teamCode from './teamCode'

// Comment out the config that is not yours and activate your own

// codyloyd
var config = {
  apiKey: 'AIzaSyDoOk8JlYLxdYeQlA-zpnpRRRyNBC2amK0',
  authDomain: 'checkin-a2355.firebaseapp.com',
  databaseURL: 'https://checkin-a2355.firebaseio.com',
  storageBucket: 'checkin-a2355.appspot.com',
  messagingSenderId: '62441433911'
}

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
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

// // this waits for a change in Auth state.. i.e. user logs in
// // then it calls the getUserTeams function, which for now just
// // logs the array to the console.
// firebase.auth().onAuthStateChanged(function (user) {
//   if (user) {
//     firebase.database().ref('users/' + user.uid)
//       .once('value')
//       .then(snap => getUserTeams(snap.val(), user))
//   } else {
//   }
// })

// const getUserTeams = (userData, user) => {
//   let username = ''
//   if (userData) username = userData.username
//   firebase.database().ref('teams')
//     .once('value')
//     .then(snap => Object.keys(snap.val())
//         .filter(teamid => {
//           return snap.val()[teamid].members.indexOf(username) >= 0 ||
//             snap.val()[teamid].owner === user.displayName
//         })
//     )
//     .then(data => writeTeamstoDB(data, user))
// }

// const writeTeamstoDB = (teamsArray, user) => {
//   firebase.database().ref('users/' + user.uid + '/teams').set(teamsArray)
// }

const provider = new firebase.auth.GithubAuthProvider()
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
  createTeam (name) {
    const team = firebase.database().ref('teams').push({
      joinCode: teamCode(),
      owner: auth.currentUser().displayName,
      members: [auth.currentUser().displayName],
      name
    })
    const user = firebase.database().ref('users/' + auth.currentUser().uid)
    user.once('value').then(data => {
      if (data.val().teams) {
        user.set({...data.val(), teams: [...data.val().teams, team.key]})
      } else {
        user.set({...data.val(), teams: [team.key]})
      }
    })
  },
  fetchUserData (userId) {
    return firebase.database().ref('users/' + userId).once('value')
  },
  fetchTeams (teams) {
    const promises = teams.map(teamId => this.fetchTeamWithId(teamId).then(data => data.val()))
    return Promise.all(promises)
  },
  fetchTeamWithId (id) {
    return firebase.database().ref('teams/' + id).once('value')
  },
  teamsRef: firebase.database().ref('teams'),
  currentUserRef: firebase.database().ref('users/' + auth.currentUser().uid)
}
