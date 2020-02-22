import React, { useState } from 'react';
import { Router, Link } from "@reach/router";
import ClassSearchBar from './components/ClassSearchBar';
import PhotoDetails from './components/PhotoDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <ClassSearchBar path="/" />
        <PhotoDetails path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
