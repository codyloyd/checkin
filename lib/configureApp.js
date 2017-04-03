import firebase from 'firebase'
import * as currentUser from '../reducers/currentUser'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import mainAppReducer from '../reducers'

const configureStore = reducer => {
  const middlewares = [thunk]
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger())
  }
  const store = createStore(reducer, applyMiddleware(...middlewares))
  return store
};

const config = {
  apiKey: 'AIzaSyDoOk8JlYLxdYeQlA-zpnpRRRyNBC2amK0',
  authDomain: 'checkin-a2355.firebaseapp.com',
  databaseURL: 'https://checkin-a2355.firebaseio.com',
  storageBucket: 'checkin-a2355.appspot.com',
  messagingSenderId: '62441433911'
}

const initializeFirebase = dispatch => {
  try {
    firebase.initializeApp(config)
  } catch (err) {
    if (!/already exists/.test(err.message)) {
      console.error('Firebase initialization error', err.stack)
    }
  }
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      dispatch(currentUser.signInSuccessful(user))
    } else {
      dispatch(currentUser.signOutSuccessful(user))
    }
  })
};

export default () => {
  const store = configureStore(mainAppReducer)
  initializeFirebase(store.dispatch)
  return store
};
