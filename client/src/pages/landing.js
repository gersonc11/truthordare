//initial landing page
import React from 'react';
import Button from '../components/form/Button';
import { Link } from "react-router-dom";



let wow = () => {
    console.log("truth")
}

let Home = () => {
    
    return (
        <div>

            <h1>Truth Or Dare</h1>
            <Link to="/play">
            <Button
                title="Play"
                onClick={wow}
                />
                </Link>
                <Link to="/create">
            <Button
                name=""
                value=""
                title="Create"
                onClick={wow}
                />
                </Link>
        </div>
    )
};

export default Home;