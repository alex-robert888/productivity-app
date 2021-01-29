import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./UserProfilePage.scss";
import Gravatar from 'react-gravatar';
import BaseUnderlinedHeading from '../../components/base/BaseUnderlinedHeading/BaseUnderlinedHeading'
import '../../assets/global-style/_classes.scss'
import InputTextWithIcon from '../../components/authentication/InputTextWithIcon/InputTextWithIcon';
import BasePopUp from '../../components/base/BasePopUp/BasePopUp';
import emailIcon from '../../assets/images/email-icon.svg';
import passwordIcon from '../../assets/images/password-icon.svg';
import profileUserIcon from '../../assets/images/profile-user.svg';
import locationIcon from '../../assets/images/location-icon.svg';
import { selectUserCredentials, selectUserJwt } from '../../store/userSlice';
import axios from 'axios';
import { SERVER_URL_USERS_AUTHENTICATED } from '../../global/server';

const UserProfilePage = () => {
    const selectorUserCredentials = useSelector(selectUserCredentials);
    const selectorUserJwt = useSelector(selectUserJwt);
    const [isPopUpDisplayed, setIsPopUpDisplayed] = useState(false);
    const [newUserCredentials, setNewUserCredentials] = useState({
        fullName: "",
        email: "",
        dateOfBirth: "",
        country: "",
        city: "",
        username: "",
        password: ""
    });

    useEffect(() => {
        setNewUserCredentials({
            fullName: selectorUserCredentials.fullName,
            email: selectorUserCredentials.email,
            dateOfBirth: selectorUserCredentials.dateOfBirth,
            country: selectorUserCredentials.country,
            city: selectorUserCredentials.city,
            username: selectorUserCredentials.username,
            password: ""
        })
    }, [selectorUserCredentials]);

    function handleInputChange(e) {
        e.preventDefault();
        setNewUserCredentials({
            ...newUserCredentials,
            [e.target.name]: e.target.value
        });
    }

    async function handleButtonApplyChangesClick(e) {
        e.preventDefault();
        const jwt = await selectorUserJwt;
        await axios.patch(SERVER_URL_USERS_AUTHENTICATED, {
            user: {
                full_name: newUserCredentials.fullName,
                email: newUserCredentials.email,
                date_of_birth: newUserCredentials.dateOfBirth,
                country: newUserCredentials.country,
                city: newUserCredentials.city,
                username: newUserCredentials.username,
                password: "",
                password_confirmation: ""            
            }
        });
       
        setIsPopUpDisplayed(true);
    }

    return (
        <section className="user-profile-page">
            <div>
                <section className="user-profile-page__heading-section">
                    <BaseUnderlinedHeading 
                        text="Your Profile"
                    />

                    <article className="user-profile-page__heading-section__gravatar">
                        <Gravatar 
                            email="robertalexandru2712@gmail.com" 
                            size={75}
                            rating="g"
                        />
                        <a href="https://en.gravatar.com/" className="text--x-small">Edit Gravatar</a>
                    </article>
                </section>
                <form className="user-profile-page__edit_form">
                    <InputTextWithIcon 
                        labelText="password"
                        inputName="password"
                        inputType="password"
                        extraNote="via e-mail code activation"
                        iconPath={passwordIcon}
                        inputInitialValue={"**************"}
                        inputOnChange={(e) => handleInputChange(e)}
                    />

                    <InputTextWithIcon 
                        labelText="full name"
                        inputName="fullName"
                        inputType="text"
                        iconPath={profileUserIcon}
                        inputInitialValue={selectorUserCredentials.fullName}
                        inputOnChange={(e) => handleInputChange(e)}
                    />

                    <InputTextWithIcon 
                        labelText="e-mail"
                        inputName="email"
                        inputType="email"
                        iconPath={emailIcon}
                        inputInitialValue={selectorUserCredentials.email}
                        inputOnChange={(e) => handleInputChange(e)}
                    />

                    <InputTextWithIcon 
                        labelText="username"
                        inputName="username"
                        inputType="text"
                        iconPath={profileUserIcon}
                        inputInitialValue={selectorUserCredentials.username}
                        inputOnChange={(e) => handleInputChange(e)}
                    />

                    <InputTextWithIcon 
                        labelText="date of birth"
                        inputName="dateOfBirth"
                        inputType="date"
                        inputInitialValue={selectorUserCredentials.dateOfBirth}
                        inputOnChange={(e) => handleInputChange(e)}
                    />

                    <InputTextWithIcon 
                        labelText="country"
                        inputName="country"
                        inputType="text"
                        iconPath={locationIcon}
                        inputInitialValue={selectorUserCredentials.country}
                        inputOnChange={(e) => handleInputChange(e)}
                    />

                    <InputTextWithIcon 
                        labelText="city"
                        inputName="city"
                        inputType="text"
                        iconPath={locationIcon}
                        inputInitialValue={selectorUserCredentials.city}
                        inputOnChange={(e) => handleInputChange(e)}
                    />

                    <button className="button--filled" onClick={(e) => handleButtonApplyChangesClick(e)}>apply changes</button>
                </form>
            </div>

            <BasePopUp 
                isDisplayed={isPopUpDisplayed}
                heading="Modifications applied!"
                text="Your user details were changed!"
                handleCloseButtonClick={() => setIsPopUpDisplayed(false)}
            />
        </section>
    );
}

export default UserProfilePage;