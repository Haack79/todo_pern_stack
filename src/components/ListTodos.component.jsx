import React, {Fragment, useState, useEffect} from 'react';

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:5001/todos/${id}`, {
                method: 'DELETE'
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err);
        }
    }
}