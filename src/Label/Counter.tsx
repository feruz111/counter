import React, { ChangeEvent, Dispatch, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incCountAC, resetCountAC } from "../bll/count-reducer";
import { AppStateType } from "../bll/store";
import ButtonPage from "../Button/ButtonPage";
import s from "./Counter.module.css";

type PropsType = {
  reduxMinValue: number
  reduxMaxValue: number
  count: number;
  editMode: boolean;
  error: boolean;
  dispatch: (d: any) => void
};

function Counter(props: PropsType) {
  let disabledIncrement = props.count >= props.reduxMaxValue;

  let disabledReset = props.count === props.reduxMinValue;

  let classIncrement = !disabledIncrement ? s.button : s.buttonDisabled;

  let classReset =
    props.count < props.reduxMinValue || props.count > props.reduxMinValue
      ? s.button
      : s.buttonDisabled;

  let countClass = props.count === props.reduxMaxValue ? s.countFive : "";

  const onClickHandlerIncrement = () => {
    if (props.count < props.reduxMaxValue) {
      props.dispatch(incCountAC());
    }
  };

  const onClickHandlerReset = () => {
    props.dispatch(resetCountAC(props.reduxMinValue))
  };

  return (
    <div className={s.wrapper}>
      <div className={s.countWrapper}>
        {props.error ? (
          <div className={s.error}>{"Incorrect value!"}</div>
        ) : props.editMode ? (
          <div>{"enter values and press 'set'"}</div>
        ) : (
          <div className={countClass}>{props.count}</div>
        )}
      </div>
      <div className={s.buttonWrapper}>
        <div className={s.firstButton}>
          <ButtonPage
            onClickHandler={onClickHandlerIncrement}
            content="inc"
            disabled={props.editMode || disabledIncrement}
            className={props.editMode ? s.buttonDisabled : classIncrement}
          />
        </div>
        <div className={s.secondButton}>
          <ButtonPage
            onClickHandler={onClickHandlerReset}
            content="reset"
            disabled={props.editMode || disabledReset}
            className={props.editMode ? s.buttonDisabled : classReset}
          />
        </div>
      </div>
    </div>
  );
}

export default Counter;
