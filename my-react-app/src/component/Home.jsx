import React, { useState } from "react";

import countriesData from "./data";
import Cities from "./Cities";





function Home(){
    const [selectedCountry,setSelectedCountry]=useState(countriesData[0]);

    const handleCountryChange=(event)=>{
       const country= event.target.value;
       setSelectedCountry(country);
    };


    return(
<div>
 
    <select onChange={handleCountryChange}>
  {countriesData.map((country, id) => (
    <option key={id} value={country}>
      {country}
    </option>
)  )}
</select>

<Cities selectedCountry={selectedCountry}/>

</div>
    )
}
export default Home