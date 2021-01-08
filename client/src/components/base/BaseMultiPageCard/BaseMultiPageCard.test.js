
import React from 'react';
import { render } from '@testing-library/react';
import BaseMultiPageCard from './BaseMultiPageCard';

it ("renders without crashing", () => {
    render(<BaseMultiPageCard></BaseMultiPageCard>);
});