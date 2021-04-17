import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { countReducer } from "./count-reducer";

const rootReducer = combineReducers({
  count: countReducer,
});

export type AppStateType = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer,applyMiddleware(thunk));

export type AppStoreType = typeof store;
