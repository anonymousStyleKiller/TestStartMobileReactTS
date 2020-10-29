import {combineReducers} from "redux";
import { infoReducer } from "./ducs/info/reducer";
import {peopleReducer} from "./ducs/peoples/reducer";

export const rootReducer = combineReducers({
    people : peopleReducer,
    info: infoReducer
})