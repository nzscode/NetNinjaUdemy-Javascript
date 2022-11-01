const key = 'FJOYvmRTJ4DBRsxM8mpD0BAI8cS0PAZ3';
//get weather information
const getWeather = async(id) =>{
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch (base + query);
    const data = await response.json();
    return data[0];
};


//get city information
let getCity = async(city) => {
let base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
let query = `?apikey=${key}&q=${city}`;

const response = await fetch(base + query);

const data = await response.json();

return data[0];
};

