import React, { Component } from 'react';

class  App extends Componenet {
    constractor(props) {
        super(props);
        this.state = { 
            items: [],
            isLoaded: false,
        }
    }

  getComponent() {
    fetch(`http://localhost:3001/O3`)
    .then(res => res.json())
    .then(json => {
        this.setState({
            isLoaded: true,
            items: json,
        })
    }); 
}

    render() {
        var { isLoaded, items } = this.state;

        if (!isLoaded) {
            return <div> Loading...</div>
        }
        else {
    
            return (
                <div className="App">
                    Data has been loaded!
                </div>
            );
        }
    }
}