import { LoadingState } from "../../peoples/contracts/state";

export interface IInfo {
    _id: string;
    fullname: string;
    username: string;
    avatarUrl: string;
    text: string;
}

export interface IInfoState {
    data: IInfo[],
    loadingState: LoadingState,
}