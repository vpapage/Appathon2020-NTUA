import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const SearchResults = (props) => {

    const [results, setResults] = useState();
    const [compound, setConpound] = useState();
    const [chartData, setChartData] = useState();

    useEffect(() => {
        setResults(props.results);
        setConpound(props.compound);

        if (props.results) {

            console.log(compound);
            const labels = props.results.map(el => el['MeasurementDate']);
            
            const datasets = [
                {
                    label: 'CO',
                    data: props.results.map(el => el['CO']),
                    borderColor: 'blue',
                    fill: false,
                    hidden: (compound !== 'CO')
                }, {
                    label: 'O3',
                    data: props.results.map(el => el['O3']),
                    borderColor: 'purple',
                    fill: false,
                    hidden: (compound !== 'O3')
                }, {
                    label: 'NO2',
                    data: props.results.map(el => el['NO2']),
                    borderColor: 'green',
                    fill: false,
                    hidden: (compound !== 'NO2')
                }, 
                {
                    label: 'SO2',
                    data: props.results.map(el => el['SO2']),
                    borderColor: 'yellow',
                    fill: false,
                    hidden: (compound !== 'SO2')
                }, {
                    label: 'PM10',
                    data: props.results.map(el => el['PM10']),
                    borderColor: 'red',
                    fill: false,
                    hidden: (compound !== 'PM10')
                }
            ];
           
            setChartData({
                labels: labels,
                datasets: datasets
            })
        };

    }, [props.results]);


    return (
        <>
            {chartData && <Line
                data={chartData}
                width={600}
                height={250}
                options={{ showLines: true }}
            />}
        </>
    );
}

export default SearchResults;

