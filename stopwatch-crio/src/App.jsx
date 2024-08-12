import { useState, useEffect } from "react";

export default function App() {
  const [activate, setActivate] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let intervalID;

    if (activate) {
      intervalID = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalID);
    }

    return () => clearInterval(intervalID); // cleanup the interval on unmount
  }, [activate]);

  const startStop = () => {
    setActivate((prev) => !prev);
  };

  const reset = () => {
    setActivate(false);
    setTimer(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>Time: {formatTime(timer)}</p>
      <button onClick={startStop}>{activate ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
