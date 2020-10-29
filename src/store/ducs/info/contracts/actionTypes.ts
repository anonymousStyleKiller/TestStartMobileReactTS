import {Action} from "redux";
import {IInfo, IInfoState} from "./state";
import { LoadingState } from "../../peoples/contracts/state";

export enum InfoActionTypes {
    FETCH_INFO_DATA = "INFO/FETCH_INFO_DATA",
    SET_INFO_DATA = "INFO/SET_INFO_DATA",
    SET_LOADING_STATE = "INFO/SET_LOADING_STATE",
}

export interface IFetchInfoData extends Action<InfoActionTypes>{
    type: InfoActionTypes.FETCH_INFO_DATA;
    payload: string;
}

export interface ISetInfoData extends Action<InfoActionTypes>{
    type: InfoActionTypes.SET_INFO_DATA;
    payload: IInfo;
}

export interface ISetLoadingState extends Action<InfoActionTypes>{
    type: InfoActionTypes.SET_LOADING_STATE;
    payload: LoadingState;
}