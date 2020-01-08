/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const UnitButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '0',
    minWidth: '30px',
    // border: '1px solid',
    lineHeight: 1.5,
    // backgroundColor: '#007bff',
    borderColor: '#007bff',
    /*     fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','), */
    '&:hover': {
      // backgroundColor: '#0069d9',
      // borderColor: '#0062cc',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      // backgroundColor: '#0062cc',
      // borderColor: '#005cbf',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);

export default function TemperatureControl(props) {
  const changeTempUnit = newUnit => {
    const { currentUnit, changeUserUnit } = props;
    if (newUnit !== currentUnit) {
      changeUserUnit(newUnit);
    }
  };

  return (
    <span>
      <UnitButton onClick={() => changeTempUnit('C')}>C</UnitButton>
      {'/'}
      <UnitButton onClick={() => changeTempUnit('F')}>F</UnitButton>
    </span>
  );
}

TemperatureControl.propTypes = {
  currentUnit: PropTypes.string.isRequired,
  changeUserUnit: PropTypes.func.isRequired,
};
