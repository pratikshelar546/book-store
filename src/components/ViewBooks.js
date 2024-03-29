import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Books.css"
const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const ViewBooks = () => {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  // console.log(books);

  return (
    <div>
      <ul>
        {books && books.map((book,i)=>(
          <div className="books" key={i}>
            <Book book={book}/>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ViewBooks;
