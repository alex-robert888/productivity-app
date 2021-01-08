import React from 'react';
import './BaseUnderlinedHeading.scss';
import '../../../assets/global-style/_variables.scss';

const BaseUnderlinedHeading = ({text, underlineColor}) => {
    return (
        <article className='base-underlined-heading'>
            <h1>{text}</h1>
            <div
                data-testid="underline" 
                style={{backgroundColor: underlineColor}}
            >
            </div>
        </article>
    );
}

BaseUnderlinedHeading.defaultProps = {
    underlineColor: "#D5C5FF"
}

export default BaseUnderlinedHeading;