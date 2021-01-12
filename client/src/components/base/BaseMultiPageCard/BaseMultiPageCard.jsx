import React, { useEffect, useState } from 'react';
import './BaseMultiPageCard.scss';
import '../../../assets/global-style/_classes.scss';
import BaseStepIndicator from '../BaseStepIndicator/BaseStepIndicator';

const BaseMultiPageCard = ({numberOfPages, listOfMainFragments, handleButtonCreateAccountOnClick}) => {
    const [currentPage, setCurrentPage] = useState(0);
    
    useEffect(() => {

    }, [currentPage])
    
    function buttonNextStepOnClick(e) {
        e.preventDefault();
        setCurrentPage(currentPage + 1);
    }


    return (
        <article className='base-multipage-card'>
            { listOfMainFragments[currentPage] }
            <div className='base-multipage-card__next-step'>
                {
                    currentPage !== numberOfPages - 1 
                    ?
                        <button className="button--filled" onClick={buttonNextStepOnClick}>next step</button>
                    :
                        <button className="button--no-fill" onClick={() => handleButtonCreateAccountOnClick()}>create account</button>
                }
                <BaseStepIndicator 
                    numberOfSteps={numberOfPages}
                    currentStep={currentPage}
                />
            </div>
        </article>
    );
}

export default BaseMultiPageCard;