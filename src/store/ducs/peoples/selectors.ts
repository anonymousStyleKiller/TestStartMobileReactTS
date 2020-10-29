import {IStore} from "../../store";
import {IPeopleState, LoadingState} from "./contracts/state";

export const selectPeoples = (state: IStore): IPeopleState => state.people;

export const selectPeoplesItems = (state: IStore) => selectPeoples(state).data;

export const selectLoadingState = (state: IStore): LoadingState => selectPeoples(state).loadingState;

export const selectPeoplesLoading = (state: IStore): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectPeoplesLoaded = (state: IStore): boolean => selectLoadingState(state) === LoadingState.LOADED;
