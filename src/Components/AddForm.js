import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook, editBook } from '../store/bookSlice';
import ReactDOM from 'react-dom';
import Backdrop from '../UI/Backdrop/Backdrop';

const addContainer = document.getElementById('add-root')

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
                <div>
                    Book Name:<input type="text" name="" id="" onChange={bookNameChangeHandler} value={inputData.bookName} />
                    <br />
                    Price: <input type="text" onChange={priceChangeHandler} value={inputData.price} />
                    <br />
                    Category: <input type="text" onChange={categoryChangeHandler} value={inputData.category} />
                    <br />
                    Description: <input type="text" onChange={descChangeHandler} value={inputData.desc} />
                    <div>
                        <button onClick={props.book ? editBookHandler : addBookHandler}>Add</button>
                        <button onClick={() => { props.onClose() }}>Cancel</button>
                    </div>
                </div>
            </Backdrop>
    );
};

export default AddForm;