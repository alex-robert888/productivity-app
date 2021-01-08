
import React from 'react';
import { render } from '@testing-library/react';
import AuthenticationPage from './AuthenticationPage';

it ("renders without crashing", () => {
    render(<AuthenticationPage></AuthenticationPage>);
});