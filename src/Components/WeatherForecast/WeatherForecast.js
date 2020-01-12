import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import SearchBar from '../SearchBar/SearchBar';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import Loading from '../Loading/Loading';
import Notify from '../Notify/Notify';

export default function WeatherForecast() {
  const [dataLoaded, setDataloaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [notification, setNotification] = useState(false);
  const [userSettings, setUserSettings] = useState({
    unit: 'C',
  });
  const [weather, setWeather] = useState({
    city: '',
    country: '',
    sunrise: 0,
    sunset: 0,
    feelsLike: 0,
    temp: 0,
    tempMax: 0,
    tempMin: 0,
    humidity: 0,
    pressure: 0,
    weatherMain: '',
    weatherDesc: '',
    windDegree: 0,
    windSpeed: 0,
    timezone: 0,
  });

  const fetchWeatherData = async input => {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${input}&mode=xml&APPID=222ec06f18abf20c07459862fae44a21`,
      { mode: 'cors' },
    );

    if (response.status === 200) {
      return response.text();
    }
    // Throw new error here
  };

  // Take what I want from the data here
  const handleWeatherData = async input => {
    setDataloaded(false);
    setLoading(true);
    try {
      const weatherData = await fetchWeatherData(input);
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(weatherData, 'text/xml');
      setWeather({
        city: xmlDoc.all[1].attributes[1].nodeValue,
        country: xmlDoc.all[3].textContent,
        latitude: parseFloat(xmlDoc.all[2].attributes[1].value),
        longitude: parseFloat(xmlDoc.all[2].attributes[0].value),
        // Weather info
        sunrise: xmlDoc.all[5].attributes[0].value,
        sunset: xmlDoc.all[5].attributes[1].value,
        feelsLike: parseFloat(xmlDoc.all[7].attributes[0].value),
        temp: parseFloat(xmlDoc.all[6].attributes[0].value),
        tempMin: parseFloat(xmlDoc.all[6].attributes[1].value),
        tempMax: parseFloat(xmlDoc.all[6].attributes[2].value),
        humidity: parseFloat(xmlDoc.all[8].attributes[0].value),
        pressure: parseFloat(xmlDoc.all[9].attributes[0].value),
        weatherMain: xmlDoc.all[17].attributes[1].value,
        weatherDesc: xmlDoc.all[17].attributes[1].value,
        weatherID: parseInt(xmlDoc.all[17].attributes[0].value, 10),
        windSpeed: parseFloat(xmlDoc.all[10].children[0].attributes[0].value),
        windName: xmlDoc.all[10].children[0].attributes[2].value,
        timezone: parseInt(xmlDoc.all[4].textContent, 10),
      });

      if (xmlDoc.all[13].attributes.length > 0) {
        setWeather(prevState => {
          return {
            ...prevState,
            windDirection: xmlDoc.all[13].attributes[1].value,
          };
        });
      }

      setLoading(false);
      setDataloaded(true);
    } catch (err) {
      setNotification(true);
      setLoading(false);
    }

    // JSON data
    /*     setWeather({
      city: weatherData.name,
      country: weatherData.sys.country,
      latitude: weatherData.coord.lat,
      longitude: weatherData.coord.lon,
      // Weather info
      sunrise: weatherData.sys.sunrise,
      sunset: weatherData.sys.sunset,
      feels_like: weatherData.main.feels_like,
      temp: weatherData.main.temp,
      temp_max: weatherData.main.temp_max,
      temp_min: weatherData.main.temp_min,
      humidity: weatherData.main.humidity,
      pressure: weatherData.main.pressure,
      weather_main: weatherData.weather[0].main,
      weather_desc: weatherData.weather[0].description,
      weather_id: weatherData.weather[0].id,
      wind_degree: weatherData.wind.deg,
      wind_speed: weatherData.wind.speed,
      timezone: weatherData.timezone,
    }); */
  };

  const submitSearch = input => {
    handleWeatherData(input);
  };

  const handleSearchInput = controlInput => {
    setSearchInput(controlInput);
  };

  const handleSubmit = event => {
    event.preventDefault();
    submitSearch(searchInput);
  };

  const changeUserUnit = newUnit => {
    setUserSettings(prevState => {
      return { ...prevState, unit: newUnit };
    });
  };

  const closeNotification = () => {
    setNotification(false);
  };

  return (
    <Container maxWidth="sm" className="App">
      <div className="App">
        {/* <Typography variant="h6" color="textPrimary" align="center">
          Weather Forecast
        </Typography> */}
        <SearchBar
          handleSearchInput={handleSearchInput}
          handleSubmit={handleSubmit}
        />
        {dataLoaded ? (
          <WeatherDisplay
            weather={weather}
            userSettings={userSettings}
            changeUserUnit={changeUserUnit}
          />
        ) : null}
        {loading ? <Loading /> : null}
      </div>
      <Notify
        notification={notification}
        closeNotification={closeNotification}
      />
    </Container>
  );
}
