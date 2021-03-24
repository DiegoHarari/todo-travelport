import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import TodoList from '../TodoList'
import TodoForm from '../TodoForm'


afterEach(() => cleanup)

test('should render todolist component', () => {
    render(<TodoList />)
    const todoListElement = screen.getByTestId('todo-list')
    expect(todoListElement).toBeInTheDocument()
    expect(todoListElement).toHaveTextContent('What is your main focus today?')
    expect(screen.getByPlaceholderText('Add a todo')).toBeInTheDocument();
})

test('should render todo form component initial DOM', () => {
    render(<TodoForm />)
    const todoListElement = screen.getByTestId('todo-form')
    expect(todoListElement).toBeInTheDocument()
})

test('should render todo input component', () => {
    render(<TodoForm />)
    const inputElement = screen.getByTestId('todo-input')
    expect(inputElement).toBeInTheDocument()
})

test('input should start with empty text', () => {
    render(<TodoForm />)
    const inputElement = screen.getByTestId('todo-input')
    expect(inputElement.getAttribute('value')).toBe('');
})

test('when text is entered the input should show the text entered by the user', () => {
    render(<TodoForm />)
    const inputElement = screen.getByTestId('todo-input')
    fireEvent.change(inputElement, { target: { value: "Buy groceries" } });
    expect(inputElement.value).toBe("Buy groceries");
})

test('input element should be on focus when page is loaded', () => {
    render(<TodoForm />)
    const inputElement = screen.getByTestId('todo-input')
    expect(inputElement).toBe(document.activeElement);

})

test('Add button should be rendered on page load', () => {
    render(<TodoForm />)
    const addButton = screen.getByTestId('add-button')
    expect(addButton).toBeInTheDocument()
})

