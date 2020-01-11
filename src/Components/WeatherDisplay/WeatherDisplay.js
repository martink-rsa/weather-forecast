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
    height: 2,
    width: '99%',
    margin: '10px auto',
  },
  dividerNoTop: {
    height: 2,
    width: '99%',
    margin: 'auto',
  },
  container: {
    // backgroundColor: 'rgba(255,255,255,0.5)',
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
      temp_max,
      temp_min,
      feels_like,
      wind_direction,
      wind_speed,
      pressure,
      sunrise,
      sunset,
      humidity,
      weather_desc,
      weather_id,
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

  const getDate = () => {
    console.log(new Date().toString());
    console.log(timezone);
    return '6 January, 2020';
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

  const getWindDirection = direction => {
    return 'dir';
  };

  console.log(props.weather);
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
              {getDate()}
            </Typography>
            <Typography variant="h3" color="textPrimary">
              <Clock />
            </Typography>
            <Typography variant="body1" color="textPrimary">
              {capitalize(weather_desc)}
            </Typography>
            <Typography variant="body1" color="textPrimary">
              Feels like: {convertTemp(feels_like)}
              {displayUnit[unit]}
            </Typography>
          </Grid>
          <Grid item xs={4} className={classes.tempContainer}>
            <WeatherIcon weatherID={weather_id} />
            <Grid className={classes.mainTemp}>
              <Typography variant="h3" color="textPrimary" display="inline">
                {convertTemp(temp)}
              </Typography>
              <Typography variant="h6" color="textPrimary" display="inline">
                {displayUnit[unit]}
              </Typography>
            </Grid>
            <Typography variant="body1" color="textSecondary">
              High: {convertTemp(temp_max)}
              {/* {displayUnit[unit]} */}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Low: {convertTemp(temp_min)}
              {/* {displayUnit[unit]} */}
            </Typography>
          </Grid>
          <Divider className={classes.divider} variant="middle" />
          <Grid item xs={3}>
            <WeatherIconBox
              boxTitle="Wind"
              icon={Wind}
              displayValue={[
                `${Math.round(wind_speed * 3.6 * 100) /
                  100} km/h ${wind_direction}`,
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
              boxTitle="Sunrise/Sunset"
              icon={Sunrise}
              displayValue={[sunrise, sunset]}
            />
            {/*             <WeatherIconBox
              boxTitle="Sunrise/Sunset"
              icon={Sunrise}
              displayValue={[
                new Date(sunrise * 1000).toISOString().substr(11, 8),
                new Date(sunset * 1000).toISOString().substr(11, 8),
              ]}
            /> */}
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
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    feels_like: PropTypes.number.isRequired,
    wind_direction: PropTypes.string.isRequired,
    wind_speed: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    sunrise: PropTypes.number.isRequired,
    sunset: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    weather_desc: PropTypes.string.isRequired,
    weather_id: PropTypes.number.isRequired,
  }).isRequired,
};
