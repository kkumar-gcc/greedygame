import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppListing from "./containers/AppListing";
import Header from "./containers/Header";
import "./App.css";
// import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<AppListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
