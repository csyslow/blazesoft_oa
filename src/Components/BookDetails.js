import React, { useState } from 'react';
import AddForm from './AddForm';
import Backdrop from '../UI/Backdrop/Backdrop';
import classes from './BookDetails.module.css';


const BookDetails = ({ book, onClose }) => {
    const [showEdit, setShowEdit] = useState(false);

    const showEditHandler = () => {
        setShowEdit(true);
    }

    //close add form
    const closeEditHandler = () => {
        setShowEdit(false);
    }
    return (
        <Backdrop>
            <div className={classes.details}>
                {showEdit ? <AddForm book={book} onClose={closeEditHandler} /> :
                    <div>
                        <p>Book Name: <span>{book.bookName}</span></p>
                        <p>Price: <span className={classes.price}>{book.price}</span></p>
                        <p>Category: <span>{book.category}</span></p>
                        <p>Description: <br /><span>{book.desc}</span></p>
                    </div>}

                <div className={classes.btns}>
                    <button onClick={showEditHandler}>Edit</button>
                    <button onClick={() => { onClose() }}>Back</button>
                </div>
            </div>
        </Backdrop>

    );
};

export default BookDetails;