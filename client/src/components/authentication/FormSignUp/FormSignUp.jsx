import React, { useState } from "react";
import BaseMultiPageCard from "../../base/BaseMultiPageCard/BaseMultiPageCard";
import BaseUnderlinedHeading from '../../base/BaseUnderlinedHeading/BaseUnderlinedHeading';
import InputTextWithIcon from '../InputTextWithIcon/InputTextWithIcon';
import "./FormSignUp.scss";
import '../../../assets/global-style/_classes.scss'
import axios from 'axios';
import { SERVER_URL_USERS } from '../../../global/server';

const FormSignUp = () => {
    // User sign up data received by form
    const [signUpData, setSignUpData] = useState({
        fullName: "",
        email: "",
        dateOfBirth: "",
        country: "",
        city: "",
        username: "",
        password: "",
        passwordConfirmation: ""
    });

    // Update the user sign up state when corresponding input changed
    function handleInputChange(e) {
        e.preventDefault();
        setSignUpData({
            ...signUpData,
            [e.target.name]: e.target.value
        });
    }

    // Handle sign up form submit button click
    async function handleButtonCreateAccountOnClick() {
        await axios.post(SERVER_URL_USERS, {
            user: {
                full_name: signUpData.fullName,
                email: signUpData.email,
                date_of_birth: signUpData.dateOfBirth,
                country: signUpData.country,
                city: signUpData.city,
                username: signUpData.username,
                password: signUpData.password,
                password_confirmation: signUpData.passwordConfirmation
            }
        });
    }

    // The forms list to be  passed to the multipage component
    const formsList = [
        <section className="form-sign-up__main">
            <InputTextWithIcon 
                labelText="e-mail"
                inputType="email"
                inputName="email"
                inputOnChange={(e) => handleInputChange(e)}
            />

            <InputTextWithIcon 
                labelText="username"
                inputType="username"
                inputName="username"
                inputOnChange={(e) => handleInputChange(e)}
            />
        </section>,

        <section className="form-sign-up__main">
            <div className="form-sign-up__main__two_on_row">
                <InputTextWithIcon 
                    labelText="fullname"
                    inputType="text"
                    inputName="fullName"
                    inputOnChange={(e) => handleInputChange(e)}
                />

                <InputTextWithIcon 
                    labelText="date of birth"
                    inputType="date"
                    inputName="dateOfBirth"
                    inputOnChange={(e) => handleInputChange(e)}
                />
            </div>

            <div className="form-sign-up__main__two_on_row">
                <InputTextWithIcon 
                    labelText="country"
                    inputType="text"
                    inputName="country"
                    inputOnChange={(e) => handleInputChange(e)}
                />

                <InputTextWithIcon 
                    labelText="city"
                    inputType="text"
                    inputName="city"
                    inputOnChange={(e) => handleInputChange(e)}
                />
            </div>
        </section>,

        <section className="form-sign-up__main">
            <InputTextWithIcon 
                labelText="password"
                inputType="password"
                inputName="password"
                inputOnChange={(e) => handleInputChange(e)}
            />

            <InputTextWithIcon 
                labelText="confirm password"
                inputType="password"
                inputName="passwordConfirmation"
                inputOnChange={(e) => handleInputChange(e)}
            />
        </section>,
    ];

    return (
        <section id="form-sign-up">
            <BaseUnderlinedHeading  
                text="Nice to meet you!"
            />

            <BaseMultiPageCard 
                numberOfPages={3}
                listOfMainFragments={formsList}
                handleButtonCreateAccountOnClick={() => handleButtonCreateAccountOnClick()}
            />
        </section>
    );
}

export default FormSignUp;