import React, { useState, useEffect } from 'react';
import './App.css';
import Timer from './Timer';

export default function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Timer />
      </header>
    </div>
  );
}
