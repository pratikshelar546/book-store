import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const id = useParams().id;
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/getBook/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.id]: e.target.value });
  };
  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/updateBook/${id}`, {
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
  // console.log(inputs);
  return (
    <div>
      {inputs && (
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
      )}
    </div>
  );
};

export default BookDetail;
