import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    price: "",      
    image: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };
  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books/addBook", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputs, checked);
    sendRequest().then(() => history("/viewbook"));
  };
  const [checked, setChecked] = useState(false);
  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <div className="mb-3">
          <label for="title" className="form-label">
            title
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={inputs.name}
            onChange={handleChange}
            id="name"
          />
        </div>
        <div className="mb-3">
          <label for="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={inputs.author}
            onChange={handleChange}
            id="author"
          />
        </div>
        <div className="mb-3">
          <label for="description" className="form-label">
            description
          </label>
          <input
            type="text"
            className="form-control"
            value={inputs.description}
            onChange={handleChange}
            id="description"
          />
        </div>
        <div className="mb-3">
          <label for="price" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            value={inputs.price}
            onChange={handleChange}
            id="price"
          />
        </div>
        <div className="mb-3">
          <label for="price" className="form-label">
            Image link
          </label>
          <input
            type="link"
            className="form-control"
            value={inputs.image}
            onChange={handleChange}
            id="image"
          />
        </div>

        <div>
          <input
            type="checkbox"
            id="available"
            checked={checked}
            onChange={() => setChecked(!checked)}
            name="available"
          />
          <label for="available">Available</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </div>
    </form>
  );
};

export default AddBook;
