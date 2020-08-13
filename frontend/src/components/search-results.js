import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const SearchResults = (props) => {

    const [results, setResults] = useState();
    const [compound, setConpound] = useState();
    const [chartData, setChartData] = useState();

    useEffect(() => {
        console.log('results changed!', props.results);
        setResults(props.results);
        setConpound(props.compound);

        if (props.results) {
            const labels = props.results.map(el => el['MeasurementDate']);
            
            const datasets = [
                {
                    label: 'CO',
                    data: props.results.map(el => el['CO']),
                    borderColor: 'blue',
                    fill: false
                }, {
                    label: 'O3',
                    data: props.results.map(el => el['O3']),
                    borderColor: 'purple',
                    fill: false
                }, {
                    label: 'NO2',
                    data: props.results.map(el => el['NO2']),
                    borderColor: 'green',
                    fill: false
                }, 
                {
                    label: 'SO2',
                    data: props.results.map(el => el['SO2']),
                    borderColor: 'yellow',
                    fill: false
                }, {
                    label: 'PM10',
                    data: props.results.map(el => el['PM10']),
                    borderColor: 'red',
                    fill: false
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
            <p> Ηere come the results </p>
            {chartData && <Line
                data={chartData}
                width={600}
                height={250}
                options={{ showLines: true }}
            />}
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
                            <td>{element['MeasurementDate']}</td>
                            <td>{element[compound]}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );

}

export default SearchResults;





// const resultData = props.results.map( el => { 
//     date = el.MeasurementDate, 
//     compounds = {
//         CO: el.CO,
//         NO2: el.NO2,
//         O3: el.O3,
//         SO2: el.SO2,
//         PM10: el.PM10
//     }} 
// );
// const allCompounds = Object.keys(resultData[0]);

// props.results.forEach( (el, index) => {
//     datasets[index] = {
//         label: allCompounds[index],
//         data: datasets[index].push(el[allCompounds[index]])
//     }
// });
// console.log('datasets' , datasets);
