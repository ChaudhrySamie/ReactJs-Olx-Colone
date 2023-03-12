import './App.css';
import Signup from './Screen/Signup';
import Login from './Screen/Login';
import { useState, useEffect } from 'react';
import Dashboard from './Screen/Dashboard';


import Router from './Config/Router';

function App() {

  return (
    <div className="App">
        <Router />
    </div>
  );
}

export default App;
