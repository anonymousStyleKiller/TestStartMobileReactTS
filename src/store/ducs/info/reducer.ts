import {Draft, produce} from "immer";
import {IInfoState} from "./contracts/state";
import {InfoAction} from "./actionCreators";
import {InfoActionTypes} from "./contracts/actionTypes";
import {LoadingState} from "../peoples/contracts/state";

const initialInfoState: IInfoState = {
    data: [],
    loadingState: LoadingState.NEVER,
}

export const infoReducer = produce((draft: Draft<IInfoState>, action: InfoAction) => {
    switch (action.type) {
        case InfoActionTypes.FETCH_INFO_DATA:
            draft.data = [];
            draft.loadingState = LoadingState.LOADED;
            break;
        case InfoActionTypes.SET_INFO_DATA:
            // @ts-ignore
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADING;
            break;
        case InfoActionTypes.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;
        default:
            break;
    }
}, initialInfoState)