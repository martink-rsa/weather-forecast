import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    const { timezone } = this.props;
    this.state = {
      time: moment(new Date())
        .utc()
        .utcOffset(timezone / 60)
        .format('HH:mm'),
      timerID: '',
    };
  }

  componentDidMount() {
    this.createTimer();
  }

  componentWillUnmount() {
    const { timerID } = this.state;
    window.clearInterval(timerID);
  }

  tick = () => {
    const { timezone } = this.props;
    this.setState({
      time: moment(new Date())
        .utc()
        .utcOffset(timezone / 60)
        .format('HH:mm'),
    });
  };

  createTimer = () => {
    const timerID = setInterval(() => {
      this.tick();
    }, 1000);
    this.setState({ timerID });
  };

  render() {
    const { time } = this.state;
    return <span>{time}</span>;
  }
}

Clock.propTypes = {
  timezone: PropTypes.number.isRequired,
};

export default Clock;
