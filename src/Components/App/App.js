import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';
import WeatherDisplay from '../WeatherDisplay/WeatherDisplay';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      searchInput: '',
    };
  }

  setSearchInput = searchInput => {
    console.log('setSearchInput');
  };

  render() {
    return (
      <Container maxWidth="sm" className="App">
        <Paper>
          <Typography variant="h4" component="h1" gutterBottom>
            Weather App
          </Typography>
          <WeatherDisplay setSearchInput={this.setSearchInput} />
        </Paper>
      </Container>
    );
  }
}

export default App;
