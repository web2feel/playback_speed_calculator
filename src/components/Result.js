import React, { useState, useEffect } from "react";

function Result({ pbdata }) {
  const [newTime, setNewTime] = useState("");
  useEffect(() => {
    //if (isNaN(pbdata)) return;
    let hours = Math.floor(pbdata / 60 / 60);
    let minutes = Math.floor(pbdata / 60) - hours * 60;
    let seconds = Math.floor(pbdata % 60);
    setNewTime(
      `${hours} <span>Hours</span> ${minutes}<span> Mins</span> ${seconds} <span>Secs</span>`
    );
  }, [pbdata]);
  return (
    <div className="result">
      <h3>Updated Runtime</h3>
      <div
        className="result-box animate__animated animate__fadeIn"
        dangerouslySetInnerHTML={{ __html: newTime }}
      ></div>
    </div>
  );
}

export default Result;
