import React, { useState, useEffect } from 'react';
import SearchResults from './search-results';

function MainForm() {

    const [stationId, setStationId] = useState('');
    const [itemId, setItemId] = useState('');
    const [searchResults, setSearchResults] = useState([]);



    const getRequest = async () => {
        const response = await fetch(
            `http://localhost:3001/getStation/${stationId}`
        );
        const data = await response.json();
        setSearchResults(data)
    };

    const getSearch = event => {
        event.preventDefault();
        console.log('Get Search fired for input:', stationId, itemId);
        getRequest();
        return;
    }



    return (
        <>
            <form onSubmit={getSearch} className="search-form" >

                <div className="form-group">
                    <label htmlFor="station-input">Station Number</label>
                    <input
                        className="form-input" id="station-input" type="text"
                        value={stationId}
                        onChange={event => { setStationId(event.target.value) }} />
                </div>

                <div className="form-group">
                    <label htmlFor="item-input">Compound</label>
                    <input className="form-input" id="item-input" type="text"
                        value={itemId}
                        onChange={event => { setItemId(event.target.value) }} />
                </div>

                <button className="submit-button" type="submit">Submit</button>
            </form>


            <SearchResults results={searchResults} /> 
        </>

    );

}

export default MainForm;
