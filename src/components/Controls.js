import React, { useState, useEffect } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function Controls({ setpbdata }) {

  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const [deciTime, setDeciTime] = useState();
  const [speed, setSpeed] = useState("1");

  useEffect(() => {
    setDeciTime(hours * 3600 + mins * 60 + secs);
  }, [hours, mins, secs]);

  useEffect(() => {
    setpbdata(deciTime / speed);
  }, [deciTime, speed]);

  const focusHandle = (e) => {
    if (e.target.value === "0") {
      e.target.value = "";
    }
  };
  const hourHandle = (e) => {
    e.target.value <= 999
      ? setHours(parseInt(e.target.value))
      : setHours(parseInt("00"));
  };
  const minHandle = (e) => {
    e.target.value <= 59 ? setMins(parseInt(e.target.value)) : setMins(59);
  };
  const secHandle = (e) => {
    e.target.value <= 59 ? setSecs(parseInt(e.target.value)) : setSecs(59);
  };
  const speedHandle = (value) => {
    setSpeed(value);
  };

  const marks = {
    0.25: "0.25",
    0.5: "0.50",
    0.75: "0.75",
    1: "1",
    1.25: "1.25",
    1.5: "1.50",
    1.75: "1.75",
    2: "2",
  };

  return (
    <div className="main">
      <div className="media_runtime">
        <h3> Enter Media Runtime</h3>
        <form id="duration">
          <div>
            <input
              id="h"
              name="h"
              type="number"
              min="0"
              onChange={hourHandle}
              onFocus={focusHandle}
              value={hours}
              placeholder="0"
            />
            <label htmlFor="h">Hrs</label>
          </div>
          <div>
            <input
              id="m"
              name="m"
              type="number"
              min="0"
              max="59"
              onChange={minHandle}
              onFocus={focusHandle}
              value={mins}
              placeholder="0"
            />
            <label htmlFor="m">Mins</label>
          </div>
          <div>
            <input
              id="s"
              name="s"
              type="number"
              min="0"
              max="59"
              onChange={secHandle}
              onFocus={focusHandle}
              value={secs}
              placeholder="0"
            />
            <label htmlFor="s">Secs</label>
          </div>
        </form>
      </div>
      <div className="playback_speed">
        <h3> Set Playback Speed</h3>
        <div className="pb_slider">
          <Slider
            min={0.25}
            max={2}
            step={0.25}
            dots={true}
            marks={marks}
            value={speed}
            onChange={speedHandle}
          />
        </div>
      </div>
    </div>
  );
}

export default Controls;
