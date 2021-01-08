
import React from 'react';
import { render } from '@testing-library/react';
import FormLogIn from './FormLogIn';

it ("renders without crashing", () => {
    render(<FormLogIn></FormLogIn>);
});