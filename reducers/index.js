import {combineReducers} from 'redux'

import currentUser from './currentUser'
import teams from './teams'
import checkins from './checkins'

export default combineReducers({currentUser, teams, checkins})
