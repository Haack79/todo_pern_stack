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
    const getTodos = async() => {
        try {
            const response = await fetch('http://localhost:5001/todos');
            const jsonData = await response.json();
            setTodos(jsonData);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        getTodos();
    }, []);
    return (
        <Fragment>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*
                    <tr>
                        <td>space 1</td>
                        <td>space 2</td>
                        <td>space 3</td>
                    </tr>
                    */}
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}</td>
                            <td><EditTodo todo={todo}/></td>
                            <td><button onClick={() => {deleteTodo(todo.todo_id)}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
};
export default ListTodos; 