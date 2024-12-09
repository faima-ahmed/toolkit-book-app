import {createSlice} from '@reduxjs/toolkit';
 
const initialState= {books: [
    {id:1, title:'X', author:'Diya', price: 12, quantity:15},
    {id:2, title:'Y', author:'Khalid', price: 15, quantity:80}
]};

const bookSlice= createSlice({
 name: 'books',
 initialState ,
 reducers:{
    deleteBook: (state, action)
 }
})

export default bookSlice.reducer;