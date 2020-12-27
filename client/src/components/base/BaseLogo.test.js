
import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import BaseLogo from './BaseLogo';

it ("renders without crashing", () => {
    render(<BaseLogo></BaseLogo>);
});

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
  }));

it ("redirects to home page on click", () => {
    const { getByRole } = render(
        <MemoryRouter>
          <BaseLogo />
        </MemoryRouter>,
      );

    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
});