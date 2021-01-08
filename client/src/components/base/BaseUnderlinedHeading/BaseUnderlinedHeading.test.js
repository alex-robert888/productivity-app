
import React from 'react';
import { render, screen } from '@testing-library/react';
import BaseUnderlinedHeading from './BaseUnderlinedHeading';

it ("renders without crashing", () => {
    render(<BaseUnderlinedHeading />);
});

it ("displays the heading provided by props", () => {
    const textToDisplay = "Hello, my friend!";
    render(<BaseUnderlinedHeading text={textToDisplay} />)
    const textDisplayed = screen.getByRole("heading");
    expect(textDisplayed).toHaveTextContent(textToDisplay);
});

it ("colors the underline with the color provided by props", () => {
    const colorForUnderline = "#FDFDFD";
    const textToDisplay = "Hello, my friend!";
    render(<BaseUnderlinedHeading 
                text={textToDisplay}
                underlineColor={colorForUnderline}
            />);
    expect(screen.getByTestId("underline")).toHaveStyle(`background-color: ${colorForUnderline}`);
});