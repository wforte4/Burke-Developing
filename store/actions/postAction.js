import * as types from '../types'
import Router from 'next/router';
import { Cookies } from 'react-cookie';
import axios from 'axios'
import jwt_decode from "jwt-decode";

const cookies = new Cookies();


export const signIn = (email, password) => async dispatch => {
    try {
        const res = await axios.post("http://localhost:3600/auth", {
            email: email,
            password: password
        })
        var decoded = jwt_decode(res.data.accessToken);
        console.log(res)
        dispatch({
            type: types.LOGIN,
            payload: {
                profile: decoded,
                auth: res.data.accessToken,
                refresh: res.data.refreshToken
            }
        })
        await Router.push('/')
    } catch (e) {
        dispatch({
            type: types.FAILEDLOGIN,
            payload: "Incorrect Username or Password"
        })
    }
}

export const clearError = () => async dispatch => {
    dispatch({
        type: types.FAILEDLOGIN,
        payload: null
    })
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