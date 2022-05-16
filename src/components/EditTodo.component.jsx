import React, {Fragment, useState} from 'react';

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description);
    // edit descr func
    const updateDescription = async(e) => {
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:5001/todos/${todo.todo_id}`, {
                method: 'PUT',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body),
                port: 5432
            });
            window.location = '/';
        } catch (err) {
            console.error(err); 
        }
    }
    const [style, setStyle] = useState(false);
    const openCloseOnClick = val => setStyle(val); 
    return (
        <Fragment>
            <button id="myBtn" onClick={() => openCloseOnClick(true)}>Edit</button>
            {/* <!-- The Modal --> */}
            <EditTodoModalDiv open={style}>
            {/* <!-- Modal content --> */}
                <EditModalContent>
                        <input 
                            type="text" 
                            className="edit-form" 
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                        />
                        <EditButton onClick={() => {
                            setDescription(todo.description);
                            openCloseOnClick(false);
                        }}
                        >
                            CLOSE
                        </EditButton>
                        <button type="button"
                         onClick={(e) => updateDescription(e)}>update</button>
                </EditModalContent>
            </EditTodoModalDiv>
        </Fragment>
    )
}
export default EditTodo; 