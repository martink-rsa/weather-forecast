/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

// Main Component for Weather Display app
// Other Components will be inserted, including
//    a SearchBar component
export default function WeatherDisplay(props) {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        Weather Display Component
      </Typography>
    </div>
  );
}

WeatherDisplay.propTypes = {
  /*   propString: PropTypes.string.isRequired,
  propString2: PropTypes.string.isRequired, */
};
