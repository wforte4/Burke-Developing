import { combineReducers } from 'redux'
import { postReducer } from './profileReducer'

export default combineReducers({
    user: postReducer
});