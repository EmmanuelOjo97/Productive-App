import React from "react";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

function TimeChoose({ input }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(input);
  const [timing, setTiming] = useState(true);
  const [cycles, setCycles] = useState([]);
  const [displayMessage, setDisplayMessage] = useState(false);
  const [extendedBreak, setExtendedBreak] = useState(false);

  const secondsTime = seconds >= 10 ? seconds : `0${seconds}`;
  const minuteTime = minutes >= 10 ? minutes : `0${minutes}`;

  useEffect(() => {
    if (timing === true) {
      console.log("WE stopped");
    } else {
      var countDown = setInterval(() => {
        clearInterval(countDown);
        if (seconds === 0) {
          if (minutes !== 0) {
            setMinutes(input);
            setSeconds(59);
            setMinutes(minutes - 1);
          } else {
            let audio = new Audio("/bellsound.mp3");
            audio.play();
            let minutes = displayMessage ? input : 5;
            let seconds = 0;
            setSeconds(seconds);
            setMinutes(minutes);
            setDisplayMessage(!displayMessage);
            setTiming(!timing);
            if (displayMessage === false) {
              let workCycle = { time: "🍅" };
              setCycles([...cycles, workCycle]);
              if (cycles.length >= 3) {
                // set the cyles length to 3
                setExtendedBreak(true);
                setCycles([]);
                setMinutes(30);
              }
            }
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
    return () => {
      clearInterval(countDown);
    };
  }, [timing, seconds, input]);

  const pauseCount = () => {
    setTiming(true);
  };

  const playCount = () => {
    setTiming(false);
  };

  return (
    <div className={styles.timerCard}>
      {displayMessage === false && extendedBreak === false ? (
        <h1>Time to study</h1>
      ) : null}
      {displayMessage === true && extendedBreak === false ? (
        <h1>Start your Break</h1>
      ) : null}
      {extendedBreak && <h1>Take an extended Break</h1>}
      <h1>
        {minuteTime} {secondsTime}
      </h1>
      <button
        onClick={() => {
          pauseCount();
        }}
        className={styles.pause}
      >
        Pause
      </button>

      <button
        onClick={() => {
          playCount();
        }}
        className={styles.pause}
      >
        Play
      </button>
      <div>
        {cycles.map((cycle, id) => {
          return (
            <h1 key={id} className={styles.cycles}>
              {cycle.time}
            </h1>
          );
        })}
      </div>
    </div>
  );
}

export default TimeChoose;
