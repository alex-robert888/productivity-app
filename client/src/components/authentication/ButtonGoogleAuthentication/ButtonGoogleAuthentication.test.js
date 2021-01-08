
import React from 'react';
import { render } from '@testing-library/react';
import ButtonGoogleAuthentication from './ButtonGoogleAuthentication';

it ("renders without crashing", () => {
    render(<ButtonGoogleAuthentication></ButtonGoogleAuthentication>);
});