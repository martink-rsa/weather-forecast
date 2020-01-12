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
import moment from 'moment';
import Clock from '../Clock/Clock';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import WeatherIconBox from '../WeatherIconBox/WeatherIconBox';
import TemperatureControl from '../TemperatureControl/TemperatureControl';
import DropPercentage from '../../images/icons/drop-no-percentage.svg';
import Gauge from '../../images/icons/gauge-ungraded.svg';
import Sunrise from '../../images/icons/sunrise-no-arrow.svg';
import Wind from '../../images/icons/wind-simpler.svg';

const useStyles = makeStyles(() => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    height: '100%',
  },
  paper: {
    padding: 0,
    margin: 0,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  divider: {
    height: 1,
    width: '99%',
    margin: '10px auto',
  },
  dividerNoTop: {
    height: 1,
    width: '98%',
    margin: 'auto',
  },
  container: {
    paddingBottom: '15px',
  },
  base: {
    margin: '5px 0',
    padding: '0 5px',
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: '5px 0',
    paddingLeft: '30px',
  },
  topBar: {
    margin: '5px 0 0 0',
    padding: '0 30px',
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
    paddingRight: '30px',
  },
  mainTemp: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
}));

export default function WeatherDisplay(props) {
  const classes = useStyles();
  const { changeUserUnit } = props;
  const {
    weather: {
      city,
      country,
      temp,
      tempMax,
      tempMin,
      feelsLike,
      windDirection,
      windSpeed,
      pressure,
      sunrise,
      sunset,
      humidity,
      weatherDesc,
      weatherID,
      timezone,
    },
  } = props;
  const {
    userSettings: { unit },
  } = props;

  const displayUnit = {
    C: '℃',
    F: '℉',
    K: 'K',
  };

  const capitalize = stringInput => {
    if (stringInput) {
      return stringInput[0].toUpperCase() + stringInput.slice(1);
    }
    return stringInput;
  };

  const convertTemp = temp => {
    if (unit === 'C') {
      return Math.round(temp - 273.15);
    }
    if (unit === 'F') {
      return Math.round(((temp - 273.15) * 9) / 5 + 32);
    }
    return temp;
  };

  const getOffsetTime = (timeIn = new Date()) => {
    return moment
      .utc(timeIn)
      .utcOffset(timezone / 60)
      .format('HH:mm');
  };

  const getOffsetDate = () => {
    const newDate = moment(new Date())
      .utc()
      .utcOffset(timezone / 60)
      .format('Do MMMM, YYYY');
    return newDate;
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.container}>
          <Grid item xs={8} className={classes.topBar}>
            <Typography variant="body1" color="textPrimary">
              {city}, {country}
            </Typography>
          </Grid>
          <Grid item xs={4} align="right">
            <TemperatureControl
              currentUnit={unit}
              changeUserUnit={changeUserUnit}
            />
          </Grid>
          <Divider className={classes.dividerNoTop} variant="middle" />
          <Grid item xs={8} className={classes.main}>
            <Typography variant="h5" color="textPrimary">
              {getOffsetDate()}
            </Typography>
            <Typography variant="h3" color="textPrimary">
              <Clock timezone={timezone} getOffsetTime={getOffsetTime} />
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {capitalize(weatherDesc)}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Feels like: {convertTemp(feelsLike)}
              {displayUnit[unit]}
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.tempContainer}>
            <WeatherIcon weatherID={weatherID} />
            <Grid className={classes.mainTemp}>
              <Typography variant="h3" color="textPrimary" display="inline">
                {convertTemp(temp)}
              </Typography>
              <Typography variant="h6" color="textPrimary" display="inline">
                {displayUnit[unit]}
              </Typography>
            </Grid>
            <Typography variant="body1" color="textSecondary">
              High: {convertTemp(tempMax)}
              {/* {displayUnit[unit]} */}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Low: {convertTemp(tempMin)}
              {/* {displayUnit[unit]} */}
            </Typography>
          </Grid>
          <Divider className={classes.divider} variant="middle" />
          <Grid item xs={3}>
            <WeatherIconBox
              boxTitle="Wind"
              icon={Wind}
              displayValue={[
                `${Math.round(windSpeed * 3.6 * 100) /
                  100} km/h ${windDirection}`,
              ]}
            />
          </Grid>
          <Grid item xs={3}>
            <WeatherIconBox
              boxTitle="Pressure"
              icon={Gauge}
              displayValue={[`${pressure / 10} kPA`]}
            />
          </Grid>
          <Grid item xs={3}>
            <WeatherIconBox
              boxTitle="Sun"
              icon={Sunrise}
              displayValue={[getOffsetTime(sunrise), getOffsetTime(sunset)]}
            />
          </Grid>
          <Grid item xs={3}>
            <WeatherIconBox
              boxTitle="Humidity"
              icon={DropPercentage}
              displayValue={[`${humidity}%`]}
            />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

WeatherDisplay.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    tempMax: PropTypes.number.isRequired,
    tempMin: PropTypes.number.isRequired,
    feelsLike: PropTypes.number.isRequired,
    windDirection: PropTypes.string.isRequired,
    windSpeed: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    weatherDesc: PropTypes.string.isRequired,
    weatherID: PropTypes.number.isRequired,
  }).isRequired,
};
