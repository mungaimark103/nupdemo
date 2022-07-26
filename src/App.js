import React from "react";
import Home from "./components/home/Home";
import Cities from "./components/cities/Cities";
import Info from "./components/info/Info";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/Header";
const App = () => {
 
  return (
    <Router>
      <Header/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cities" element={<Cities/>}></Route>
      <Route path="/info" element={<Info/>}></Route>
    </Routes>
    </Router>
    
  );
};

export default App;