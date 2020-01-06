// Basic clock that has HH:MM

/* eslint-disable arrow-parens */
import React, { useState, useEffect } from 'react';

export default function SearchBar(props) {
  const [time, setTime] = useState('14:14am');

  const tick = () => {
    setTime(
      new Date().toLocaleString(navigator.language, {
        hour: '2-digit',
        minute: '2-digit',
      }),
    );
  };
  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);
  });
  return <span>{time}</span>;
}
