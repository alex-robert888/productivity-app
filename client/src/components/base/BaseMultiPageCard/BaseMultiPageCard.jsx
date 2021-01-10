import React, { useEffect, useState } from 'react';
import './BaseMultiPageCard.scss';
import '../../../assets/global-style/_classes.scss';
import BaseStepIndicator from '../BaseStepIndicator/BaseStepIndicator';

const BaseMultiPageCard = ({numberOfPages, listOfMainFragments}) => {
    const [currentPage, setCurrentPage] = useState(0);
    
    useEffect(() => {

    }, [currentPage])
    
    function buttonNextStepOnClick(e) {
        e.preventDefault();
        setCurrentPage(currentPage + 1);
    }

    function buttonCreateAccountOnClick(e) {
        // post request to server
        e.preventDefault();
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
                        <button className="button--no-fill" onClick={buttonCreateAccountOnClick}>create account</button>
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