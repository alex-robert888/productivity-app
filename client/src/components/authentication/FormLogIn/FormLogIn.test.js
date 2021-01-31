
import React from 'react';
import { render } from '@testing-library/react';
import FormLogIn from './FormLogIn';
import { store } from '../../../store/store';
import { Provider } from 'react-redux';

it ("renders without crashing", () => {
    render(
        <Provider store={store}>
            <FormLogIn />
        </Provider>
    );
});