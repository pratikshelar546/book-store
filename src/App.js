import Header from "./components/Header";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddBook from "./components/AddBook";
import Aboutus from "./components/Aboutus";
import ViewBooks from "./components/ViewBooks";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<ViewBooks/>}exact/>
          <Route path="/home" element={<ViewBooks/>}exact/>
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route path="/AddBook" element={<AddBook />} exact/>
          <Route path="/viewbook" element={<ViewBooks />}exact />
          <Route path="/viewbook/:id" element={<BookDetail/>} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
