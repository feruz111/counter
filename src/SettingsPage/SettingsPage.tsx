import React, {
  ChangeEvent,
  ChangeEventHandler,
  useEffect,
  useState,
} from "react";
import { maxValueSetAC, minValueSetAC, setEditModeAC, setErrorAC } from "../bll/count-reducer";
import ButtonPage from "../Button/ButtonPage";
import s from "./SettingsPage.module.css";

type PropsType = {
  reduxMinValue: number;
  reduxMaxValue: number;
  editMode: boolean;
  error: boolean;
  dispatch: (d: any) => void;
};

function SettingsPage(props: PropsType) {
  // useEffect(() => {
  //     let asString = localStorage.getItem("max");
  //     if (asString) {
  //         let newValue = JSON.parse(asString);
  //         setMaxValue(newValue);
  //     }
  // }, []);
  // useEffect(() => {
  //     let asString = localStorage.getItem("min");
  //     if (asString) {
  //         let newValue = JSON.parse(asString);
  //         setMinValue(newValue);
  //     }
  // }, []);

  // useEffect(() => {
  //     localStorage.setItem("max", JSON.stringify(maxValue));
  // }, [maxValue]);
  // useEffect(() => {
  //     localStorage.setItem("min", JSON.stringify(minValue));
  // }, [minValue]);

  if (
    props.reduxMinValue < 0 ||
    props.reduxMaxValue < 0 ||
    props.reduxMinValue === props.reduxMaxValue
  ) {
    props.dispatch(setErrorAC(true))
  } else if (
    props.reduxMinValue > 0 ||
    props.reduxMaxValue > 0 ||
    props.reduxMinValue !== props.reduxMaxValue
  ) {
    props.dispatch(setErrorAC(false));
  }

  let minDisabled =
    props.reduxMinValue < 0 || props.reduxMinValue === props.reduxMaxValue
      ? true
      : false;
  let maxDisabled =
    props.reduxMaxValue < 0 || props.reduxMinValue === props.reduxMaxValue
      ? true
      : false;

  let disable =
    props.reduxMaxValue <= props.reduxMinValue ||
    props.reduxMinValue < 0 ||
    props.reduxMaxValue < 0
      ? true
      : false;

  let onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.dispatch(setEditModeAC(true));
    props.dispatch(maxValueSetAC(parseInt(e.currentTarget.value)));

    disable = false;
  };

  let onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.dispatch(setEditModeAC(true));
    props.dispatch(minValueSetAC(parseInt(e.currentTarget.value)));

    disable = false;
  };

  const onSetChange = () => {
    disable = true;
    props.dispatch(setEditModeAC(false));
  };

  return (
    <div className={s.wrapper}>
      <div className={s.inputsWrapper}>
        <div className={s.firstInputWrapper}>
          <div className={s.maxMinWrapper}>max value:</div>
          <div className={s.inputWrapper}>
            <input
              value={props.reduxMaxValue}
              type="number"
              onChange={onMaxChange}
              className={maxDisabled ? s.inputError : ""}
            />
          </div>
        </div>
        <div className={s.secondInputWrapper}>
          <div className={s.maxMinWrapper}>min value:</div>
          <div className={s.inputWrapper}>
            <input
              value={props.reduxMinValue}
              type="number"
              onChange={onMinChange}
              className={minDisabled ? s.inputError : ""}
            />
          </div>
        </div>
      </div>
      <div className={s.buttonWrapper}>
        <div className={s.center}>
          <ButtonPage
            content={"set"}
            disabled={disable}
            className={disable && "" ? s.setButtonDisabled : s.setButton}
            onClickHandler={onSetChange}
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
