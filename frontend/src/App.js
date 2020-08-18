import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainForm from './components/MainForm';
import Homepage from './components/Homepage';

function App() {

    return (
        <>
            <Switch>
                <Route path="/" component={Homepage} exact />
                <Route path="/home" component={Homepage} />
                <Route path="/search" component={MainForm} />
            </Switch>
        </>
    );

}

export default App;
