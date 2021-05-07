import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
// @ts-ignore
import Manuscript from './Pages/Manuscript.tsx';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/manuscript/">Manuscripts</Link>
          </li>
        </ul>
      </nav>
      <Route path="/manuscript/" component={Manuscript} />
    </Router>
  );
}

export default App;
