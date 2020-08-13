import React, { useState, useEffect } from 'react';
import SearchResults from './search-results';

function MainForm() {

    const [stationId, setStationId] = useState('');
    const [itemId, setItemId] = useState('');
    const [searchResults, setSearchResults] = useState();
    const [allStations, setAllStations] = useState();


    useEffect(() => {
        fetch(
            `http://localhost:3001/getAllStations`
        ).then(res => res.json()).then(data => {
            setAllStations(data);
            console.log(allStations, data);
        });
    }, []);


    const getStation = async () => {
        const response = await fetch(
            `http://localhost:3001/getStationMeasurements/${stationId}`
        );
        return await response.json();
    };

    const submitSearchForm = async event => {
        event.preventDefault();

        console.log('Get Search fired for input:', stationId, itemId);
        return await getStation()
            .then(data => {
                setSearchResults(data);
                console.log('get search data', data);
            })
            .catch(error => console.error(error));
    }

    return (
        <>
            <form onSubmit={submitSearchForm} className="search-form" >

                <div className="form-group">
                    <label htmlFor="station-input">Station</label>
                    <select
                        className="form-input" id="station-input" type="text"
                        name={stationId}
                        onChange={event => { setStationId(event.target.value)} }>
                        <option value="000">Select Station</option>
                        {allStations &&
                            allStations.map(station =>
                                <option key={station.StationCode} value={station.StationCode}>{station.StationDistrict} ({station.StationCode})</option>)
                        }
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="item-input">Compound</label>
                    <input className="form-input" id="item-input" type="text"
                        value={itemId}
                        onChange={event => { setItemId(event.target.value) }} />
                </div>

                <button className="submit-button" type="submit">Submit</button>
            </form>

            {searchResults && <SearchResults results={searchResults} compound={itemId} />}
        </>

    );

}

export default MainForm;
