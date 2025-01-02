import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addBook } from "../features/bookSlice";

const BookForm = () => {
    
    const [book, setBook] = useState({
        title: "",
        author: "",
        price: "",
        quantity: "",
    });

    const dispatch= useDispatch();
    
  const handleChange = (event) => {
    const { name, value } = event.target;
    setBook((prevBook) => ({
        ...prevBook, [name]:value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addBook({...book, id:nanoid() }))
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={book.title}
        onChange={handleChange}
        required
      />

<input
        type="text"
        name="author"
        placeholder="Author"
        value={book.author}
        onChange={handleChange}
        required
      />

<input
        type="number"
        name="price"
        placeholder="Price"
        value={book.price}
        onChange={handleChange}
        required
      />

<input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={book.quantity}
        onChange={handleChange}
        required
      />

<button type="submit">AddBook</button>
      
    </form>
  );
};

export default BookForm;
