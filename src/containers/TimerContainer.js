import React, { Component } from "react";
import Timer from "components/Timer";
import { connect } from "react-redux";
import * as timerActions from "store/modules/timer";

class TimerContainer extends Component {
  startTimer;

  _clickPlayButton = () => {
    if (this.props.leftTimes === 0) {
      this.props.recover();
    }

    this.props.toggle();
    this.startTimer = setInterval(() => {
      this.props.decrease();
      if (this.props.leftTimes === 0) {
        clearInterval(this.startTimer);
        this.props.toggle();
      }
    }, 1000);
  };
  ㅅ;

  _clickPauseButton = () => {
    this.props.toggle();
    clearInterval(this.startTimer);
  };

  _clickStopButton = () => {
    this.props.toggle();
    clearInterval(this.startTimer);
    this.props.recover();
  };

  render() {
    return (
      <Timer
        playing={this.props.playing}
        leftTimes={this.props.leftTimes}
        clickPlayButton={this._clickPlayButton}
        clickPauseButton={this._clickPauseButton}
        clickStopButton={this._clickStopButton}
      />
    );
  }
}

const mapStateToProps = state => ({
  playing: state.timer.playing,
  leftTimes: state.timer.leftTimes
});

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch(timerActions.toggle()),
  decrease: () => dispatch(timerActions.decrease()),
  recover: () => dispatch(timerActions.recover())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerContainer);
