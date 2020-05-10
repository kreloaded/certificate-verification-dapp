import React, { Component } from "react";

import Navbar from './components/Navbar';
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <h1>Hello App</h1>
      </div>
    );
  }
}

export default App;
