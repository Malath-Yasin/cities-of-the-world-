import React, { useState } from "react";

import countriesData from "./data";
import Cities from "./Cities";





function Home(){
    const [selectedCountry,setSelectedCountry]=useState(null);

    const handleCountryChange=(event)=>{
       const country= event.target.value;
       setSelectedCountry(country);
       console.log(country);
    };
    return(
      <div>
<div className="w-full h-[25rem] flex items-center justify-center " style={{ backgroundImage: 'url( https://images.pexels.com/photos/2603464/pexels-photo-2603464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
<div>
 <div className="text-white  font-bold text-4xl">Select a Country</div>
    <select onChange={handleCountryChange} className=" m-10">
  {countriesData.map((country) => (
    <option key={country.id} value={country.country}>
      {country.country}
    </option>
)  )}
</select>
</div>
</div>
<Cities selectedCountry={selectedCountry}  />

</div>
    )
}
export default Home