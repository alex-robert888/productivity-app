import React from "react";
import "./CheckboxRememberMe.scss";
import '../../../assets/global-style/_classes.scss';

const CheckboxRememberMe = () => {
    return (
        <article className="checkbox-remember-me">
            <input className="text--small" type="checkbox" name="input-checkbox"     />
            <label className="text--small" htmlFor="input-checkbox">Remember me</label>
        </article>
    );
}

export default CheckboxRememberMe;