import React, { useState } from 'react'; 
import { Helmet } from 'react-helmet';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login, signup } from '../actions/auth';
import { setAlert } from '../actions/alert';

const SignUp = () => {
    const [fromData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const onChange = e => setFormData({ ...fromData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault(); 

        if (password !== password2) {
            setAlert('Password do not match!', 'error')
        } else {
            signup({ name, email, password, password2 });
        }
    }

    const {name, email, password, password2} = fromData;

    return (
        <div>
            signup
        </div>
    );
}

export default SignUp;