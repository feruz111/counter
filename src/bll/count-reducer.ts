const InitialState = {
  value: 0,
  maxValue: 5,
  minValue: 0,
  error: false,
  editMode: false,
};

type InitialStateType = typeof InitialState;

export const countReducer = (
  state: InitialStateType = InitialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "INC-VALUE": {
      return {
        ...state,
        value: state.value + 1,
      };
    }
    case "RESET-VALUE": {
      return {
        ...state,
        value: action.minValue,
      };
    }
    case "SET-MAX-VALUE": {
      return {
        ...state,
        maxValue: action.maxValue,
      };
    }
    case "SET-MIN-VALUE": {
      return {
        ...state,
        minValue: action.minValue,
      };
    }
    case "SET-ERROR": {
      return {
        ...state,
        error: action.error,
      };
    }
    case "SET-EDITMODE": {
      return {
        ...state,
        editMode: action.editMode,
      };
    }
    default: {
      return state;
    }
  }
};

export const incCountAC = () => ({ type: "INC-VALUE" } as const);
export const resetCountAC = (minValue: number) =>
  ({ type: "RESET-VALUE", minValue } as const);
export const maxValueSetAC = (maxValue: number) =>
  ({ type: "SET-MAX-VALUE", maxValue } as const);
export const minValueSetAC = (minValue: number) =>
  ({ type: "SET-MIN-VALUE", minValue } as const);
export const setErrorAC = (error: boolean) =>
  ({ type: "SET-ERROR", error } as const);
export const setEditModeAC = (editMode: boolean) =>
  ({ type: "SET-EDITMODE", editMode } as const);

export type IncValuesActionType = ReturnType<typeof incCountAC>;
export type ResetCountActionType = ReturnType<typeof resetCountAC>;
export type MaxValueSetActionType = ReturnType<typeof maxValueSetAC>;
export type MinValueSetActionType = ReturnType<typeof minValueSetAC>;
export type SetErrorActionType = ReturnType<typeof setErrorAC>;
export type SetEditModeActionType = ReturnType<typeof setEditModeAC>;

type ActionType =
  | IncValuesActionType
  | ResetCountActionType
  | MaxValueSetActionType
  | MinValueSetActionType
  | SetErrorActionType
  | SetEditModeActionType;
