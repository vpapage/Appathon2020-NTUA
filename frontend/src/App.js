import React from 'react';

import MainForm from './components/MainForm';

function App() {

    return (
        <div>
            <h1> Air Pollution in Seoul </h1>
            <h3> 
                This web application deals with air pollution measurement information <br/> 
                in Seoul, South Korea. 
                You can choose one of the stations (101 to 125) <br/> where the measurements are made and a chemical compound.
            </h3>
            <MainForm />
        </div>

    );

}

export default App;
