import React from 'react';
import citiesData from "./data";
const Cities = ({selectedCountry}) => {
const filterData=citiesData.filter((city)=>
    city.country===selectedCountry
    );
  return (
    <div className='cities'>
{filterData.map((city) => (
 <div key={city.id} className="city-card grid justify-center">
 <h2 >{city.name}</h2>
 <img src={city.image} alt={city.name} className='w-60'/>
 <h3>{city.info}</h3>
</div>
))}
    </div>
  )
}

export default Cities;



