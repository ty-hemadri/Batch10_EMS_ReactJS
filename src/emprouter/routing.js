
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "../components/Home";
import Create from "../components/Create";
import { Link, Route, Switch } from "react-router-dom";

export const routing = (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark bg-danger" >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          TechnoElevate
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/create">
               CreateAccount
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/show">
                ShowAccount
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  
    <Switch>
    <Route path="/home" component={Home} /> 
    <Route path="/create" component={Create} /> 
    </Switch>
    </>
);