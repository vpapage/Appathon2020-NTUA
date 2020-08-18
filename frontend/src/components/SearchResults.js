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
                label: 'CO (ppm)',
                data: rawData.map(el => el['CO']),
                borderColor: '#995d81',
                pointBackgroundColor: '#995d81',
                fill: false,
                hidden: (compound !== 'CO')
            }, {
                label: 'O3 (ppm)',
                data: rawData.map(el => el['O3']),
                borderColor: '#82c09a',
                pointBackgroundColor: '#82c09a',
                fill: false,
                hidden: (compound !== 'O3')
            }, {
                label: 'NO2 (ppm)',
                data: rawData.map(el => el['NO2']),
                borderColor: '#e57a44',
                pointBackgroundColor: '#e57a44',
                fill: false,
                hidden: (compound !== 'NO2')
            }, 
            {
                label: 'SO2 (ppm)',
                data: rawData.map(el => el['SO2']),
                borderColor: '#fcb97d',
                pointBackgroundColor: '#fcb97d',
                fill: false,
                hidden: (compound !== 'SO2')
            }, {
                label: 'PM10(Mircrogram/m3)',
                data: rawData.map(el => el['PM10']),
                borderColor: '#6689a1',
                pointBackgroundColor: '#6689a1',
                fill: false,
                hidden: (compound !== 'PM10')
            }, {
                label: 'PM2(Mircrogram/m3)',
                data: rawData.map(el => el['PM2']),
                borderColor: '#e57a44',
                pointBackgroundColor: '#e57a44',
                fill: false,
                hidden: (compound !== 'PM2')
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
                options={{ 
                    showLines: true, 
                    title:{
                        display: true,
                        position:'top',
                        fontSize: 20,
                        text: 'Results',
                    },
                    legend: {
                        display: true,
                        position: 'right',
                        fullWidth: false
                    } 
                }}
            />}
        </>
    );
}

export default SearchResults;

