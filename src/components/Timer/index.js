import React from "react";
import "./styles.css";
import TimerHeader from "../TimerHeader";
import TimerBody from "../TimerBody";

const Timer = ({
  playing,
  leftTimes,
  clickPlayButton,
  clickPauseButton,
  clickStopButton
}) => {
  return (
    <div className="Timer__container">
      <div className="Timer__header">
        <TimerHeader
          playing={playing}
          leftTimes={leftTimes}
          clickPlayButton={clickPlayButton}
        />
      </div>
      <div className="Timer__body">
        <TimerBody
          playing={playing}
          clickPlayButton={clickPlayButton}
          clickPauseButton={clickPauseButton}
          clickStopButton={clickStopButton}
        />
      </div>
    </div>
  );
};

export default Timer;
