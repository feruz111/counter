import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { maxValueSetAC, minValueSetAC } from "./bll/count-reducer";
import { AppStateType } from "./bll/store";
import Counter from "./Label/Counter";
import SettingsPage from "./SettingsPage/SettingsPage";

function App() {
  const value = useSelector<AppStateType, number>((state) => state.count.value);
  const error = useSelector<AppStateType, boolean>((state) => state.count.error);
  const editMode = useSelector<AppStateType, boolean>((state) => state.count.editMode);
  const reduxMinValue = useSelector<AppStateType, number>(
    (state) => state.count.minValue
  );
  const reduxMaxValue = useSelector<AppStateType, number>(
    (state) => state.count.maxValue
  );
  const dispatch = useDispatch();

//   useEffect(() => {
//     let asString = localStorage.getItem("countValue");
//     if (asString) {
//       let newValue = JSON.parse(asString);
//       setCount(newValue);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("countValue", JSON.stringify(count));
//   }, [count]);


  return (
    <div className="App">
      <SettingsPage
        reduxMinValue={reduxMinValue}
        reduxMaxValue={reduxMaxValue}
        error={error}
        editMode={editMode}
        dispatch={dispatch}
      />
      <Counter
        reduxMinValue={reduxMinValue}
        reduxMaxValue={reduxMaxValue}
        error={error}
        editMode={editMode}
        count={value}
        dispatch={dispatch}
      />
    </div>
  );
}

export default App;
