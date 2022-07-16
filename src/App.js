import logo from './logo.svg';
import './App.css';
import react, {useState, useEffect} from 'react';
import firebase from './firebase/server';
// import * as api from './firebase/api';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <Test />
    </div>
  );
}

export default App;
