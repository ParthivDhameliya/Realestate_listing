import axios from 'axios';
import { setAlert } from './alert';
import { SIGNUP_SUCCESS, SIGNUP_FAIL, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from './types';
import { json } from 'react-router-dom';

export const login = (email, password) => async dispatch => {
    const config = {
        header : {
            'content-type': 'application/json'
        }
    }

    const body = json.stringify({email, password});

    try {
        const res = await axios.post("http://localhost:8000/api/token/", body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });

        dispatch(setAlert("Authenticated successfully", "success"));
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })

        dispatch(setAlert("Error in Authentication", "error"))
    }
}; 

export const signup = ({ name, email, password, password2 }) => async dispatch => {
    const config = {
        "content-type": "application/json"
    }

    const body = json.stringify({ name, email, password, password2});

    try {
        const res = await axios.post("http://localhost:8000/api/accounts/signup", body, config);
     
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        });

        dispatch(login(email, password));
    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })

        dispatch(setAlert("Error in Authentication", "error"))
    }
};

export const logout = () => dispatch => {
    dispatch(setAlert("logout successfully.", "success"));
    dispatch({ type: LOGOUT });
};


