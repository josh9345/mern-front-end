import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './search'
import SearchDisBox from './SearchDisBox'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
         Josh's Recipes
        </p>
      </header>
      <Search />
    </div>
  );
}

export default App;
