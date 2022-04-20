import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const divContainer = screen.getByRole("links-container");
  expect(divContainer).toBeInTheDocument();

  const SpecificCoinContainer = screen.getByRole("specific-coin-container");
  expect(SpecificCoinContainer).toHaveTextContent("Search A Specific Coin");
});
