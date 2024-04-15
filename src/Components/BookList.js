import React, { useState } from 'react';
import classes from "./BookList.module.css"
import Book from './Book';
import AddForm from './AddForm';
import { useSelector } from 'react-redux';

const BookList = () => {
    //get book state
    const { book } = useSelector(state => state);
    console.log(book.booksData);
    //set show Add pop-up
    const [showAdd, setShowAdd] = useState(false);
    
    //show add form
    const showAddHandler = () => {
        setShowAdd(true);
    }

    //close add form
    const closeAddHandler = () => {
        setShowAdd(false);
    }
    return (
        <div className={classes.bookList}>
           <button className={classes.addBtn} onClick={showAddHandler}>Add Book</button>
            { showAdd && <AddForm onClose={closeAddHandler}/>}
            <table className={classes.bookTable}>
                <thead>
                    <tr>
                    <th>Book Name</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {(book.booksData.length === 0) ? 
                    <p>No books yet...</p> :
                    book.booksData.map(book => <Book key={book.id} book={book} />)}
                </tbody>
            </table>
        </div>
         

    );
};

export default BookList;