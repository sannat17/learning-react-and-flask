import React, { useState, useEffect } from 'react';

export default function Timer() {
    var [currDate, setCurrDate] = useState(new Date(0));

    const update_date_from_api = () => {
        fetch('/time').then(res => res.json()).then(data => {
            setCurrDate(new Date(data.time * 1000));
        });
    }

    useEffect(() => {
        var timer = setInterval(update_date_from_api, 1000);

        return function cleanup() {
            clearInterval(timer);
        }

    }, []);
    
    return (
        <div>
            <p>Current time: {currDate.toLocaleTimeString()}</p>
        </div>
    )
}