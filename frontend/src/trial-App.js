import React, { useEffect, useState } from 'react';
import Request from './components/Request';
import './App.css';

function App() {

    const [request, setRequest] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('O3');

    useEffect(() => {
        getRequest();
    }, [query]);

    const getRequest = async () => {
        const response = await fetch(
            `http://localhost:3001/${query}` // `http://localhost:3001/{stationID}/{itemID}`
        );
        const data = await response.json();
        setRequest(data);
        console.log(data);
    };

    const updateSearch = e => {
        setSearch(e.target.value);
        console.log()
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(itemID)
    }


    return (
        <div className="App">
            <form onSubmit={getSearch} className="search-form" >
                <input className="search-bar" type="text" value={itemID} />
                <button className="search-button" type="submit">
                    Kalispera friends
      </button>
            </form>
            {request.Address.map(Address => (
                <Request />
            ))}
        </div>
    );
}

export default App;
