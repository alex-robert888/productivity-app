
import React from 'react';
import { render } from '@testing-library/react';
import CheckboxRememberMe from './CheckboxRememberMe';

it ("renders without crashing", () => {
    render(<CheckboxRememberMe></CheckboxRememberMe>);
});