/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import SearchBar from '../SearchBar/SearchBar';

// Main Component for Weather Display app
// Other Components will be inserted, including
//    a SearchBar component
export default function WeatherDisplay(props) {
  const { setSearchInput } = props;

  // Get the data from the API
  const fetchWeatherData = async () => {
    const response = await fetch(
      'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=222ec06f18abf20c07459862fae44a21',
      { mode: 'cors' },
    );

    if (response.status === 200) {
      return response.json();
    }
    // Throw new error here
    console.log('ERROR');
  };

  // Take what I want from the data here
  const handleWeatherData = async () => {
    const weatherData = await fetchWeatherData();
    console.log(weatherData);
  };

  // Calling this here now purely for testing reasons
  handleWeatherData();

  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        Weather Display Component
      </Typography>
      <SearchBar setSearchInput={setSearchInput} />
    </div>
  );
}

WeatherDisplay.propTypes = {
  /*   propString: PropTypes.string.isRequired,
  propString2: PropTypes.string.isRequired, */
};
