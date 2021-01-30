
import React from "react";
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Logo from './Logo';

// Mock redirection (fired by onCLick event) to home page 
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
          <Logo />
        </MemoryRouter>,
      );

    fireEvent.click(getByRole('button'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
});