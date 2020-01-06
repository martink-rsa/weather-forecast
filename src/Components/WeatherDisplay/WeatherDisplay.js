// Main Component for Weather Display app
//    All content will be displayed within this Component

/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Clock from '../Clock/Clock';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    /* padding: '2px 4px',
    display: 'flex',
    alignItems: 'center', */
  },
  paper: {
    padding: 0,
    margin: 0,
  },
  divider: {
    height: 2,
    width: '99%',
    margin: '0 auto',
  },
  base: {
    margin: '5px 0',
    padding: '0 5px',
  },
  main: {
    margin: '5px 0',
    padding: '0 5px',
  },
  city: {
    margin: '5px 0',
    padding: '0 5px',
  },
}));

export default function WeatherDisplay(props) {
  const classes = useStyles();

  const getDate = () => {
    return 'Monday 6 January, 2020';
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12} className={classes.city}>
            <Typography
              variant="body"
              color="textPrimary"
              className={classes.city}
            >
              {props.weather.city}, {props.weather.country}
            </Typography>
          </Grid>
          <Divider className={classes.divider} variant="middle" />
          <Grid item xs={8} className={classes.main}>
            <Typography variant="h5" color="textPrimary">
              {getDate()}
            </Typography>
            <Typography variant="h3" color="textPrimary">
              <Clock />
            </Typography>
          </Grid>
          <Grid item xs={4}>
            asd
          </Grid>
          <Grid item xs={12}>
            Longitude: {props.weather.longitude}
          </Grid>
          <Grid item xs={12}>
            Latitude: {props.weather.latitude}
          </Grid>
          <Grid item xs={12}>
            Sunrise: {props.weather.sunrise}
          </Grid>
          <Grid item xs={12}>
            Sunset: {props.weather.sunset}
          </Grid>
          <Grid item xs={12}>
            Feels Like: {props.weather.feels_like}
          </Grid>
          <Grid item xs={12}>
            Temp: {props.weather.temp}
          </Grid>
          <Grid item xs={12}>
            Temp (max): {props.weather.temp_max}
          </Grid>
          <Grid item xs={12}>
            Temp (min): {props.weather.temp_min}
          </Grid>
          <Grid item xs={12}>
            Humidity: {props.weather.humidity}
          </Grid>
          <Grid item xs={12}>
            Pressure: {props.weather.pressure}
          </Grid>
          <Grid item xs={12}>
            Weather Main: {props.weather.weather_main}
          </Grid>
          <Grid item xs={12}>
            Weather Desc: {props.weather.weather_desc}
          </Grid>
        </Grid>
        <Divider className={classes.divider} variant="middle" />
      </Paper>

      <div>Test</div>
    </div>
  );
}

WeatherDisplay.propTypes = {
  /*   propString: PropTypes.string.isRequired,
  propString2: PropTypes.string.isRequired, */
};
