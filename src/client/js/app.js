export const updateUI = async () => {
    const location = document.getElementById('location').value;
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;
  
    const geonamesURL = `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=YOUR_USERNAME`;
    const weatherbitURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=YOUR_API_KEY`;
    const pixabayURL = `https://pixabay.com/api/?q=${location}&key=YOUR_API_KEY`;
  
    try {
      const [geonamesData, weatherbitData, pixabayData] = await Promise.all([
        fetch(geonamesURL).then((res) => res.json()),
        fetch(weatherbitURL).then((res) => res.json()),
        fetch(pixabayURL).then((res) => res.json()),
      ]);
  
      const tripData = {
        location: geonamesData.geonames[0].name,
        country: geonamesData.geonames[0].countryName,
        weather: weatherbitData.data[0].weather.description,
        image: pixabayData.hits[0].webformatURL,
        startDate,
        endDate,
      };
  
      document.getElementById('trip-details').innerHTML = `
        <h2>${tripData.location}, ${tripData.country}</h2>
        <img src="${tripData.image}" alt="${tripData.location}">
        <p>Weather: ${tripData.weather}</p>
        <p>Dates: ${tripData.startDate} to ${tripData.endDate}</p>
      `;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };