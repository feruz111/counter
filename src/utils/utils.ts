import { AppStateType } from "../bll/store";

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem("counterValue");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppStateType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("counterValue", serializedState);
  } catch {
    // ignore write errors
  }
};
