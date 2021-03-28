import React, { useState } from "react";
import "./App.css";
import Label from "./Label/Label";
import SettingsPage from "./SettingsPage/SettingsPage";

function App() {
  let [minValue, setCountMin] = useState(0);
  let [maxValue, setCountMax] = useState(5);
  let [count, setCount] = useState(minValue);

  const setHandler = (max: number, min: number) => {
    setCountMax(max);
    setCountMin(min);
  };

  return (
    <div className="App">
      <SettingsPage setHandler={setHandler} />
      <Label
        setCount={setCount}
        setCountMin={setCountMin}
        count={count}
        maxValue={maxValue}
        minValue={minValue}
      />
    </div>
  );
}

export default App;
