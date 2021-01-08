import React from "react";
import "./InputTextWithIcon.scss";
import '../../../assets/global-style/_classes.scss';

const InputTextWithIcon = ({iconUrl, labelText, inputType}) => {
    return (
        <div className="input-text-with-icon">
            <label
                className="text--small"
                htmlFor="input"
            >
                {labelText}
            </label>
            <input 
                type={inputType} 
                name="input" 
                // style = {{background: url(iconUrl)}}
            />
        </div>
    );
}

InputTextWithIcon.defaultProps = {
    inputType: "text"
};

export default InputTextWithIcon;