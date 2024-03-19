import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";


export default function CountdownTimer() {

  const renderTime = ({ remainingTime }) => {

    return (
      <div className="timer text-center">
        <div className="">Next Update</div>
        <div className="">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };

  return (
    <div className="justify-self-center col-start-2 col-span-5 lg:col-start-6 lg:col-span-1 lg:justify-self-end row-start-2 lg:row-start-1 mt-6 lg:mt-0">
      <CountdownCircleTimer
        isPlaying
        size={150}
        duration={15}
        colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true })}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  )
};

