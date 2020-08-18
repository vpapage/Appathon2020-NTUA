import React from 'react';
import { Link } from 'react-router-dom';


function Homepage() {

    return (
        <>
            <h1 className="homepage-title"> Air Pollution in Seoul </h1>
            <h3 className="homepage-subtitle">
                This web application deals with air pollution measurement information in Seoul, South Korea. You can choose one of the stations (101 to 125) <br /> where the measurements are made and a chemical compound.
            </h3>

            <Link to="/search" className="homepage-button">
                Search for Pollution Data
            </Link>
        </>
    )

}

export default Homepage;
