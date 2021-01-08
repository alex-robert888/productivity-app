
import React from 'react';
import { render } from '@testing-library/react';
import InputTextWithIcon from './InputTextWithIcon';

it ("renders without crashing", () => {
    render(<InputTextWithIcon></InputTextWithIcon>);
});