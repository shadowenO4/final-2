export const updateUI = async (location, startDate, endDate) => {
    // Store the trip data in localStorage
    localStorage.setItem('tripData', JSON.stringify({ location, startDate, endDate }));
const user = 'shadoweo';

const num = 4
const USERNAME= user.concat(num);
    const trimmedLocation = location.trim();


    console.log('Location:', location);
    console.log('Start Date:', startDate);
    console.log('End Date:', endDate);

    const geonamesURL = `http://api.geonames.org/searchJSON?q=${location}&maxRows=1&username=${USERNAME}`;
    const weatherbitURL = `https://api.weatherbit.io/v2.0/forecast/daily?city=${location}&key=467725c69eb744ceafa81c00b8f0a55c`;
    const pixabayURL = `https://pixabay.com/api/?q=${location}&key=49042350-06ebdbdfbfdd05f84191284e8`;

    try {
        const [geonamesData, weatherbitData, pixabayData] = await Promise.all([
            fetch(geonamesURL).then((res) => res.json()),
            fetch(weatherbitURL).then((res) => res.json()),
            fetch(pixabayURL).then((res) => res.json()),
        ]);

        console.log('Geonames Data:', geonamesData);
        console.log('Weatherbit Data:', weatherbitData);
        console.log('Pixabay Data:', pixabayData);

        if (!geonamesData || !geonamesData.length) {
            document.getElementById('trip-details').innerHTML = `<p>Error: No results found for the specified location. Please check your input.</p>`;
            throw new Error('No results found for the specified location.');
        }

        if (!weatherbitData || !weatherbitData.data.length) {
            document.getElementById('trip-details').innerHTML += `<p>Error: No weather data available for the specified location.</p>`;
        }

        if (!pixabayData || !pixabayData.hits.length) {
            document.getElementById('trip-details').innerHTML += `<p>Error: No images found for the specified location.</p>`;
        }

        const tripData = {
            image: pixabayData.hits[0] ? pixabayData.hits[0].webformatURL : 'default_image_url',
            location: location,
            country: geonamesData[0].address.country,
            weather: weatherbitData.data[0].weather.description,
            startDate: startDate,
            endDate: endDate,
        };

        document.getElementById('trip-details').innerHTML = `
            <h2>${tripData.location}, ${tripData.country}</h2>
            <img src="${tripData.image}" alt="${tripData.location}">
            <p>Weather: ${tripData.weather}</p>
            <p>Dates: ${tripData.startDate} to ${tripData.endDate}</p>
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('trip-details').innerHTML = `<p>Error: ${error.message}</p>`;
    }
};
