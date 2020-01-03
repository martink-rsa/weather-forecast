import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { Button, Grid } from '@material-ui/core';

// Component to search for a City
class SearchBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      tempSearchInput: '',
    };
  }

  handleChange = event => {
    // Update the search bar
    this.setState({
      tempSearchInput: event.target.value,
    });
  };

  handleSubmit = () => {
    console.log('Handle submit');
    this.props.setSearchInput(this.state.tempSearchInput);
  };

  test = () => {
    console.log('TEST');
  };

  render() {
    const { tempSearchInput } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <FormControl margin="normal" fullWidth>
          <TextField
            id="weather-location-search"
            label="Country and City"
            type="search"
            variant="outlined"
            value={tempSearchInput}
            onChange={this.handleChange}
          />
        </FormControl>
        <FormControl margin="normal">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onSubmit={this.handleSubmit}
          >
            Get Weather Forecast
          </Button>
        </FormControl>
      </form>
    );
  }
}

SearchBar.propTypes = {
  /*   propString: PropTypes.string.isRequired,
  propString2: PropTypes.string.isRequired, */
};

export default SearchBar;

/* export default function SearchBar(props) {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary">
            Primary Button
          </Button>
        </Grid>
      </Grid>
    </div>
  );
} */
