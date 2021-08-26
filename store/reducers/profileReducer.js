import * as types from '../types'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const initialState = { 
    profile: null,
    token: null,
    refreshToken: null,
    loading: false,
    error: null
}

export const postReducer = (state = initialState, action) => {

    switch(action.type) {
        case types.LOGIN:
            return {
                ...state,
                token: action.payload.auth,
                refreshToken: action.payload.refresh,
                profile: action.payload.profile
            }
        case types.AUTH:
            return {
                ...state,
                auth: action.payload,
                loading: false,
                error: null
            }
        case types.UPDATE:
            return {
                ...state,
                profile: action.payload
            }
        case types.LOGOUT:
            return {
                ...state,
                profile: null,
                auth: null,
                loading: false,
                error: null
            }
        case types.FAILEDLOGIN:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.GET_ALLUSERS:
            return {
                ...state,
                loading: false,
                allusers: action.payload
            }
        default:
            return state
    }
}