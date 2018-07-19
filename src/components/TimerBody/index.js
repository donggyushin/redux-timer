import "./styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faPauseCircle,
  faStopCircle
} from "@fortawesome/free-solid-svg-icons";

const TimerBody = ({ playing }) => {
  return (
    <div className="TimerBody__container">
      {!playing && (
        <FontAwesomeIcon icon={faPlayCircle} size="3x" color="#07141E" />
      )}
      {playing && (
        <FontAwesomeIcon icon={faPauseCircle} size="3x" color="#07141E" />
      )}
      {playing && (
        <FontAwesomeIcon icon={faStopCircle} size="3x" color="#07141E" />
      )}
    </div>
  );
};

TimerBody.defaultProps = {
  playing: false
};

export default TimerBody;
