import React from "react";
import ReactDom from 'react-dom';
import "./BasePopUp.scss";
import '../../../assets/global-style/_classes.scss';
import checkmark from '../../../assets/images/checkmark.svg';

const BasePopUp = ({ isDisplayed, heading, text, handleCloseButtonClick, children }) => {
    if (!isDisplayed) {
        return null;
    }

    return ReactDom.createPortal(
        <div className="base-pop-up">
            <div className="base-pop-up__overlay"></div>
            <div className="base-pop-up__box">
                <img src={checkmark} alt="check mark" />
                <div className="base-pop-up__box__text">
                    <h1>{heading}</h1>
                    <p>{text}</p>
                </div>

                {children}
                
                <button
                    className="button--filled"
                    onClick={() =>  handleCloseButtonClick()}
                >
                    alright!
                </button>
            </div>
        </div>,
        document.getElementById('portal')
    );
}

export default BasePopUp;