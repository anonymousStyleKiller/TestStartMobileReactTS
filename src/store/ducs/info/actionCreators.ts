import {IInfo} from "./contracts/state";
import {IFetchInfoData, ISetLoadingState, ISetInfoData, InfoActionTypes} from "./contracts/actionTypes";
import { LoadingState } from "../peoples/contracts/state";

export const setInfo = (payload: IInfo): ISetInfoData => ({
    type: InfoActionTypes.SET_INFO_DATA,
    payload
})

export const fetchInfo = (payload: string): IFetchInfoData => ({
    type: InfoActionTypes.FETCH_INFO_DATA,
    payload
})

export const setLoadingState = (payload: LoadingState): ISetLoadingState => ({
    type: InfoActionTypes.SET_LOADING_STATE,
    payload
})

export type InfoAction = ISetInfoData | IFetchInfoData | ISetLoadingState;