
import React from 'react';
import { render } from '@testing-library/react';
import FormSignUp from './FormSignUp';

it ("renders without crashing", () => {
    render(<FormSignUp></FormSignUp>);
});