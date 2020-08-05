import React from 'react';
import './country.css';
const Country = ({stats}) => {
    return(
        <div className='country'>
            <img src={`https://www.countryflags.io/${stats.CountryCode}/flat/64.png`} alt={stats.Country}></img>
            <h2>{stats.Country}</h2>
            <div className='describe'>
                <p>{`New-Cases : ${stats.NewConfirmed}`}</p> 
                <p>{`New-Deaths : ${stats.NewDeaths}`}</p>
                <p>{`New-Recoverd : ${stats.NewRecovered}`}</p>
                <p>{`Total-Confirmed : ${stats.TotalConfirmed}`}</p> 
                <p>{`Total-Deaths : ${stats.TotalDeaths}`}</p> 
                <p>{`Total-Recovered : ${stats.TotalRecovered}`}</p> 
            </div>
        </div>
    )
}

export default Country;