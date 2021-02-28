import React, { useState } from 'react';
import { Route, Switch,Link, BrowserRouter as Router  } from 'react-router-dom';
import './App.css';

import Films from "./Films/Films";
import Categories from "./Categories/Categories"
import Favoris from "./Favoris"
import Auteurs from "./Auteurs/Auteurs"
import Admin from "./Admin/Admin"
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./Admin/Auth";
import Login from "./Admin/Login";


function App(props) {
  const [authTokens, setAuthTokens] = useState();
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

 
  return (

    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <Router>
    <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="navbar-nav">
            <Link to="/Films" className="nav-item nav-link">Films</Link>
            <Link to="/Auteurs" className="nav-item nav-link">Auteurs</Link>
            <Link to="/Categories" className="nav-item nav-link">Categories</Link>
            <Link to="/Favoris"  className="nav-item nav-link"><i class="fas fa-star"></i>&ensp;Favoris</Link>
            <Link to="/Admin" className="nav-item nav-link"><i class="fas fa-database"></i> &ensp; Admin</Link>
            
        </div>
    </nav>
    <div className="jumbotron">
      <div className="container">
          <div className="row">
              <div className="">
          <Route  path="/Films" component={Films} />
          <Route path="/Auteurs" component={Auteurs} />
          <Route path="/Categories" component={Categories} />
          <Route path="/Favoris" component={Favoris} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/admin" component={Admin} />
              </div>
          </div>
      </div>
  </div>
    </Router>
  </AuthContext.Provider>


   
  );
}

export default App;