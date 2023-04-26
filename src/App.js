// import logo from './logo.svg';
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Query1 from "./components/Query1";
import Query2 from "./components/Query2";
import Query3 from "./components/Query3";
import Query4 from "./components/Query4";
import Query5 from "./components/Query5";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/query1" element={<Query1 />} exact></Route>
        <Route path="/query2" element={<Query2 />} exact></Route>
        <Route path="/query3" element={<Query3 />} exact></Route>
        <Route path="/query4" element={<Query4 />} exact></Route>
        <Route path="/query5" element={<Query5 />} exact></Route>
      </Routes>
    </div>
  );
}

export default App;
