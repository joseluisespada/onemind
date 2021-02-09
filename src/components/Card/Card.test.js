import { render, screen } from '@testing-library/react';
import Card from './Card';

test('renders personalized name', () => {
  const name = {
  	given: "Satoshi",
  	surname: "Nakamoto"
  }
  render(<Card name={name} />);
  expect(screen.getByText(/Name: Satoshi/i)).toBeInTheDocument();
  expect(screen.getByText(/Surname: Nakamoto/i)).toBeInTheDocument();
});

test('renders age', () => {
  render(<Card age={11} />);
  expect(screen.getByText(/Age: 11/i)).toBeInTheDocument();
});

test('renders points', () => {
  render(<Card points={161} />);
  expect(screen.getByText(/161 pts/i)).toBeInTheDocument();
});