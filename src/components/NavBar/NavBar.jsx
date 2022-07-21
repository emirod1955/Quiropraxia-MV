//import react
import React from "react";
import { useState } from "react"

//Import router libraly
import { Link, withRouter } from "react-router-dom";

//Import styles
import './NavBar.css';

function NavBar(){
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return(
      <header className="Navegacion">
        <ul className={isNavExpanded ? "topnav responsive" : "topnav"}>
          <div  iv className="mid">
            <Link to="/" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>INICIO</Link>
                <span className="navbar-line"></span>
            <Link to="/nosotros" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>NOSOTROS</Link>
                <span className="navbar-line"></span>
            <Link to="/reservar" className="nav-menu-item-contactanos" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>RESERVAR</Link>
          </div>
          <a href="#!" className="icon" onClick={() => {setIsNavExpanded(!isNavExpanded);}}>
            <i className="fa fa-bars"/>
          </a>
        </ul>
      </header>
    );
}

export default withRouter(NavBar);

