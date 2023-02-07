import React, { useState } from 'react'
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {

    const [ modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler()
    {
        setModalIsOpen(true);
    }

    function closeModelHandler()
    {
        setModalIsOpen(false);
    }


    return (
        <div className="card">
            <h2>{props.text}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { modalIsOpen && <Modal onCancel={closeModelHandler} onConfirm={closeModelHandler} /> }
            { modalIsOpen && <Backdrop onCancel={closeModelHandler} /> }
            
        </div>
    )
}

export default Todo
