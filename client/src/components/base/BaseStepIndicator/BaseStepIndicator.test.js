import React from 'react';
import { render } from '@testing-library/react';
import BaseStepIndicator from './BaseStepIndicator';

it ("renders without crashing", () => {
    render(<BaseStepIndicator></BaseStepIndicator>);
});