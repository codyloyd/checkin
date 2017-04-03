import {combineReducers} from 'redux'
import {db} from '../lib/firebase'

// Action Types
const FETCH_TEAM_REQUEST = 'FETCH_TEAM_REQUEST'
const FETCH_TEAM_SUCCESS = 'FETCH_TEAM_SUCCESS'
const FETCH_TEAM_FAIL = 'FETCH_TEAM_FAIL'

// Action Creators
const fetchTeamSuccess = response => ({
  type: FETCH_TEAM_SUCCESS,
  response
})
const fetchTeamFail = error => ({
  type: FETCH_TEAM_FAIL,
  error
})

// Async Actions
export const fetchTeam = id =>
  dispatch => {
    dispatch({type: FETCH_TEAM_REQUEST})
    db.fetchTeamWithId(id).then(
      response => {
        dispatch(fetchTeamSuccess(response))
      },
      error => {
        dispatch(fetchTeamFail(error.message || 'something went wrong'))
      }
    )
  };

export const fetchUserTeams = userId =>
  dispatch => {
    dispatch({type: FETCH_TEAM_REQUEST})
    db.currentUserRef().on('value', snap => {
      db.fetchUserData(userId).then(userData => {
        const teams = userData.val().teams
        if (teams) {
          db.fetchTeams(teams).then(teams => dispatch(fetchTeamSuccess(teams)))
        }
      })
    })
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
    case FETCH_TEAM_SUCCESS:
      return {...state, ...response}
    default:
      return state
  }
}

export const isFetching = (state = defaultState.isFetching, action) => {
  const {type} = action
  switch (type) {
    case FETCH_TEAM_REQUEST:
      return true
    case FETCH_TEAM_SUCCESS:
    case FETCH_TEAM_FAIL:
      return false
    default:
      return state
  }
}

export const errorMessage = (state = defaultState.errorMessage, action) => {
  const {type} = action
  switch (type) {
    case FETCH_TEAM_FAIL:
      return action.message
    case FETCH_TEAM_REQUEST:
    case FETCH_TEAM_SUCCESS:
      return null
    default:
      return state
  }
}

export default combineReducers({byId, isFetching, errorMessage})
