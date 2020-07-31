import React, { useState } from "react";
import Header from "./components/Header";
import Controls from "./components/Controls";
import Result from "./components/Result";
import "./App.scss";
import "animate.css"
function App() {
  const [pbdata, setpbdata] = useState(0);
  return (
    <div className="App">
      <div className="calculator animate__animated animate__fadeIn">
        <Header />
        <Controls setpbdata={setpbdata} />
        <Result pbdata={pbdata} />
      </div>
      <div className="footer">
        <p> A ReactJS based project by Jinson Abraham</p>
        <p> Find this on Github </p> 
      </div>
    </div>
  );
}

export default App;
