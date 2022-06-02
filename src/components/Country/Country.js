import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, capital, population, region, flags} = props.country;
    // console.log(props.country);

    return (
        <div className='country'>
            <h2>Country Name: {name.common}</h2>
            <h3>Capital: {capital}</h3>
            <h4>Population: {population}</h4>
            <h5><small>Region: {region}</small></h5>
            <img src= {flags.png} alt={name.official} />
        </div>
    );
};

export default Country;