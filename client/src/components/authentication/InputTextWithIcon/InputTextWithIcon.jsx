import React, { useEffect, useState } from "react";
import "./InputTextWithIcon.scss";
import '../../../assets/global-style/_classes.scss';

const InputTextWithIcon = ({ iconPath, labelText, inputType, inputName, inputOnChange, extraNote, inputInitialValue }) => {
    const [inputValue, setInputValue] = useState(inputInitialValue);

    useEffect(() => {
        setInputValue(inputInitialValue);
    }, [inputInitialValue]);

    function handleInputChange(e) {
        console.log("Input changes " + e.target.value);
        inputOnChange(e);
        setInputValue(e.target.value);
    }

    return (
        <div className="input-text-with-icon">
            <div className="input-text-with-icon__label_section">
                <label
                    className="text--small"
                    htmlFor="input"
                >
                    {labelText}
                </label>
                {
                    extraNote &&
                    <small>
                        <span>* </span>
                        {extraNote}
                    </small>
                }
            </div>
            <input
                type={inputType}
                name={inputName}
                onChange={(e) => handleInputChange(e)}
                value={inputValue}
            />

            {
                iconPath &&
                <img src={iconPath} alt="input icon"/>
            }
        </div>
    );
}

InputTextWithIcon.defaultProps = {
    inputType: "text"
};

export default InputTextWithIcon;