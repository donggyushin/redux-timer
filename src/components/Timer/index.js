import React from "react";
import "./styles.css";
import TimerHeader from "../TimerHeader";
import TimerBody from "../TimerBody";

const Timer = () => {
  return (
    <div className="Timer__container">
      <div className="Timer__header">
        <TimerHeader />
      </div>
      <div className="Timer__body">
        <TimerBody />
      </div>
    </div>
  );
};

export default Timer;
