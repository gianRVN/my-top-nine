import './App.css';
import React from 'react'
import Welcome from './views/Welcome'
import PlaceDetail from './views/PlaceDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// import Navbar from './views/Navbar'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        {/* <nav>
         <Navbar/>
        </nav> */}
        <Switch>
          <Route path="/place/:placeID">
            <PlaceDetail />
          </Route>
          <Route path="/">
            <Welcome/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
