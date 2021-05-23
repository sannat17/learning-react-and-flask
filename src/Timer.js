import React, { useState, useEffect } from 'react';

export default function Timer() {
    var [currDate, setCurrDate] = useState(new Date(0));

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
          setCurrDate(new Date(data.time * 1000));
        });
    }, []);
    
    return (
        <div>
            <p>Current time: {currDate.toLocaleTimeString()}</p>
        </div>
    )
}