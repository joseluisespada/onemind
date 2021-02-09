import { render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import makeServer from "./lib/server";

let server;

beforeEach(() => {
  server = makeServer({ environment: "test" });
});

afterEach(() => {
  server && server.shutdown();
});

test('renders choose a pet', () => {
  render(<App />);
  const linkElement = screen.getByText(/choose a pet/i);
  expect(linkElement).toBeInTheDocument();
});

test('loads pets', async () => {
	render(<App />);

	expect(await waitFor(() => screen.getByText(/koala/i))).toBeInTheDocument();
	expect(await waitFor(() => screen.getByText(/dog/i))).toBeInTheDocument();
})

test("loads cards", async () => {
  render(<App />);

  await waitFor(() => screen.getByText(/koala/i))
  userEvent.click(screen.getByText(/koala/i));

  expect(await waitFor(() => screen.getByText(/Jennie/i))).toBeInTheDocument();
  expect(await waitFor(() => screen.getByText(/Reva/i))).toBeInTheDocument();
  expect(await waitFor(() => screen.getByText(/Estrada/i))).toBeInTheDocument();
  expect(await waitFor(() => screen.getByText(/Kelsey/i))).toBeInTheDocument();
});

