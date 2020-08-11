import React, { useState, useEffect } from 'react';

const SearchResults = (props) => {

    const [results, setResults] = useState();
    const [address, setAddress] = useState(); 
    // todo const [compound, setConpound] = useState();

    useEffect(() => {
        console.log('results changed!', props.results);
        setResults(props.results);
        if (!!props.results[0])  setAddress(props.results[0].Address);
    }, [props.results]);

    return (
        <>
            <p> Ηere come the results </p>
            {address && <p>{address}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Measurement Date</th>
                        {/* <th>Address</th> */}
                        <th>CO</th>
                    </tr>
                </thead>
                <tbody>
                    {results && results.map((element, index) =>
                        <tr key={'result_' + index}>
                            <td>{element['Station code']}</td>
                            {/* <td>{element.Address}</td> */}
                            <td>{element.CO}</td>
                        </tr>
                    )}
                </tbody>
            </table>
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