import {call, put, takeEvery} from 'redux-saga/effects'
import {Api} from '../../../services/peopleApi';
import { LoadingState } from '../peoples/contracts/state';
import {setLoadingState, setInfo} from './actionCreators';
import {IFetchInfoData, InfoActionTypes} from "./contracts/actionTypes";

 function* fetchInfo({payload: id}:IFetchInfoData) {
    try{
        const items = yield call(Api.fetchInfo, id);
        yield put(setInfo(items));
    }catch (e){
        yield put(setLoadingState(LoadingState.ERROR));
    }
}

export function* infoSaga() {
    yield takeEvery(InfoActionTypes.FETCH_INFO_DATA,  fetchInfo);
}