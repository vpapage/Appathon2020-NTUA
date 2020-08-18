import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const SearchResults = (props) => {

    const [results, setResults] = useState();
    const [compound, setConpound] = useState();

    useEffect(() => {
        setResults(props.results);
        setConpound(props.compound);
    }, [props.results]);

    const chartData = rawData => {
        
        const labels = rawData.map(el => el['MeasurementDate']);
        
        const datasets = [
            {
                label: 'CO',
                data: rawData.map(el => el['CO']),
                borderColor: 'blue',
                fill: false,
                hidden: (compound !== 'CO')
            }, {
                label: 'O3',
                data: rawData.map(el => el['O3']),
                borderColor: 'purple',
                fill: false,
                hidden: (compound !== 'O3')
            }, {
                label: 'NO2',
                data: rawData.map(el => el['NO2']),
                borderColor: 'green',
                fill: false,
                hidden: (compound !== 'NO2')
            }, 
            {
                label: 'SO2',
                data: rawData.map(el => el['SO2']),
                borderColor: 'yellow',
                fill: false,
                hidden: (compound !== 'SO2')
            }, {
                label: 'PM10',
                data: rawData.map(el => el['PM10']),
                borderColor: 'red',
                fill: false,
                hidden: (compound !== 'PM10')
            }
        ];
       
        return {
            labels: labels,
            datasets: datasets
        };
    };

    return (
        <>
            {results && <Line
                data={chartData(results)}
                width={600}
                height={250}
                options={{ showLines: false }}
            />}
        </>
    );
}

export default SearchResults;

