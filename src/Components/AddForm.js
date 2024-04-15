import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../store/bookSlice';
import Backdrop from '../UI/Backdrop/Backdrop';
import classes from './AddForm.module.css';

const AddForm = (props) => {

    const [inputData, setInputData] = useState({
        id: props.book ? props.book.id : '',
        bookName: props.book ? props.book.bookName : '',
        price: props.book ? props.book.price : '',
        category: props.book ? props.book.category : '',
        desc: props.book ? props.book.desc : ''
    });

    // double binding with form inputs
    const bookNameChangeHandler = (e) => {
        setInputData(prev => ({ ...prev, bookName: e.target.value }));
    };

    const priceChangeHandler = (e) => {
        setInputData(prev => ({ ...prev, price: e.target.value }));
    };

    const categoryChangeHandler = (e) => {
        setInputData(prev => ({ ...prev, category: e.target.value }));
    };

    const descChangeHandler = (e) => {
        setInputData(prev => ({ ...prev, desc: e.target.value }));
    };

    //get dispatch
    const dispatch = useDispatch();
    //add a book with input data
    const addBookHandler = () => {
        dispatch(addBook(inputData));
        props.onClose();
    }
    //edit a book with input data
    const editBookHandler = () => {
        dispatch(editBook(inputData));
        props.onClose()
    }
    return (
            <Backdrop>
                <div className={classes.addForm}>
                    Book Name:<input type="text" name="" id="" onChange={bookNameChangeHandler} value={inputData.bookName} />
                    <br />
                    Price: <input type="text" onChange={priceChangeHandler} value={inputData.price} />
                    <br />
                    Category: <input type="text" onChange={categoryChangeHandler} value={inputData.category} />
                    <br />
                    Description<textarea class="textarea-input" rows="4" cols="50" onChange={descChangeHandler} value={inputData.desc}></textarea>

                    <div className={classes.btns}>
                        <button onClick={props.book ? editBookHandler : addBookHandler}>Add</button>
                        <button onClick={() => { props.onClose() }}>Cancel</button>
                    </div>
                </div>
            </Backdrop>
    );
};

export default AddForm;