import { render } from '@testing-library/react';
import AddTodo from '../AddTodo';

test('renders AddTodo input', () => {
  const { getByPlaceholderText } = render(<AddTodo />);
  expect(getByPlaceholderText(/add a new task/i)).toBeInTheDocument();
});
