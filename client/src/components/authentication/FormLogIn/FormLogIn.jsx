
import React from "react";
import BaseUnderlinedHeading from '../../base/BaseUnderlinedHeading/BaseUnderlinedHeading';
import InputTextWithIcon from '../InputTextWithIcon/InputTextWithIcon';
import CheckboxRememberMe from '../CheckboxRememberMe/CheckboxRememberMe';
import "./FormLogIn.scss";
import "../../../assets/global-style/_classes.scss";

const FormLogIn = () => {
    return (
        <section id="form-log-in">
            <BaseUnderlinedHeading  
                text="Welcome Back!"
            />

            <section id="form-log-in__main">
                <InputTextWithIcon 
                    labelText="e-mail"
                    inputType="email"
                />

                <InputTextWithIcon 
                    labelText="password"
                    inputType="password"
                />

                <CheckboxRememberMe />

                <button className="button--filled">Log in</button>
            </section>
        </section>
    );
}

export default FormLogIn;