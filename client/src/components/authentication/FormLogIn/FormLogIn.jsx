
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserState } from '../../../store/userSlice';
// import setUserJwt from '../../../store/userSlice';
import BaseUnderlinedHeading from '../../base/BaseUnderlinedHeading/BaseUnderlinedHeading';
import InputTextWithIcon from '../InputTextWithIcon/InputTextWithIcon';
import CheckboxRememberMe from '../CheckboxRememberMe/CheckboxRememberMe';
import "./FormLogIn.scss";
import "../../../assets/global-style/_classes.scss";
import { SERVER_URL_SESSIONS } from '../../../global/server';
import axios from 'axios';

const FormLogIn = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [logInData, setLogInData] = useState({
        email: "",
        password: ""
    })

    // Update the user log in state when corresponding input changed
    function handleInputChange(e) {
        e.preventDefault();
        setLogInData({
            ...logInData,
            [e.target.name]: e.target.value
        });
    }

    async function handleButtonLogInClick(e) {
        e.preventDefault();
        debugger;
        // Log in and receive user credentials
        const credentials = await axios.post(SERVER_URL_SESSIONS, {
            user: {
                email: logInData.email,
                password: logInData.password
            }
        });
        
        // If received status is 401, display error that occurred
        if (credentials.data.status === 401) {
            alert("Log in failed. Email or password invalid..");
            return;
        }

        // Store logged user credentials
        dispatch(setUserState({
            fullName: credentials.data.user.full_name,
            email: credentials.data.user.email,
            dateOfBirth: credentials.data.user.date_of_birth,
            country: credentials.data.user.country,
            city: credentials.data.user.city,
            username: credentials.data.user.username
        }));

        // // Store user jwt in Redux storage
        // dispatch(setUserJwt(credentials.data.jwt));

        // // Store user jwt in local storage
        // localStorage.setItem("userJwt", credentials.data.jwt);

        // Redirect user to their dashboard page
        history.push('/user/dashboard');
    }

    return (
        <section id="form-log-in">
            <BaseUnderlinedHeading  
                text="Welcome Back!"
            />

            <section id="form-log-in__main">
                <InputTextWithIcon 
                    labelText="e-mail"
                    inputType="email"
                    inputName="email"
                    inputOnChange={(e) => handleInputChange(e)}
                />

                <InputTextWithIcon 
                    labelText="password"
                    inputType="password"
                    inputName="password"
                    inputOnChange={(e) => handleInputChange(e)}
                />

                <CheckboxRememberMe />

                <button className="button--filled" onClick={(e) => handleButtonLogInClick(e)}>Log in</button>
            </section>
        </section>
    );
}

export default FormLogIn;