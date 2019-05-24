//initial landing page
import React from 'react';
import { Link } from "react-router-dom";
import "./assets/css/Page.css";
import body from "./assets/imgs/body_landing.jpg";
import play from "./assets/imgs/play.png";
import create from "./assets/imgs/create.png";



let wow = () => {
    console.log("truth")
}

let Home = () => {
    
    return (
        <div>
    <img src={body} className="body" alt="body" />        
<br></br>
            <Link to="/play">
            <img src={play} className="play" alt="play" />   
            </Link>

                <Link to="/create">
                <img src={create} className="create" alt="create" />   
                </Link>
        </div>
    )
};

export default Home;