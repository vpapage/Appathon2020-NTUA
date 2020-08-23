import React from 'react';
import { Link } from 'react-router-dom';


function Homepage() {

    return (
        <div className= "homepage-background">        
            <div className="homepage-title-block">
                <h1 className="homepage-title"> Air Pollution in Seoul </h1>
                <h3 className="homepage-subtitle">
                    This web application deals with air pollution measurement information in Seoul, South Korea. 
                </h3>

                <Link to="/search" className="homepage-button">
                    Search for Pollution Data
                </Link>
            </div>
        </div>
    )

}

export default Homepage;
