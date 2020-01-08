import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../SearchBar/SearchBar';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

export default function WeatherForecast() {
  const [searchInput, setSearchInput] = useState('');
  const [userSettings, setUserSettings] = useState({
    unit: 'C',
  });
  const [weather, setWeather] = useState({
    city: 'Port Elizabeth',
    country: 'ZA',
    sunrise: 0,
    sunset: 0,
    feels_like: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    pressure: 0,
    weather_main: '',
    weather_desc: '',
    wind_degree: 0,
    wind_speed: 0,
  });

  /*   const [weather, setWeather] = useState({
    // Basic info
    city: '',
    country: '',
    // Weather info
    sunrise: 0,
    sunset: 0,
    feels_like: 0,
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    pressure: 0,
    weather_main: '',
    weather_desc: '',
  }); */

  const fetchWeatherData = async input => {
    /*     const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${input}&APPID=222ec06f18abf20c07459862fae44a21`,
      { mode: 'cors' },
    ); */
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=222ec06f18abf20c07459862fae44a21`,
      { mode: 'cors' },
    );

    if (response.status === 200) {
      return response.json();
    }
    // Throw new error here
    console.log('ERROR');
  };

  // Take what I want from the data here
  const handleWeatherData = async input => {
    const weatherData = await fetchWeatherData(input);
    setWeather({
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
      wind_degree: weatherData.wind.deg,
      wind_speed: weatherData.wind.speed,
    });
    console.log(weatherData);
  };

  const submitSearch = input => {
    console.log(`submitSearch: ${input}`);
    handleWeatherData(input);
  };

  const handleSearchInput = controlInput => {
    setSearchInput(controlInput);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(`Submit search for: ${searchInput}`);
    submitSearch(searchInput);
  };

  return (
    <Container maxWidth="sm" className="App">
      <div className="App">
        <Typography variant="h4" color="textPrimary" align="center">
          Weather Forecast
        </Typography>
        <SearchBar
          handleSearchInput={handleSearchInput}
          handleSubmit={handleSubmit}
        />
        <WeatherDisplay weather={weather} userSettings={userSettings} />
      </div>
    </Container>
  );
}
