import React from 'react';
import { Router, Link } from "@reach/router";
import SearchBar from './components/SearchBar';
import PhotoDetails from './components/PhotoDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <SearchBar path="/"/>
        <PhotoDetails path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
