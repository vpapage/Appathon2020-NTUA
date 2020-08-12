import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const SearchResults = (props) => {

    const [results, setResults] = useState();
    const [address, setAddress] = useState();
    const [compound, setConpound] = useState();
    const [chartData, setChartData] = useState();

    useEffect(() => {
        console.log('results changed!', props.results);
        setResults(props.results);
        setConpound(props.compound);
        if (!!props.results[0]) {
            setAddress(props.results[0].Address);
            parseData();
        }

    }, [props.results]);

    const parseData = () => {
        const labels = results.map(el => el['Measurement date']);
        const datasets = [
            {
                label: 'CO',
                data: results.map(el => el['CO'])
            }, {
                label: 'O3',
                data: results.map(el => el['O3']),
            }, {
                label: 'NO2',
                data: results.map(el => el['NO2']),
            }
        ];
        setChartData({
            labels: labels,
            datasets: datasets,
        });
    }

    return (
        <>
            <p> Ηere come the results </p>
            {address && <p>The address of the Station{address}</p>}
            <Line
                data={chartData}
                width="600"
                height="250"
                options={{ showLines: true }}
            />
            <table>
                <thead>
                    <tr>
                        <th>Measurement Date</th>
                        <th> {compound} </th>
                    </tr>
                </thead>
                <tbody>
                    {results && results.map((element, index) =>
                        <tr key={'result_' + index}>
                            <td>{element['Measurement date']}</td>
                            <td>{element[compound]}</td>
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