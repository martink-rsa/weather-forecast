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
import WeatherIconBox from '../WeatherIconBox/WeatherIconBox';
import SunClouds from './sunclouds.png';
import Compass from '../../images/icons/compass.svg';
import DropPercentage from '../../images/icons/drop-percentage.svg';
import Gauge from '../../images/icons/gauge.svg';
import Sunrise from '../../images/icons/sunrise.svg';
import Sunset from '../../images/icons/sunset.svg';
import Wind from '../../images/icons/wind.svg';

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
    // backgroundColor: 'rgba(255,255,255,0.2)',
  },
  divider: {
    height: 2,
    width: '99%',
    margin: '10px auto',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.5)',
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
    margin: '5px 0 0 0',
    padding: '0 5px',
  },
  image: {
    height: '100px',
    width: '100px',
    margin: '0 auto',
  },
  tempContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function WeatherDisplay(props) {
  const classes = useStyles();

  const displayUnit = {
    C: '℃',
    F: '℉',
    K: 'K',
  };

  const getDate = () => {
    return '6 January, 2020';
  };

  const capitalize = stringInput => {
    console.log(stringInput);
    if (stringInput) {
      return stringInput[0].toUpperCase() + stringInput.slice(1);
    }
    return stringInput;
  };

  const convertTemp = temp => {
    if (props.userSettings.unit === 'C') {
      // return (temp - 32) * (5 / 9);
      return Math.round(temp - 273.15);
    } else if (props.userSettings.unit === 'F') {
      return Math.round(((temp - 273.15) * 9) / 5 + 32);
    }
    return temp;
  };

  const getWindDirection = direction => {
    return 'dir';
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.container}>
          <Grid item xs={12} className={classes.city}>
            <Typography
              variant="body1"
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
            <Typography variant="body1" color="textPrimary">
              {capitalize(props.weather.weather_desc)}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Feels like: {convertTemp(props.weather.feels_like)}
              {displayUnit[props.userSettings.unit]}
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.tempContainer}>
            <img src={SunClouds} className={classes.image} alt="weather" />
            <Typography variant="h3" color="textPrimary">
              {convertTemp(props.weather.temp)}
              {displayUnit[props.userSettings.unit]}
            </Typography>

            <Typography variant="body1" color="textPrimary">
              High: {convertTemp(props.weather.temp_max)}
              {displayUnit[props.userSettings.unit]}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Low: {convertTemp(props.weather.temp_min)}
              {displayUnit[props.userSettings.unit]}
            </Typography>
          </Grid>
          <Divider className={classes.divider} variant="middle" />
          <Grid item xs={3}>
            <WeatherIconBox
              boxTitle={'Wind'}
              icon={Wind}
              displayTitle={''}
              displayValue={[
                props.weather.wind_degree,
                `${props.weather.wind_speed * 3.6} km/h`,
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <WeatherIconBox
              boxTitle={'Pressure'}
              icon={Gauge}
              displayTitle={''}
              displayValue={[`${props.weather.pressure / 10} kPA`]}
            />
          </Grid>
          <Grid item xs={3}>
            <WeatherIconBox
              boxTitle={'Sunrise/Sunset'}
              icon={Sunrise}
              displayTitle={''}
              displayValue={[
                new Date(props.weather.sunrise * 1000)
                  .toISOString()
                  .substr(11, 8),
                new Date(props.weather.sunset * 1000)
                  .toISOString()
                  .substr(11, 8),
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <WeatherIconBox
              boxTitle={'Humidity'}
              icon={DropPercentage}
              displayTitle={''}
              displayValue={[`${props.weather.humidity}%`]}
            />
          </Grid>
          <Divider className={classes.divider} variant="middle" />
          <Grid item xs={12}>
            Longitude: {props.weather.longitude}
          </Grid>
        </Grid>
        <Divider className={classes.divider} variant="middle" />
      </Paper>
    </div>
  );
}

WeatherDisplay.propTypes = {
  /*   propString: PropTypes.string.isRequired,
  propString2: PropTypes.string.isRequired, */
};
