import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    margin: 0,
    width: '100%',
    textAlign: 'center',
  },
  icon: {
    height: '25px',
    width: '25px',
  },
}));

export default function WeatherIconBox(props) {
  const classes = useStyles();
  const { boxTitle, displayValue, icon } = props;
  return (
    <div className={classes.root}>
      <img src={icon} className={classes.icon} alt="test" />
      <Typography variant="h6" color="textPrimary" noWrap>
        {boxTitle}
      </Typography>
      {displayValue.map((item, index) => (
        <Typography
          variant="body1"
          color="textSecondary"
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
