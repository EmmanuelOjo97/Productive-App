import React, { useState } from "react";

function Pomodoro() {
  const [timeInput, setTimeInput] = useState(0);
  const [pomodoroCycles, setPomodoroCycles] = useState([]);
  const [takeABreak, setTakeABreak] = useState(false);
  const [takeExtendedBreak, setTakeExtendedBreak] = useState("pooper");

  // 60000 milliseconds is 1 minute
  const secondsToMinutes = (time) => {
    let minutes = time * 1000;
    return minutes;
  };

  let extendedBreakTime = 4;

  // if (extendedBreakTime / pomodoroCycles.length === 1) {

  // }

  // console.log(extendedBreakTime / pomodoroCycles.length);

  //   const countPomodoros = ()=>{
  //🍅 🍅
  //   }

  const handleSubmit = (e) => {
    let audio = new Audio("/bellsound.mp3");
    e.preventDefault();

    if (pomodoroCycles.length < 4) {
      setTakeABreak(false);
      let tomato = { image: "🍅" };
      setPomodoroCycles([...pomodoroCycles, tomato]);
      console.log(pomodoroCycles.length);
    }
    setTimeout(() => {
      // audio.play();
      console.log("Work Day done");
      setTakeABreak(true);
      if (pomodoroCycles.length >= 3) {
        console.log("Its time to STOP");
        setTakeABreak(true);
        setPomodoroCycles([]);
        setTakeExtendedBreak("Why wont you work");
      }
    }, secondsToMinutes(timeInput));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          step="5"
          value={timeInput}
          onChange={(e) => setTimeInput(e.target.value)}
          max="60"
        />
        <button> Start time</button>
      </form>
      {extendedBreakTime / pomodoroCycles.length === 2 ? (
        <h1>Take An extended break big dawg</h1>
      ) : (
        <h1>Start Timer </h1>
      )}
      <div>
        {pomodoroCycles.map((tomato, id) => {
          return <h1 key={id}>{tomato.image}</h1>;
        })}
      </div>
      {/* )} */}
    </div>
  );
}

export default Pomodoro;
