// Basic clock that displays hh:mm
// It will tick every minute instead of ticking every second

import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Clock_OLD_MAIN(props) {
  const [eventFlag, setEventFlag] = useState(false);
  const [timers, setTimers] = useState();
  const [time, setTime] = useState(
    moment(new Date())
      .utc()
      .utcOffset(props.timezone / 60)
      .format('hh:mm'),
  );

  useEffect(() => {
    const tick = () => {
      console.log(timers);
      setTime(
        moment(new Date())
          .utc()
          .utcOffset(props.timezone / 60)
          .format('hh:mm'),
      );
    };

    const createTimer = () => {
      const newTime = moment(new Date())
        .utc()
        .utcOffset(props.timezone / 60)
        .format('ss');
      setTimeout(() => {
        setTime(
          moment(new Date())
            .utc()
            .utcOffset(props.timezone / 60)
            .format('hh:mm'),
        );

        setInterval(() => {
          console.log(timerID);
          setTimers(timerID);
          console.log(timers);
          tick();
        }, 1000);
      });
    };
    if (!eventFlag) {
      createTimer();
      setEventFlag(true);
    }
  }, [eventFlag, props.timezone, timers, setTimers]);

  /*   useEffect(() => {
    return () => {
      console.log('Remove timer');
      console.log(timerID);
      if (timerID) {
        clearInterval(timerID);
        console.log('Timer cleared for ' + timerID);
      }
    };
  }, [timerID]); */

  return <span>{time}</span>;
}
