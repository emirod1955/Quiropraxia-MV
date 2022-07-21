//import react
import React from "react";

//import styles
import './Home.css';

//Import router libraly
import {Link} from "react-router-dom";

function Home (){
    return(
        <div className="Home">
            <div className="circle1"></div>
            <div className="circle2"></div>
            <div className="Home-content">
                <h1 id="TitleHome">QUIROPRAXIA MV</h1>
                <div className="buttons">
                    <Link to="/reservar" className="Button-container"><input id="homeButton" type="button" value="Reservar" /></Link>
                    <Link to="/nosotros" className="Button-container"><input id="homeButton" type="button" value="Nosotros" /></Link>
                </div>
            </div>
        </div>
    );
}

export {Home};