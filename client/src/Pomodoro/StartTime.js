import React from "react";
import { useState, useEffect } from "react";
import TimeChoose from "./TimeChoose";
import styles from "./styles.module.css";

function StartTime() {
  const [input, setInput] = useState(25);
  const [start, setStart] = useState(false);
  const [timers, setTimers] = useState(false);

  const startTimer = (e) => {
    e.preventDefault();
    setStart(!start);
    setTimers(true);
  };

  // useEffect(() => {
  //   setTimers(true);
  //   setStart(!start);
  // }, [input, start]);

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Pomodoro Timer</h1>
      <p className={styles.description}>
        Pomodoro Technique is a time management system to Encourage working
      </p>
      <h5 className={styles.description}>Steps to using the technique</h5>

      <ol>
        <li className={styles.steps}>
          Decide on time period to work for and work until alloted period of
          time
        </li>
        <li className={styles.steps}>
          Take a 5 minute break after a work session
        </li>
        <li className={styles.steps}>Repeat this process 3 more times.</li>
        <li className={styles.steps}>
          After the 4th break Take an extended break of 30 minutes or more
        </li>
        <li className={styles.steps}>You have completed a Pomodoro Cycle</li>
      </ol>

      <div className={styles.formTime}>
        <form onSubmit={startTimer}>
          <input
            className={styles.setTimeInput}
            type="number"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            min="1"
            max="60"
          />
          <div>
            {<button className={styles.setTimeButton}>Set Time</button>}
          </div>
        </form>
      </div>

      {start ? (
        <TimeChoose
          input={input}
          timers={timers}
          setTimers={setTimers}
          setInput={setInput}
        />
      ) : null}
    </div>
  );
}

export default StartTime;
