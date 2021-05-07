import React, {useState, useMemo} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
//@ts-ignore
import Main from './Pages/Main.tsx';
// @ts-ignore
import {Manuscript} from './Pages/Manuscript.tsx';
// @ts-ignore
import {Sign} from './Pages/Sign.tsx';
// @ts-ignore
import {login} from './utils/login.tsx';
// @ts-ignore
import {UserContext} from './UserContext.tsx';

function App() {

  const [user, setUser] = useState(null);
  const value = useMemo(() => ({user, setUser}), [user, setUser]);

  return (
    <Router>
      <UserContext.Provider value={value}>
        <nav>
          <ul>
            <li>
              <Link to="/">Main page</Link>
            </li>
            <li>
              <Link to="/sign/">Sign in</Link>
            </li>
            {user ?  
              <li>
                <Link to="/manuscript/">Manuscripts</Link>
              </li>
            : 
            ""}                     
          </ul>
        </nav>        
        <Route path="/manuscript/" component={Manuscript} />
        <Route path="/" exact component={Main} />
        <Route path="/sign/" component={Sign} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
