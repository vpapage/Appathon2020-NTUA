import React, { useEffect, useState } from 'react';
//import Request from './created/Request';
import './App.css';

function App() {


  //const [poutses, setRequest] = useState([]);

  useEffect(() => {
    getRequest();
  }, []);

  const getRequest = async () => {
    const response = await fetch(
      `http://localhost:3001/O3`
    );
    const data = await response.json();
    //setRequest(data);
    console.log(data);  
    };

  return (
    <div className="App">
     <form className="search-form">
      <input className="search-bar" type="text"/>
      <button className="search-button" type="submit">
        Kalispera friends
      </button>
     </form>
     
    </div>
  );
}

export default App;
