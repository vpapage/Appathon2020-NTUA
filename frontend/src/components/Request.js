import React from 'react';

const Request = ({place,date,measurement}) => {
    return(
        <div>
            <h1>{place}</h1>
            <p>{date}</p>
            <p>{measurement}</p>
        </div>
    )
};

export default Request; 