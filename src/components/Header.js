import React from 'react';
import { NavLink } from 'react-router-dom';
// import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
const Header = () => {
  return (
    <div>
 
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Book-Store</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="home">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="aboutus">about us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="viewbook">Books</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="Addbook">AddBook</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header