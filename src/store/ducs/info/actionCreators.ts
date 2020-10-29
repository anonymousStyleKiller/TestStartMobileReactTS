import {IPeopleState, LoadingState} from "./contracts/state";
import {IFetchPeopleData, ISetLoadingState, ISetPeopleData, PeopleActionTypes} from "./contracts/actionTypes";

export const setPeople = (payload: IPeopleState["data"]): ISetPeopleData => ({
    type: PeopleActionTypes.SET_PEOPLE_DATA,
    payload
})

export const fetchPeople = (): IFetchPeopleData => {
    return(
        {type: PeopleActionTypes.FETCH_PEOPLE_DATA}
    )
}

export const setLoadingState = (payload: LoadingState): ISetLoadingState => ({
    type: PeopleActionTypes.SET_LOADING_STATE,
    payload
})

export type PeoplesAction = ISetPeopleData | IFetchPeopleData | ISetLoadingState;