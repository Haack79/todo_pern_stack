import React, {Fragment, useState} from 'react';

const InputTodo = () => {

    const [description, setDescription] = useState('');

    const onSubmitForm = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            await fetch('https://localhost:5001/todos', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(body)
            });
            window.location = '/'; 
        } catch (err) {
            console.error(err); 
        }
    }
    return (
        <Fragment>
            <h1>Todo List</h1>
            <form onSubmit={onSubmitForm}>
                <input
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <button>Add Todo</button>
            </form>
            <p>{description}</p>
        </Fragment>
    )
};
export default InputTodo; 