
import React, {useState} from "react";
import BaseUnderlinedHeading from '../../base/BaseUnderlinedHeading/BaseUnderlinedHeading';
import InputTextWithIcon from '../InputTextWithIcon/InputTextWithIcon';
import CheckboxRememberMe from '../CheckboxRememberMe/CheckboxRememberMe';
import "./FormLogIn.scss";
import "../../../assets/global-style/_classes.scss";
import { SERVER_URL_SESSIONS } from '../../../global/server';
import axios from 'axios';

const FormLogIn = () => {
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
        await axios.post(SERVER_URL_SESSIONS, {
            user: {
                email: logInData.email,
                password: logInData.password
            }
        });
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