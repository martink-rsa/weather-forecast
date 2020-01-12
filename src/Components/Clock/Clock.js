import React from 'react';
import moment from 'moment';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment(new Date())
        .utc()
        .utcOffset(this.props.timezone / 60)
        .format('hh:mm'),
      timerID: '',
    };
  }

  componentDidMount() {
    this.createTimer();
  }

  componentWillUnmount() {
    window.clearInterval(this.state.timerID);
  }

  tick = () => {
    this.setState({
      time: moment(new Date())
        .utc()
        .utcOffset(this.props.timezone / 60)
        .format('hh:mm'),
    });
  };

  createTimer = () => {
    const timerID = setInterval(() => {
      this.tick();
    }, 1000);
    console.log(timerID);
    this.setState({ timerID: timerID });
  };

  render() {
    return <span>{this.state.time}</span>;
  }
}

export default Clock;
