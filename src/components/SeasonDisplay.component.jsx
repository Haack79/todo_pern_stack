import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month  < 9 ) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer'; 
    }
};
const SeasonDisplay = ({lat}) => {
    const season = getSeason(lat, new Date().getMonth()); 
    const text = season === 'Winter' ? 'Burr, chilly , lets do winter things' : 'Its hot, lets got o the beach';
    return (
        <div>
            <h1>{text}</h1>
        </div>
    )
}

export default SeasonDisplay;
