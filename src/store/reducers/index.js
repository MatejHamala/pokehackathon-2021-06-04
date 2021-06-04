import { combineReducers } from 'redux'

import { competitions, competitors, newCompetitor } from './competitions'


const allReducers = combineReducers({
    competitions,
    competitors, 
    newCompetitor
})

export default allReducers