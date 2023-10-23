import React from 'react';
import citiesData from "./data";
const Cities = ({selectedCountry}) => {
const filterData=citiesData.filter((city)=>
    city.country===selectedCountry
    );
  return (
    <div className='cities'>
{filterData.map((city) => (
 <div key={city.id} className="city-card">
 <h3>{city.name}</h3>
</div>
))}

    </div>
  )
}

export default Cities;