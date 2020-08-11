import React, { useState, useEffect } from 'react';
import SearchResults from './search-results';

function MainForm() {

    const [stationId, setStationId] = useState('');
    const [itemId, setItemId] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect( () => {
        getAllStations.then( res => console.log('getAllStations', res))
    });


    const getAllStations = async () => {
        const response = await fetch(
            `http://localhost:3001/getAllStations`
        );
        return await response.json();
    }

    const getStation = async () => {
        const response = await fetch(
            `http://localhost:3001/getStation/${stationId}`
        );
        return await response.json();
    };

    const getSearch = async event => {
        event.preventDefault();
        console.log('Get Search fired for input:', stationId, itemId);
        return await getStation().then( data => {
            setSearchResults(data);
            console.log('get search data' , data);
        }).catch( error => console.error(error) );
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

            { searchResults && <SearchResults results={searchResults} compound={itemId} /> }
        </>

    );

}

export default MainForm;
