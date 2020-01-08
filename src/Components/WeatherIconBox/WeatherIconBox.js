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

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    textAlign: 'center',
  },
  icon: {
    height: '30px',
    width: '30px',
  },
}));

export default function WeatherIconBox(props) {
  const classes = useStyles();
  const { boxTitle, displayValue, icon } = props;
  return (
    <div className={classes.root}>
      <img src={icon} className={classes.icon} alt="test" />
      <Typography variant="h6" color="textPrimary">
        {boxTitle}
      </Typography>
      {displayValue.map((item, index) => (
        <Typography
          variant="body1"
          color="textPrimary"
          key={`${boxTitle}${index}`}
        >
          {item}
        </Typography>
      ))}
    </div>
  );
}

WeatherIconBox.propTypes = {
  boxTitle: PropTypes.string.isRequired,
  displayValue: PropTypes.instanceOf(Array).isRequired,
  icon: PropTypes.string.isRequired,
};
