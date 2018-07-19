import "./styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faStopCircle
} from "@fortawesome/free-solid-svg-icons";

const TimerBody = ({
  playing,
  clickPlayButton,
  clickPauseButton,
  clickStopButton
}) => {
  return (
    <div className="TimerBody__container">
      {!playing && (
        <div onClick={clickPlayButton}>
          <FontAwesomeIcon icon={faPlayCircle} size="3x" color="#07141E" />
        </div>
      )}
      {playing && (
        <div onClick={clickPauseButton}>
          <FontAwesomeIcon icon={faPauseCircle} size="3x" color="#07141E" />
        </div>
      )}
      {playing && (
        <div onClick={clickStopButton}>
          <FontAwesomeIcon icon={faStopCircle} size="3x" color="#07141E" />
        </div>
      )}
    </div>
  );
};

TimerBody.defaultProps = {
  playing: false
};

export default TimerBody;
