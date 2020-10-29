import {Action} from "redux";
import { IPeopleState, LoadingState } from "./state";

export enum PeopleActionTypes {
    FETCH_PEOPLE_DATA = "PEOPLE/FETCH_PEOPLE_DATA",
    SET_PEOPLE_DATA = "PEOPLE/SET_PEOPLE_DATA",
    SET_LOADING_STATE = "PEOPLE/SET_LOADING_STATE",
}

export interface IFetchPeopleData extends Action<PeopleActionTypes>{
    type: PeopleActionTypes.FETCH_PEOPLE_DATA;
}

export interface ISetPeopleData extends Action<PeopleActionTypes>{
    type: PeopleActionTypes.SET_PEOPLE_DATA;
    payload: IPeopleState["data"];
}

export interface ISetLoadingState extends Action<PeopleActionTypes>{
    type: PeopleActionTypes.SET_LOADING_STATE;
    payload: LoadingState;
}