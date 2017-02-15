import firebase from 'firebase'
import fetch from 'isomorphic-fetch'
import teamCode from './teamCode'

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

const provider = new firebase.auth.GithubAuthProvider()
const fetchGithubUsername = (id) => {
  return fetch(`https://api.github.com/user/${id}`)
      .then(result => result.json())
      .then(json => json.login)
}

const saveGithubUsername = (username) => {
  const uid = firebase.auth().currentUser.uid
  const userRef = firebase.database().ref('users/' + uid)
  userRef.once('value').then(data => {
    if (data.val()) {
      console.log('username exists')
    } else {
      userRef.set({
        username
      })
    }
  })
}

export const auth = {
  signIn () {
    firebase.auth().signInWithPopup(provider)
    .then(result => {
      console.log(`${result.user.displayName} signed in`)
      // so far I can only see how to do this on logging in.
      // I am not sure if I can check that a user is a new user
      // for now it works. If we can figure out how to check
      // if a user is new we should move this stuff
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
  addCheckIn ({teamId, q1, q2, q3}) {
    const checkIn = firebase.database().ref('checkins').push({
      userId: auth.currentUser().uid,
      userName: auth.currentUser().displayName,
      time: Date.now(),
      teamId,
      q1,
      q2,
      q3
    })
    return Promise.resolve(checkIn)
  },
  getRecentCheckins (teamId) {
    return firebase.database().ref('checkins').orderByChild('teamId').equalTo(teamId).limitToLast(15).once('value')
  },
  createTeam (name) {
    const team = firebase.database().ref('teams').push({
      joinCode: teamCode(),
      // we should consider storing owners by UID rather than
      // displayname in case users do not have unique names
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
    return Promise.resolve(team.key)
  },
  joinTeam (teamCode) {
    return this.fetchTeamWithCode(teamCode).then(data => {
      const teamKey = Object.keys(data.val())[0]
      const user = firebase.database().ref('users/' + auth.currentUser().uid)
      firebase.database().ref('teams/' + teamKey + '/members').once('value').then(data => {
        firebase.database().ref('teams/' + teamKey + '/members').set([...data.val(), auth.currentUser().displayName])
      })
      user.once('value').then(data => {
        console.log(data.val())
        if (data.val().teams) {
          user.set({...data.val(), teams: [...data.val().teams, teamKey]})
        } else {
          user.set({...data.val(), teams: [teamKey]})
        }
      })
      return Promise.resolve(teamKey)
    }).catch(e => {
      return Promise.reject('fail')
    })
  },
  fetchUserData (userId) {
    return firebase.database().ref('users/' + userId).once('value')
  },
  fetchTeams (teams) {
    const promises = teams.map(teamId => this.fetchTeamWithId(teamId).then(data => data.val()))
    return Promise.all(promises).then(promises => {
      return promises.reduce((obj, team, i) => {
        obj[teams[i]] = team
        return obj
      }, {})
    })
  },
  fetchTeamWithCode (teamCode) {
    return firebase.database().ref('teams')
      .orderByChild('joinCode')
      .equalTo(teamCode)
      .limitToFirst(1)
      .once('value')
  },
  fetchTeamWithId (id) {
    return firebase.database().ref('teams/' + id).once('value')
  },
  teamsRef: firebase.database().ref('teams'),
  currentUserRef () {
    if (auth.currentUser()) {
      return firebase.database().ref('users/' + auth.currentUser().uid)
    }
    return undefined
  }
}
