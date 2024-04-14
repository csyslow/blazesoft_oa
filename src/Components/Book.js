import React, { useState } from 'react';
import { deleteBook } from '../store/bookSlice';
import { useDispatch } from 'react-redux';
import BookDetails from './BookDetails';
import classes from './Book.module.css'

const Book = (props) => {

    //get dispatch
    const dispatch = useDispatch();

    // delete the book
    const deleteBookHandler = () => {
        dispatch(deleteBook(props.book));
    }

    const [showDetails, setShowDetails] = useState(false);

    const showBookDetailsHandler = () => {
        setShowDetails(true);
    }

    const closeDetailsHandler = () => {
        setShowDetails(false);
    }
    return (
        <>
            <tr>
                <td onClick={showBookDetailsHandler}>{props.book.bookName}</td>
                <td className={classes.price}>{props.book.price}</td>
                <td>{props.book.category}</td>
                <td><button onClick={deleteBookHandler}>Delete Book</button></td>
            </tr>
            {showDetails && <BookDetails book={props.book} onClose={closeDetailsHandler}/>}
        </>
    );
};

export default Book;