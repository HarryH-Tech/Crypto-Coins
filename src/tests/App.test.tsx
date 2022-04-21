import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders 3 containers', () => {
  render(<App />);
  const divContainer = screen.getByRole("links-container");
  expect(divContainer).toBeInTheDocument();

  const SpecificCoinContainer = screen.getByRole("specific-coin-container");
  expect(SpecificCoinContainer).toHaveTextContent("Search A Specific Coin");


  const AllCoinsContainer = screen.getByRole("all-coins-container");
  expect(AllCoinsContainer).toHaveTextContent("All Coins");

  const HistoryContainer = screen.getByRole("history-container");
  expect(HistoryContainer).toHaveTextContent("History");

});
