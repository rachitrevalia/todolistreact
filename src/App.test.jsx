import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';  // Import jest-dom for custom matchers
import App from './App';
import { expect } from 'vitest';

test('renders App component', () => {
    render(<App />);
    const header = screen.getByText('Todo List');
    expect(header).toBeInTheDocument();
});

test('add and clear todo', () => {
    render(<App />);

    // Input fields for description, date, and status
    const desc = screen.getByPlaceholderText('description');
    fireEvent.change(desc, { target: { value: 'Go to coffee' } });
    const date = screen.getByPlaceholderText('date');
    fireEvent.change(date, { target: { value: '19:09:2024' } });
    const status = screen.getByPlaceholderText('status');
    fireEvent.change(status, { target: { value: 'Open' } });

    // Add Todo button
    const addButton = screen.getByText('Add Todo');
    fireEvent.click(addButton);

    // Check if the todo was added to the table
    const table = screen.getByRole('table');
    expect(table).toHaveTextContent('Go to coffee');
    expect(table).toHaveTextContent('19:09:2024');
    expect(table).toHaveTextContent('Open');

    // Clear button
    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);

    // Check if the todos were cleared
    expect(table).not.toHaveTextContent('Go to coffee');
    expect(table).not.toHaveTextContent('19:09:2024');
    expect(table).not.toHaveTextContent('Open');
});