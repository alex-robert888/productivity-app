import React from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import './TestPage.scss';
import '../../assets/global-style/_classes.scss';
import TestBaseMultiPageCard from './TestBaseMultiPageCard/TestBaseMultiPageCard';
import TestBaseUnderlinedHeading from './TestBaseUnderlinedHeading/TestBaseUnderlinedHeading';

const TestPage = () => {
    return (
        <section className='test-page page--padding-double'>
            <Switch>
                <Route path='/test/multipage' component={TestBaseMultiPageCard} />
                <Route path='/test/heading' component={TestBaseUnderlinedHeading} />
            </Switch>            
        </section>
    );
}

export default TestPage;