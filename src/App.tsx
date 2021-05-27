import React, {useState, useMemo} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
//@ts-ignore
import Main from './Pages/Main.tsx';
//@ts-ignore
import {Field} from  './Pages/Field.tsx';
// @ts-ignore
import {Manuscript} from './Pages/Manuscript.tsx';
// @ts-ignore
import {Sign} from './Pages/Sign.tsx';
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
            {user ?  
              <li>
                <Link to="/manuscripts/">Manuscripts</Link>
              </li>              
            : 
            ""}
            {user ?  
              <li>
                <Link to="/fields/">Fields</Link>
              </li>              
            : 
            ""}                     
          </ul>
        </nav>        
        <Route path="/manuscripts/" component={Manuscript} />
        <Route path="/" exact component={Main} />
        <Route path="/sign/" component={Sign} />
        <Route path="/fields/" component={Field} />
      </UserContext.Provider>
    </Router>
  );
}

export default App;
