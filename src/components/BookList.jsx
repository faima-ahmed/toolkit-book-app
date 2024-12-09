import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
    const {books}= useSelector((state)=> state.booksR);

    const handleDelete= (id)=>{
console.log(id)
    }

    return (
        <div>
            <h2>List of Books</h2>
           {books && books.length>0 ?  (
             <ul>
             {books.map((book)=>{
                 return (
                    <li key={book.id}>
                     {book.title} by {book.author} - ${book.price} - {book.quantity}{''}pcs
                     <button onClick={()=> handleDelete(book.id)}>Delete</button>
                 </li>
                 );
             })}
             </ul>
           ): (
            <p>No Book exist</p>
           )}
        </div>
    );
};

export default BookList;