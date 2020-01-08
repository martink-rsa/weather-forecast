import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Thunderstorm from '../../images/icons/weather1/11d.png';
import ShowerRain from '../../images/icons/weather1/09d.png';
import Rain from '../../images/icons/weather1/10d.png';
import Snow from '../../images/icons/weather1/13d.png';
import Mist from '../../images/icons/weather1/50d.png';
import ClearSky from '../../images/icons/weather1/01d.png';
import FewClouds from '../../images/icons/weather1/02d.png';
import ScatteredClouds from '../../images/icons/weather1/03d.png';
import BrokenClouds from '../../images/icons/weather1/04d.png';

const useStyles = makeStyles(theme => ({
  icon: {
    padding: 0,
    marginTop: '20px',
    width: '60px',
    height: '60px',
  },
}));

export default function WeatherIcon(props) {
  const classes = useStyles();
  const [icon, setIcon] = useState('');

  const weatherIconValues = [
    [200, 201, 202, 210, 211, 212, 221, 230, 231, 232], // 11d thunderstorm
    [300, 301, 302, 310, 311, 312, 313, 314, 321, 520, 521, 522, 531], // 09d shower rain
    [500, 501, 502, 503, 504], // 10d rain
    [511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622], // 13d snow
    [701, 711, 721, 731, 741, 751, 761, 762, 771, 781], // 50d mist
    [800], // 01d / 01n clear sky
    [801], // 02d / 02n few clouds
    [802], // 03d / 03n scattered clouds
    [803, 804], // 04d / 04n broken clouds
  ];

  const weatherIconTypes = [
    Thunderstorm,
    ShowerRain,
    Rain,
    Snow,
    Mist,
    ClearSky,
    FewClouds,
    ScatteredClouds,
    BrokenClouds,
  ];

  const getIcon = id => {
    let arrayIndex;
    for (let i = 0; i < weatherIconValues.length; i += 1) {
      if (weatherIconValues[i].indexOf(id) !== -1) {
        arrayIndex = i;
        break;
      }
    }
    setIcon(weatherIconTypes[arrayIndex]);
  };

  useEffect(() => {
    const { weatherID } = props;
    if (weatherID) {
      getIcon(weatherID);
    }
  });

  return <img src={icon} alt="weather type" className={classes.icon} />;
}
