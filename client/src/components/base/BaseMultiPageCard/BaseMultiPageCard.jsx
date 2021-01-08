import React, { useEffect, useState } from 'react';
import './BaseMultiPageCard.scss';

const BaseMultiPageCard = ({numberOfPages, listOfMainFragments}) => {
    const [currentPage, setCurrentPage] = useState(1);
    
    useEffect(() => {

    }, [currentPage])
    
    return (
        <article className='base-multipage-card'>
            <div className='base-multipage-card__next-step'>
                <button>next step</button>
                
            </div>
        </article>
    );
}

export default BaseMultiPageCard;