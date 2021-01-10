import React from "react";
import BaseMultiPageCard from "../../base/BaseMultiPageCard/BaseMultiPageCard";
import BaseUnderlinedHeading from '../../base/BaseUnderlinedHeading/BaseUnderlinedHeading';
import InputTextWithIcon from '../InputTextWithIcon/InputTextWithIcon';
import "./FormSignUp.scss";

const FormSignUp = () => {
    const formsList = [
        <section className="form-sign-up__main">
            <InputTextWithIcon 
                labelText="e-mail"
                inputType="email"
            />

            <InputTextWithIcon 
                labelText="username"
                inputType="username"
            />
        </section>,

        <section className="form-sign-up__main">
            <div className="form-sign-up__main__two_on_row">
                <InputTextWithIcon 
                    labelText="fullname"
                    inputType="text"
                />

                <InputTextWithIcon 
                    labelText="date of birth"
                    inputType="date"
                />
            </div>

            <div className="form-sign-up__main__two_on_row">
                <InputTextWithIcon 
                    labelText="country"
                    inputType="text"
                />

                <InputTextWithIcon 
                    labelText="city"
                    inputType="text"
                />
            </div>
        </section>,

        <section className="form-sign-up__main">
            <InputTextWithIcon 
                labelText="password"
                inputType="password"
            />

            <InputTextWithIcon 
                labelText="confirm password"
                inputType="password"
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
            />
        </section>
    );
}

export default FormSignUp;