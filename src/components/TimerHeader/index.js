import "./styles.css";
import React from "react";

const TimerHeader = ({ leftTimes }) => {
  let minute = Math.floor(leftTimes / 60);
  let second = Math.floor(leftTimes % 60);

  return (
    <div className="TimerHeader__container">
      <span className="TimerHeader__time">
        {minute < 10 && 0}
        {minute}:{second < 10 && 0}
        {second}
      </span>
    </div>
  );
};

export default TimerHeader;
