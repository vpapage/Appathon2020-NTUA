import React from 'react';
import { Link } from 'react-router-dom';


function Homepage() {

    return (
        <>
            <h1> Air Pollution in Seoul </h1>
            <h3>
                This web application deals with air pollution measurement information in Seoul, South Korea. You can choose one of the stations (101 to 125) <br /> where the measurements are made and a chemical compound.
            </h3>

            <Link to="/search">
                <button type="button" className="submit-button">
                    Proceed
                </button>
            </Link>
        </>
    )

}

export default Homepage;
