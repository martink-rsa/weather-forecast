import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Paper } from '@material-ui/core';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';
import SearchBar from '../SearchBar/SearchBar';
import Background from '../../Images/background1.jpeg';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchInput: '',
    };
  }

  // Get the data from the API
  fetchWeatherData = async searchInput => {
    /*     const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&APPID=222ec06f18abf20c07459862fae44a21`,
      { mode: 'cors' },
    ); */
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${searchInput}&APPID=222ec06f18abf20c07459862fae44a21`,
      { mode: 'cors' },
    );

    if (response.status === 200) {
      return response.json();
    }
    // Throw new error here
    console.log('ERROR');
  };

  // Take what I want from the data here
  handleWeatherData = async searchInput => {
    const weatherData = await this.fetchWeatherData(searchInput);
    console.log(weatherData);
  };

  submitSearch = searchInput => {
    console.log(`submitSearch: ${searchInput}`);
    this.handleWeatherData(searchInput);
  };

  render() {
    return (
      <div
        className="MainContainer"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <Container maxWidth="sm" className="App">
          <Paper style={{ backgroundColor: 'rgba(255,255,255,.4)' }}>
            <Typography variant="h4" component="h1" gutterBottom>
              Weather App
            </Typography>
            <SearchBar submitSearch={this.submitSearch} />
          </Paper>
          <Paper>
            <WeatherDisplay />
          </Paper>
        </Container>
      </div>
    );
  }
}

export default App;
