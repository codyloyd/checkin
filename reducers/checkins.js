import {combineReducers} from 'redux'
import {db} from '../lib/firebase'

// Action Types
const FETCH_CHECKINS_REQUEST = 'FETCH_CHECKINS_REQUEST'
const FETCH_CHECKINS_SUCCESS = 'FETCH_CHECKINS_SUCCESS'
const FETCH_CHECKINS_FAIL = 'FETCH_CHECKINS_FAIL'

// Action Creators
const fetchCheckinsSuccess = response => ({
  type: FETCH_CHECKINS_SUCCESS,
  response
})
const fetchCheckinsFail = error => ({
  type: FETCH_CHECKINS_FAIL,
  error
})

// Async Actions
export const fetchCheckins = teamId =>
  dispatch => {
    dispatch({type: FETCH_CHECKINS_REQUEST})
    db.getRecentCheckins(teamId).then(
      response => {
        dispatch(fetchCheckinsSuccess(response))
      },
      error => {
        dispatch(fetchCheckinsFail(error.message || 'something went wrong'))
      }
    )
  };

// Selectors

// Reducers
const defaultState = {
  byId: {},
  isFetching: false,
  errorMessage: null
}

export const byId = (state = defaultState.byId, action) => {
  const {type, response} = action
  switch (type) {
    case FETCH_CHECKINS_SUCCESS:
      return {...state, ...response}
    default:
      return state
  }
}

export const isFetching = (state = defaultState.isFetching, action) => {
  const {type} = action
  switch (type) {
    case FETCH_CHECKINS_REQUEST:
      return true
    case FETCH_CHECKINS_SUCCESS:
    case FETCH_CHECKINS_FAIL:
      return false
    default:
      return state
  }
}

export const errorMessage = (state = defaultState.errorMessage, action) => {
  const {type} = action
  switch (type) {
    case FETCH_CHECKINS_FAIL:
      return action.message
    case FETCH_CHECKINS_REQUEST:
    case FETCH_CHECKINS_SUCCESS:
      return null
    default:
      return state
  }
}

export default combineReducers({byId, isFetching, errorMessage})
