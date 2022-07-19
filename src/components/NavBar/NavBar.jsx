//import react
import React from "react";

//Import router libraly
import { Link, withRouter } from "react-router-dom";

//import styles
import './NavBar.css';

function NavBar(props){
    return(
        <header className="header">
            <nav className="nav">
                <ul className="nav-menu ">
                    <li className={`nav-menu-item  ${props.location.pathname === "/" ? "active" : ""}`}>
                        <Link className="nav-link" to="/">
                            INICIO
                        </Link>
                    </li>
                    <li className={`nav-menu-item  ${props.location.pathname === "/nosotros" ? "active" : ""}`}>
                        <Link className="nav-link" to="/nosotros">
                            NOSOTROS
                        </Link>
                    </li>
                    <li className={`nav-menu-item  ${props.location.pathname === "/reservar" ? "active" : ""}`}>
                        <Link className="nav-link" to="/reservar">
                            RESERVAR
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default withRouter(NavBar);

