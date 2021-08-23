import * as types from '../types'
import { loginRequest, getAllUsers, patchUser } from '../../services/apiservice'
import jwt_decode from 'jwt-decode';
import Router from 'next/router';
import { Cookies } from 'react-cookie';
import { getThoughts } from '../../services/thoughtservice';

const cookies = new Cookies();

export const fetchThoughts = (email, auth) => async dispatch => {
    const res = await getThoughts(email, auth)
    console.log(res)
    dispatch({
        type: types.GET_THOUGHTS,
        payload: res.length > 0 ? res: null
    })
}

export const updateProfile = (userId, token, inputs) => async dispatch => {
    console.log(token)
    const res = await patchUser(userId, token, inputs);
    cookies.set('user', inputs)
    dispatch({
        type: types.UPDATE,
        payload: inputs
    })
    await Router.reload('/myprofile')
}

export const getAllUsersAdmin = (token, limit) => async dispatch => {
    const res = await getAllUsers(token, limit);
    console.log(res)
    if(res === 403 || res === 401) await Router.push(`/error?errorMessage=${res}`)
    dispatch({
        type: types.GET_ALLUSERS,
        payload: res.length > 0 ? res: null,
        error: null,
        errorMessage: null
    })
}

export const signIn = (email, password) => async dispatch => {
    const res = await loginRequest(email, password)
    console.log(res)
    if(res === 400) {
        dispatch({
            type: types.FAILEDLOGIN,
            payload: 400,
            errorMessage: 'Invalid Email or Password'
        })
        return
    }
    const decoded = jwt_decode(res.accessToken)
    cookies.set('user', decoded)
    cookies.set('auth', res)
    dispatch({
        type: types.AUTH,
        payload: res
    })
    dispatch({
        type: types.LOGIN,
        payload: decoded
    })
    await Router.push('/')
}

export const signOut = () => async dispatch => {
    cookies.remove('user')
    cookies.remove('auth')
    dispatch({
        type: types.LOGOUT,
        payload: null
    })
    await Router.push("/login");
}