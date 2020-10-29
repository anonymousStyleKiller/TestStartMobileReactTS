export enum LoadingState {
    LOADING = "PEOPLES/LOADING",
    LOADED = "PEOPLES/LOADED",
    ERROR = "PEOPLES/ERROR",
    NEVER = "PEOPLES/NEVER",
}

export interface IPeople {
    _id: string;
    fullname: string;
    username: string;
    avatarUrl: string;
    text: string;
}

export interface IPeopleState {
    data: IPeople[],
    loadingState: LoadingState,
}