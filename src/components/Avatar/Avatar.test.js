import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Avatar from './Avatar';

test('renders personalized name', () => {
  render(<Avatar name="Satoshi" />);
  const element = screen.getByText(/Satoshi/i);
  expect(element).toBeInTheDocument();
});

test("calls onclick prop on avatar click", () => {
  const onClick = jest.fn();
  render(<Avatar name="test" onClick={onClick} />);

  userEvent.click(screen.getByTestId("avatar"));

  expect(onClick).toHaveBeenCalled();
});