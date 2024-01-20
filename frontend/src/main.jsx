// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Appbar from "./Appbar.jsx";
import "./index.css";
import UpdateBook from "./UpdateBook.jsx";
import AddBook from "./addBook.jsx";
import Bookdetails from "./Bookdetails.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Appbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/updateBook/:id" element={<UpdateBook />}></Route>
      <Route path="/addBook" element={<AddBook />}></Route>
      <Route path="/getBookById/:id" element={<Bookdetails />}></Route>
    </Routes>
  </Router>
);
