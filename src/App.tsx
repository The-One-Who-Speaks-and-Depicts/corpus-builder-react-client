import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
// @ts-ignore
import Manuscript from './Pages/Manuscript.tsx';

function App() {
  return (
    <Manuscript />
  );
}

export default App;
