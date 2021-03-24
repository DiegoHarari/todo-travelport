import React, { useState, useEffect, useRef } from 'react';

function TodoForm({ edit, onSubmit }) {
    const [input, setInput] = useState(edit ? edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };

    return (
        <div data-testid="todo-form">
            <form onSubmit={handleSubmit} className='todo-form'>
                {edit ? (
                    <>
                        <input
                            placeholder='Update your item'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            ref={inputRef}
                            className='todo-input edit'
                        />
                        <button onClick={handleSubmit} className='todo-button edit'>
                            Update
          </button>
                    </>
                ) : (
                    <>
                        <input
                            data-testid="todo-input"
                            placeholder='Add a todo'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='todo-input'
                            ref={inputRef}
                        />
                        <button onClick={handleSubmit} className='todo-button' data-testid="add-button">
                            Add todo
          </button>
                    </>
                )}
            </form>
        </div>
    );
}

export default TodoForm;