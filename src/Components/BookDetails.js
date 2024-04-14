import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddForm from './AddForm';

const detailContainer = document.getElementById('details-root')

const BookDetails = ({book, onClose}) => {
    const [showEdit, setShowEdit] = useState(false);

    const showEditHandler = () => {
        setShowEdit(true);
    }

     //close add form
     const closeEditHandler = () => {
        setShowEdit(false);
    }
    return (
        ReactDOM.createPortal(
        <div>
            {showEdit? <AddForm book={book} onClose={closeEditHandler}/> :
            <div>
            <p>Book Name: {book.bookName}</p>
            <p>Price: {book.price}</p>
            <p>Category: {book.category}</p>
            <p>Description: {book.desc}</p>
            </div>}
            
            <div>
                <button onClick={showEditHandler}>edit</button>
                <button onClick={() => {onClose()}}>Back</button>
            </div>
        </div>
        , detailContainer)
    );
};

export default BookDetails;