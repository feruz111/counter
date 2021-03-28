import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import Button from "../Button/ButtonPage";
import s from "./SettingsPage.module.css";

type PropsType = {
  setHandler: (a: number, b: number) => void;
};

function SettingsPage(props: PropsType) {
  let [maxValue, setMaxValue] = useState(5);
  let [minValue, setMinValue] = useState(0);
  
  let disable =
  maxValue <= minValue || minValue < 0 || maxValue < 0 ? true : false;


  let onMaxChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(parseInt(e.currentTarget.value));
    disable = false
  };

  let onMinChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(parseInt(e.currentTarget.value));
    disable = false

  };

  const onSetChange = () => {
    props.setHandler(maxValue, minValue);
    disable = true
  };


  return (
    <div className={s.wrapper}>
      <div className={s.inputsWrapper}>
        <div className={s.firstInputWrapper}>
          <div className={s.maxMinWrapper}>max value:</div>
          <div className={s.inputWrapper}>
            <input type="number" onChange={onMaxChange} />
          </div>
        </div>
        <div className={s.secondInputWrapper}>
          <div className={s.maxMinWrapper}>min value:</div>
          <div className={s.inputWrapper}>
            <input type="number" onChange={onMinChange} />
          </div>
        </div>
      </div>
      <div className={s.buttonWrapper}>
        <div className={s.center}>
        <button
          disabled={disable}
          className={disable ? s.setButtonDisabled : s.setButton}
          onClick={onSetChange}
        >
          set
        </button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
