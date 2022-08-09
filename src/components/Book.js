import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Books.css";
const Book = (props) => {
  let naigation = useNavigate();
  const routeChange = () => {
    let path = `/viewbook/${_id}`;
    naigation(path);
  };
  const { _id, name, author, description, price, image } = props.book;
  const deleteBook = async () => {
    await axios
      .delete(`http://localhost:5000/books/deleteBook/${_id}`)
      .then((res) => res.data)
      .then(() => naigation("/home"))
      .then(() => naigation("/viewbook"));
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <article>By {author}</article>
      <h4>{name}</h4>
      <p>{description}</p>
      <h3>RS {price}</h3>
      <div className="button">
        <button onClick={routeChange}>Update</button>
        <button onClick={deleteBook}>Delete</button>
      </div>
    </div>
  );
};

export default Book;
