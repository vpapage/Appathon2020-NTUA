import React, { useState, useEffect } from 'react';

const SearchResults = (props) => {

    const [results, setResults] = useState(props.results);
    const [resultsTable, setResultsTable] = useState('lala');

    useEffect(() => {
        console.log('results', results, results.results?.length);
    }, [results]);



    const updateResults = (results) => {
        // todo setResultsTable

        if (results.length>0) {
            const updatedTable = (
                <table>
                    <thead>
                        <tr>
                            <th>Address</th>
                            <th>CO</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        
                        <tr>
                            <td>{results[0].Address}</td>
                            <td>{results[0].CO}</td>
                        </tr>
                    </tbody>
                </table>
            );
            setResultsTable(updatedTable);
            return;
        }
        setResultsTable('lala');
    }



    return (
        <>
            <p> Ηere come the results </p>
            {resultsTable}
        </>
    );

}

export default SearchResults;



// props = [
//     Address: "19, Jong-ro 35ga-gil, Jongno-gu, Seoul, Republic of Korea"
//     CO: "1.2"
//     Latitude: "37.5720164"
//     Longitude: "127.0050075"
//     Measurement date: "2017-01-01 00:00"
//     NO2: "0.059"
//     O3: "0.002"
//     PM2: (6) [null, null, null, null, null, "57.0"]
//     PM10: "73.0"
//     SO2: "0.004"
//     Station code: "101"
//     _id: "5f202c32dac89224b4c0c789"
// }]