// Basic clock that displays hh:mm
// It will tick every minute instead of ticking every second

import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(
    new Date().toLocaleString(navigator.language, {
      hour: '2-digit',
      minute: '2-digit',
    }),
  );
  const [eventFlag, setEventFlag] = useState(false);

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
        }),
      );
    };

    const createTimer = () => {
      setTimeout(
        () => setInterval(() => tick(), 60000),
        (60 - new Date().getSeconds()) * 1000,
      );
    };
    if (!eventFlag) {
      createTimer();
      setEventFlag(true);
    }
  }, [eventFlag]);

  return <span>{time}</span>;
}
