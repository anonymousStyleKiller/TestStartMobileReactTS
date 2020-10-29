import {call, put, takeEvery} from 'redux-saga/effects'
import {Api} from '../../../services/peopleApi';
import {setLoadingState, setPeople} from './actionCreators';
import {PeopleActionTypes} from "./contracts/actionTypes";
import {LoadingState} from "./contracts/state";

 function* fetchPeople() {
    try{
        const items = yield call(Api.fetchPeople);
        yield put(setPeople(items));
    }catch (e){
        yield put(setLoadingState(LoadingState.ERROR));
    }
}

export function* peoplesSaga() {
    yield takeEvery(PeopleActionTypes.FETCH_PEOPLE_DATA,  fetchPeople);
}