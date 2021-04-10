import { combineReducers, createStore } from "redux";
import { countReducer } from "./count-reducer";

const rootReducer = combineReducers({
    count: countReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

type AppStoreType = typeof store

