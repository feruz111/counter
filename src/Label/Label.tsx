import React, { ChangeEvent, useState } from "react";
import ButtonPage from "../Button/ButtonPage";
import s from "./Label.module.css";

type PropsType = {
  setCount: (a: number) => void;
  count: number;
  maxValue: number;
  minValue: number;
  setCountMin: (a: number) => void;
};

function Label(props: PropsType) {
  let disabledIncrement = props.count >= props.maxValue;

  let disabledReset = props.count === props.minValue;

  let classIncrement = !disabledIncrement ? s.button : s.buttonDisabled;

  let classReset =
    props.count < props.minValue || props.count > props.minValue
      ? s.button
      : s.buttonDisabled;

  let countClass = props.count === props.maxValue ? s.countFive : "";

  const onClickHandlerIncrement = () => {
    if (props.count < props.maxValue) {
      props.setCount(props.count + 1);
    }
  };

  const onClickHandlerReset = () => {
    props.setCount(props.minValue);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.countWrapper}>
        <div className={countClass}>{props.count}</div>
      </div>
      <div className={s.buttonWrapper}>
        <div className={s.firstButton}>
          <ButtonPage
            onClickHandler={onClickHandlerIncrement}
            content="inc"
            disabled={disabledIncrement}
            className={classIncrement}
          />
        </div>
        <div className={s.secondButton}>
          <ButtonPage
            onClickHandler={onClickHandlerReset}
            content="reset"
            disabled={disabledReset}
            className={classReset}
          />
        </div>
      </div>
    </div>
  );
}

export default Label;
