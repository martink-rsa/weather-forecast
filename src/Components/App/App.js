import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Button, Paper } from '@material-ui/core';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container maxWidth="sm" className="App">
        <Paper>
          <Typography variant="h4" component="h1" gutterBottom>
            Weather App
          </Typography>
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
          <Button variant="contained" color="secondary">
            Secondary Button
          </Button>
        </Paper>
      </Container>
    );
  }
}

export default App;
