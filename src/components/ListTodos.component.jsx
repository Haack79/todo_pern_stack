import React, {Fragment, useEffect, useState} from 'react';
import EditTodo from './EditTodo.component';
// const todos = [
//     ['hello friend', 1]
// ]
const ListTodos = () => {
    const [todos, setTodos] = useState(['hello friend']);
    const deleteTodo = async (id) => {
        try {
            await fetch(`http://localhost:5001/todos/${id}`, {
                method: 'DELETE'
            });
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(err.message);
        }
    }
    const getTodos = async() => {
        try {
            const response = await fetch('http://localhost:5001/todos');
            const jsonData = await response.json(); 
            setTodos(jsonData); 
        } catch (err) {
            console.error(err.message); 
        }
    }
    useEffect(() => {
        getTodos();
    },[]);
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
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    */}
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description}{'temp description'}</td>
                            <td><EditTodo todo={todo}/></td>
                            <td><button onClick={() => {deleteTodo(todo.todo_id)}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos; 