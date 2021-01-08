
import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import FormLogIn from '../../components/authentication/FormLogIn/FormLogIn';
import FormSignUp from '../../components/authentication/FormSignUp/FormSignUp';
import './AuthenticationPage.scss';
import authenticationPageIllustration from '../../assets/images/auth-illustration.svg'
import ButtonGoogleAuthentication from '../../components/authentication/ButtonGoogleAuthentication/ButtonGoogleAuthentication';
import '../../assets/global-style/_classes.scss';

const AuthenticationPage = () => {
    return (
        <section id='authentication-page' className="page--padding-double">
            <img 
                src={authenticationPageIllustration} 
                alt="vector illustration with a girl next to an hour glass" 
                id="authentication-page-illustration"
            />

            <section>
                <Switch>
                    <Route path='/auth/login'  component={FormLogIn} />
                    <Route path='/auth/signup' component={FormSignUp} />
                </Switch>

                <button className="button--filled">Log in</button>
                <ButtonGoogleAuthentication />

                <p className="text--small">Have no account yet? <a href="/auth/signup" className="text--small">Sign up</a></p>
                <p className="text--small"><a href="/auth/reset" className="text--small">Reset Password</a></p>
            </section>
        </section>
    );
}

export default AuthenticationPage;