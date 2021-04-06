import React from "react";
import { Button } from "./AuthForms";
import { useAuth } from "./Auth";
import { Route, Switch,Link, BrowserRouter as Router  } from 'react-router-dom';
import AdminFilm from "./Films/AdminFilm";
import AdminAuteur from "./Auteurs/AdminAuteur";

function Admin(props) {
  const { setAuthTokens } = useAuth();

  function logOut() {
    setAuthTokens();
  }

  return (
    <div class="admin">
      <h1>Page administrateur</h1>

      <Router>
        <div id="lien">
      <Link to="/AdminFilm" className="nav-item nav-link">
        <button class="m-3 p-2 btn btn-sm btn-secondary"> <i class="fas fa-film"></i> Films</button>
      </Link>
{/* 
      <Link to="/AdminCategorie" className="nav-item nav-link">
      <button class="m-3  p-2 btn btn-sm btn-secondary"><i class="fas fa-clipboard-list"></i> Catégories</button>
      </Link> */}

      <Link to="/AdminAuteur" className="nav-item nav-link">
      <button class="m-3 p-2 btn btn-sm btn-secondary"><i class="fas fa-user"></i> Auteurs</button>
      </Link>
        </div>
      <Route path="/AdminFilm" component={AdminFilm} />
      {/* <Route path="/AdminCategorie" component={AdminCategorie} /> */}
      <Route path="/AdminAuteur" component={AdminAuteur} />
      </Router>

    </div>
  );
}

export default Admin;