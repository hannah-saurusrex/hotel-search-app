import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hotels from "./Hotels";
import Filters from "./Filters";
import { filters, hotels } from "./data";

var App = () => (
  <div className="App">
    <Filters filters={filters} />
    <Hotels hotels={hotels} />
  </div>
);

export default App;
