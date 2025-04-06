import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MyBookings from "./MyBookings";
import Confirmation from "./Confirmation";

function App() {
  return <div className="App">
    <MyBookings/>
    <Confirmation/>
  </div>;
}

export default App;
