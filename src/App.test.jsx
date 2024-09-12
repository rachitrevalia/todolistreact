import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import this
import App from './App';
import { expect } from 'vitest';

test('renders App component', () => {
  render(<App />);
  const header = screen.getByText('Todo List');
  expect(header).toBeInTheDocument();
});

test('add todo', () => {
    render(<App />);

    const desc = screen.getByPlaceholderText('description');
    fireEvent.change(desc, { target: { value: 'Go to coffee'}});
    const date = screen.getByPlaceholderText('date');
    fireEvent.change(date, {target: {value: '19:09:2024'}});
    const status = screen.getByPlaceholderText('status');
    fireEvent.change(status, {target: {value: 'Open'}});
    const button = screen.getByText('Add Todo');
    fireEvent.click(button);

    const table = screen.getByRole('table');
    expect(table).toHaveTextContent('Go to coffee');
})