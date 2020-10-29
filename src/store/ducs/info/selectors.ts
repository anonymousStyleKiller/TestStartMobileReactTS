import {IStore} from "../../store";
import {LoadingState } from "../peoples/contracts/state";
import { IInfoState } from "./contracts/state";

export const selectInfo = (state: IStore): IInfoState => state.info;

export const selectInfoItems = (state: IStore)  => selectInfo(state).data;

export const selectLoadingState = (state: IStore): LoadingState => selectInfo(state).loadingState;

export const selectInfoLoading = (state: IStore): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectInfoLoaded = (state: IStore): boolean => selectLoadingState(state) === LoadingState.LOADED;
