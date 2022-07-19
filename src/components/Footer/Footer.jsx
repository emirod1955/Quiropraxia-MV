//import react
import React from "react";

//import styles
import './Footer.css';

//import img
import Instagram from './img/Instagram.jsx';
import Facebook from './img/Facebook.jsx';

function Footer (){
    return(
        <div className="Footer">
            <div className="copyRight">
                <p>&copy; Quiropraxia MV</p>
            </div>
            <div className="socialNetworks">
                <a href="https://www.facebook.com" id="facebook"><Facebook id="socialIcons"/></a>
                <a href="https://www.instagram.com" id="instagram"><Instagram id="socialIcons"/></a>
            </div>
        </div>
    );
}
export {Footer};