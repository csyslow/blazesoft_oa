import { createSlice } from "@reduxjs/toolkit";

//books data
const BOOKS_DATA = [
    {
        id: 0,
        bookName:"All the Light We Cannot See" ,
        price: 19.99,
        category: "Science Fiction",
        desc:'From Anthony Doerr, the highly acclaimed, multiple award-winning author of Cloud Cuckoo Land, the beautiful, stunningly ambitious instant New York Times bestseller about a blind French girl and a German boy whose paths collide in occupied France as both try to survive the devastation of World War II.'
    },
    {
        id: 1,
        bookName: "Escape Room",
        price: 13.99,
        category: "Mystery",
        desc:"There's no getting away from this unputdownable thriller about teens being held captive in an escape room where the stakes are all too real. Perfect for spooky season!"
    },
    {
        id: 2,
        bookName: "Sapiens: A Brief History of Humankind",
        price: 29.99,
        category: "History",
        desc:'Destined to become a modern classic in the vein of Guns, Germs, and Steel, Sapiens is a lively, groundbreaking history of humankind told from a unique perspective.'
    }
];

//create book api slice
const bookSlice = createSlice({
    name: 'book',
    initialState: {
        booksData:BOOKS_DATA,
        name:'Duke'
    },
    reducers: {
        //delete a book reducer
        deleteBook: (state, action) => {
            const deletedBook = action.payload;
            state.booksData = state.booksData.filter(book => book.id !== deletedBook.id);
        },
        //add a book
        addBook: (state, action) => {
            const addedBook = action.payload;
            console.log('addedBook', addedBook)
            //add id for new added book
            const addedBookWithId = {...addedBook, id: state.booksData.length === 0 ? 
                0 :
                (+state.booksData[state.booksData.length-1].id + 1)}
            state.booksData = [...state.booksData, addedBookWithId];
        },
        //edit a book
        editBook: (state, action) => {
            const editedBook = action.payload;
            const editIdx = state.booksData.findIndex(book => book.id === editedBook.id);
            state.booksData[editIdx] = editedBook;
        }   
    }
})

export const { deleteBook, addBook, editBook } = bookSlice.actions;
export const { reducer: bookReducer } = bookSlice;