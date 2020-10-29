import {Draft, produce} from "immer";
import {IPeopleState, LoadingState} from "./contracts/state";
import {PeoplesAction} from "./actionCreators";
import { PeopleActionTypes } from "./contracts/actionTypes";

const initialPeopleState: IPeopleState = {
    data: [],
    loadingState: LoadingState.NEVER,
}

export const peopleReducer = produce((draft: Draft<IPeopleState>, action: PeoplesAction) =>{
    switch (action.type) {
        case PeopleActionTypes.FETCH_PEOPLE_DATA:
            draft.data = [];
            draft.loadingState = LoadingState.LOADED;
            break;
        case PeopleActionTypes.SET_PEOPLE_DATA:
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADING;
            break;
        case PeopleActionTypes.SET_LOADING_STATE:
            draft.loadingState = action.payload;
            break;
        default:
            break;
    }
}, initialPeopleState)