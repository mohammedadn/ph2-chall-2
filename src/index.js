// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter } from 'react-router-dom'
// import App from "./components/App";
// import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));


import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'))