
//Nur mit cityID arbeiten.  
  export async function fetchWeatherData(cityId) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=id:${cityId}&lang=de&days=3`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  }
  
