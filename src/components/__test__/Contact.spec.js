import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

test('Contact component renders correctly', () => {
  render(<Contact />);
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});

test('Contact form has name, email, and message fields', () => {
  render(<Contact />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
});

test('Contact form has a submit button', () => {
  render(<Contact />);
  const submitButton = screen.getByRole('button', { name: /submit/i });
  expect(submitButton).toBeInTheDocument();
});

test('Contact form fields are required', () => {
  render(<Contact />);
  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const messageInput = screen.getByLabelText(/message/i);
  expect(nameInput).toBeRequired();
  expect(emailInput).toBeRequired();
  expect(messageInput).toBeRequired();
});

test('Contact component matches snapshot', () => {
  const { asFragment } = render(<Contact />);
  expect(asFragment()).toMatchSnapshot();
});

// test('Contact form submits correctly', () => {
//   render(<Contact />);
//   const form = screen.getByRole('form');
//   fireEvent.submit(form);
//   const nameInput = screen.getByLabelText(/name/i);
//   const emailInput = screen.getByLabelText(/email/i);
//   const messageInput = screen.getByLabelText(/message/i);
//   expect(nameInput.value).toBe('');
//   expect(emailInput.value).toBe('');
//   expect(messageInput.value).toBe('');
// });

test('Contact form has more than 2 input fields', () => {
  render(<Contact />);
  const inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBeGreaterThan(2);
});

test('Contact form has a textarea for message', () => {
  render(<Contact />);
  const textarea = screen.getByRole('textbox', { name: /message/i });
  expect(textarea).toBeInTheDocument();
});